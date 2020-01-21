<h1 align="center">
    <img alt="Lumen" title="Lumen" src="https://github.com/abuuzayr/js-talks/blob/master/static/js-logo.png" width="140"> </br>
    JavaScript Talks / Conferences as Podcasts
</h1>

<p align="center">
    In the spirit of an accessible, open web, let's make JavaScript conference talks reach more people via podcasts. 
</p>

<p align="center">
    We already have video, as well as transcripts of those videos. I believe what is missing is audio as a medium, so that the learnings from these conferences can reach more people, not just those who attended the confererences or those who have the luxury of watching the videos.
</p>

## The argument for audio as a medium

This is largely scratching my own itch - I have a lot of time to listen during commutes, but not much time to watch a video, attend a conference or read lengthy transcripts. Some context is also lost in reading transcripts. Similarly, conferences usually come with a visual component, but a lot of the material is understood through audio. Listeners who wish to follow along will have to watch the video. 

However, the more I thought of it, the more I realise that by opening audio as a medium, we also allow developers in other countries or places with a weaker or limited connection to be able to listen in to these wonderful talks. A minute of a podcast is about 1MB, while a minute of 480p video is about 4.4MB. 

## These podcasts would be useful for

- Those on long drives/commutes
- While running/exercising
- The visually impaired
- Those who have a poor/limited internet connection

.. to be able to also gain insights from these conversations.

## Future work / contribution

Right now the work to get these podcasts to the various distribution platforms is manual, but my hope is to be able to automate this process somehow:

1. After video is uploaded to YouTube from a conference
2. Extract the audio from the video
3. Upload the audio 
4. Update the podcast RSS feed

Ideally also I would like to allow contribution from other developers in sourcing the video URLs and adding it, so in addition to the above, perhaps we would need to have some JSON (?) representation of the videos (URL, title, etc.), which when updated will trigger a pipeline for the above and update the podcasts automatically. 

## Support

Podcast hosting costs money and I do not earn anything from it. If you would like to support this project, you can [buy me a coffee](https://www.buymeacoffee.com/iB2dbMt)! :smiley:

## Videos

### JSConf EU 2019

| Title | Speaker | Video URL | Description | Added? |
| --- | --- | --- | --- | --- |
| The economics of open source | C J Silverio | https://www.youtube.com/watch?v=MO8hZlgK5zc | The JS package commons is in the hands of a for-profit entity. We trust npm with our shared code, but we have no way to hold npm accountable for its behavior. A trust-based system cannot function without accountability, but somebody still has to pay for the servers. How did we get here, and what should JavaScript do now? | :white_check_mark: |
