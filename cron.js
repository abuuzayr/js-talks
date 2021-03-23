const fs = require('fs')
const ytdl = require('ytdl-core')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
const B2 = require('backblaze-b2')

const job = async (token, episodes, b2AppKeyId, b2AppKey) => {
    console.log(b2AppKeyId)
    console.log(b2AppKey)
    // 2. check json for dates that are past and are not uploaded yet
    // 3. select an episode
    const episode = episodes.find(e => {
        return new Date(e.posting_date) < new Date() && !e.b2_url
    })
    const ytStream = ytdl(episode.yt_url, {
        quality: 'highestaudio',
        filter: 'audioonly'
    })
    try {
        await new Promise((resolve, reject) => {
            ffmpeg(ytStream)
                .audioCodec('libmp3lame')
                .on('error', (err) => {
                    console.log('An error occurred: ' + err.message)
                    reject()
                })
                .on('end', () => resolve())
                .save(`${episode.slug}.mp3`)
        })
    } catch (e) {
        return false
    }

    // 4. download the audio from youtube
    console.log('Processing finished !')

    // 5. upload the audio to b2
    const b2 = new B2({
        applicationKeyId: b2AppKeyId,
        applicationKey: b2AppKey,
    })
    const auth = await b2.authorize()
    const authToken = auth.data.authorizationToken
    let uploadUrl = await b2.getUploadUrl({
        bucketId: auth.data.allowed.bucketId,
    })
    uploadUrl = uploadUrl.data.uploadUrl
    try {
        await b2.uploadFile({
            uploadUrl,
            uploadAuthToken: authToken,
            fileName: `${episode.slug}.mp3`,
            data: Buffer.from(`${episode.slug}.mp3`)
        })
    } catch (e) {
        console.log(e)
    }
    const videoID = ytdl.getURLVideoID(episode.yt_url)
    const info = await ytdl.getInfo(videoID)
    const { lengthSeconds: length, title } = info.player_response.videoDetails
    console.log("length: ", length)
    console.log("title: ", title)
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
    const format = ytdl.chooseFormat(audioFormats, { quality: 'highestaudio' })
    const fileSize = format.contentLength
    console.log("fileSize: ", fileSize)
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
