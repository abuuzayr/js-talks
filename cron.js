const fs = require('fs')
const ytdl = require('ytdl-core')

const job = async (token, episodes) => {
    // 2. check json for dates that are past and are not uploaded yet
    // 3. select an episode
    const episode = episodes.find(e => {
        return new Date(e.posting_date) < new Date() && !e.b2_url
    })
    await ytdl(episode.yt_url, {
        quality: 'highestaudio',
        filter: 'audioonly'
    }).pipe(fs.createWriteStream(`${episode.slug}.mp3`))
    let stats = fs.statSync(`${episode.slug}.mp3`)
    let fileSizeInBytes = stats.size;
    console.log("fileSizeInBytes: ", fileSizeInBytes)

    const videoID = ytdl.getURLVideoID(episode.yt_url)
    console.log("videoID: ", videoID)
    const info = await ytdl.getInfo(videoID)
    console.log("info: ", info)
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly')
    console.log("audioFormats: ", audioFormats)
    const format = ytdl.chooseFormat(audioFormats, { quality: 'highestaudio' })
    console.log("format: ", format)
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
