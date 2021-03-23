const fs = require('fs')
const ytdl = require('ytdl-core')
const ffmpeg = require('fluent-ffmpeg');

const job = async (token, episodes) => {
    // 2. check json for dates that are past and are not uploaded yet
    // 3. select an episode
    const episode = episodes.find(e => {
        return new Date(e.posting_date) < new Date() && !e.b2_url
    })
    const ytStream = ytdl(episode.yt_url, {
        quality: 'highestaudio',
        filter: 'audioonly'
    })
    ffmpeg(ytStream)
        .audioCodec('libmp3lame')
        .on('error', function (err) {
            console.log('An error occurred: ' + err.message);
        })
        .on('end', function () {
            console.log('Processing finished !');
        })
        .save(`${episode.slug}.mp3`)
        
    let stats = fs.statSync(`${episode.slug}.mp3`)
    let fileSizeInBytes = stats.size;
    console.log("fileSizeInBytes: ", fileSizeInBytes)

    const videoID = ytdl.getURLVideoID(episode.yt_url)
    const info = await ytdl.getInfo(videoID)
    const { length, title } = info.player_response.videoDetails
    console.log("length: ", length)
    console.log("title: ", title)
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
    const format = ytdl.chooseFormat(audioFormats, { quality: 'highestaudio' })
    const fileSize = format.contentLength
    console.log("fileSize: ", fileSize)
    // 4. download the audio from youtube
    // 5. upload the audio to b2
    // 6. update the json
    // --- b2_url
    // 7. create the post md file
    // 8. update readme
    // 9. push the repo
    // 10. trigger build
}

module.exports = async (token, episodes) => {
    await job(token, episodes)
    return true
}
