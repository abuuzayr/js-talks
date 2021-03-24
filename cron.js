const fs = require('fs')
const ytdl = require('ytdl-core')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
const B2 = require('backblaze-b2')
let { render } = require("mustache")

const job = async (token, episodes, b2AppKeyId, b2AppKey, template, readme) => {
  // 2. check json for dates that are past and are not uploaded yet
  // 3. select an episode
  let episode = episodes.find((e) => {
    return new Date(e.posting_date) < new Date() && !e.podcast_url;
  });
  const ytStream = await new Promise((resolve, reject) => {
    ytdl(episode.yt_url, {
      quality: "highestaudio",
      filter: "audioonly",
    }).on('end', () => {
      resolve()
    })
  })

  const videoID = ytdl.getURLVideoID(episode.yt_url);
  const info = await ytdl.getInfo(videoID);
  const { lengthSeconds: length, title } = info.player_response.videoDetails;
  const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  const format = ytdl.chooseFormat(audioFormats, { quality: "highestaudio" });
  const fileSize = format.contentLength;

  try {
    await new Promise((resolve, reject) => {
      ffmpeg(ytStream)
        .audioCodec("libmp3lame")
        .on("error", (err) => {
          console.log("An error occurred: " + err.message);
          reject();
        })
        .on("end", () => resolve())
        .save(`${title}.mp3`);
    });
  } catch (e) {
    return false;
  }

  // 4. download the audio from youtube
  console.log("Processing finished !");

  // 5. upload the audio to b2
  const b2 = new B2({
    applicationKeyId: b2AppKeyId,
    applicationKey: b2AppKey,
  });
  const auth = await b2.authorize();
  let uploadUrl = await b2.getUploadUrl({
    bucketId: auth.data.allowed.bucketId,
  });
  let podcast_url = "";
  try {
    const upload = await b2.uploadFile({
      uploadUrl: uploadUrl.data.uploadUrl,
      uploadAuthToken: uploadUrl.data.authorizationToken,
      fileName: `${encodeURI(title)}.mp3`,
      data: Buffer.from(`${title}.mp3`),
    });
    if (upload)
      podcast_url = `https://js-talks.builtforfifty.workers.dev/${upload.data.fileName}`;
  } catch (e) {
    console.log(e);
  }
  // 6. update the episode --- podcast_url
  const mins = Math.floor(length / 60)
  episode = {
    ...episode,
    podcast_url,
    podcast_duration: `${mins}:${(length / 60 - mins).toFixed(2) * 60}`,
    podcast_size: fileSize,
  };
  // 7. create the post md file
  let output = render(template, episode);
  return {
    output,
    newEpisode: episode,
    episodeName: `${episode.posting_date}---${episode.slug}`,
    newReadme: `${readme}\r\n| ${episode.title} | ${episode.speaker} | [:arrow_forward:](${episode.yt_url}) | [:arrow_right:](https://js-talks.netlify.app/posts/${episode.slug}) | :white_check_mark: |`,
    newEpisodes: episodes.map(e => {
      if (e.slug === episode.slug) return episode
      return e
    }),
  };
}

module.exports = async (token, episodes, b2AppKeyId, b2AppKey, template, readme) => {
    return await job(token, episodes, b2AppKeyId, b2AppKey, template, readme)
}
