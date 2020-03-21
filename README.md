<h1 align="center">
    <img alt="Lumen" title="Lumen" src="https://github.com/abuuzayr/js-talks/blob/master/static/js-logo.png" width="140"> </br>
    JavaScript Talks / Conferences as Podcasts
</h1>

<p align="center">
    <a href="https://app.netlify.com/sites/js-talks/deploys" rel="nofollow" class="rich-diff-level-one"><img src="https://api.netlify.com/api/v1/badges/d9887467-e9eb-4aa5-90d6-91127f0ac514/deploy-status" alt="Netlify Status" style="max-width:100%;"></a>
    <a href="https://js-talks.netlify.com/" rel="nofollow" class="rich-diff-level-one"><img src="https://www.pwa-shields.com/1.0.0/series/classic/white/green.svg" alt="PWA Shields" style="max-width:100%;"></a>
</p>

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

## Stack

This is the current stack:

- :rocket: [**Gatsby**](https://www.gatsbyjs.org/) for static site development, framework, and RSS feed generation
- [**Gatsby Starter Lumen**](https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/) for the terrific starter theme for Gatsby 
- [**Netlify**](https://www.netlify.com/) for hosting the JS Talks website (they have a generous free tier)
- [**Google Cloud Platform**](https://cloud.google.com/) for hosting the audio files (5GB free storage if hosted in selected regions!)
- Apple Podcasts, Overcast, Spotify Podcasts, Google Music Podcasts for distributing the podcasts

## Support

I do not earn anything from this project. If you would like to support this project, you can [buy me a coffee](https://www.buymeacoffee.com/iB2dbMt) or contribute! :smiley:

## Videos

### JSConf EU 2019

| Title | Speaker | Video | Description | Added? |
| --- | --- | --- | --- | --- |
| The economics of open source | C J Silverio | [:arrow_forward:](https://youtu.be/MO8hZlgK5zc) | The JS package commons is in the hands of a for-profit entity. We trust npm with our shared code, but we have no way to hold npm accountable for its behavior. A trust-based system cannot function without accountability, but somebody still has to pay for the servers. How did we get here, and what should JavaScript do now? | :white_check_mark: |
| HTTP headers for the responsible developer | Stefan Judis | [:arrow_forward:](https://youtu.be/Mjqf2kkFLy8) | To build inclusive websites, developers have to consider accessibility, performance and user flows. Crafted source code forms the foundation for thought-through UIs, but it’s not only about the code. Let’s have a look at HTTP, and to be specific, its headers that can have a direct impact on user experience. | :white_check_mark: |
| Let's build a JavaScript Engine in Rust | Jason Williams | [:arrow_forward:](https://youtu.be/_uD2pijcSi4) | Have you wondered how JS engines work? This past year I built an engine from scratch in Rust. It was fun, weird, exciting and sometimes exhausting. I will share my experience as well as what it is like to work on the specification, collaborate with TC39, and lessons from engines in use today. | :white_check_mark: |
| A sneak peek into super optimized code in JS frameworks | Maxim Koretskyi | [:arrow_forward:](https://youtu.be/_VHNTC67NR8) | Very few developers have the need to write super optimized code. In application development we tend to favor readability over optimization. But that’s not the case with frameworks. Developers who use frameworks expect them to run as fast as possible. In fact, speed is often a defining characteristic when choosing a framework. There are techniques that make code run faster. You’ve probably heard about linked lists, monomorphism and bitmasks, right? Maybe you’ve even used some. Well, you can find all these and a bunch of other interesting approaches in the sources of most popular JS frameworks. Over the past year I’ve seen a lot while reverse-engineering Angular and React. In this talk I want to share my findings with you. Some of you may end up applying them at work. And others, who knows, may even end up writing the next big framework. | :white_check_mark: |
| 10 things I learned making the fastest js server runtime in the world | Paulo Lopes | [:arrow_forward:](https://youtu.be/-npTuvzflh4) | This presentation is about server performance, which means that no time in the world would be enough to cover it all. Hopefully, I can share with you the top #10 things I’ve learned while putting JavaScript on the top of the server side benchmarks. You will learn about runtimes and engines, how some are more capable than others, and sometimes the obvious choice is not always the right one… This talk is about thinking outside of the box, being creative and don’t take anything for granted. We will debunk myths about native code vs script or RAM usage, it’s going to be fast! I promise! | :white_check_mark: |
| ES2019 Features: What Even Are They? | Tara Z. Manicsic | [:arrow_forward:](https://youtu.be/1_hHxra0Lf4) | Thankfully, every year ECMAScript gives us new shinies to advance how we code JavaScript. I’ve found myself digging into features & proposals ever since my curiosity of ES2017’s SharedArrayBuffer took me down a fascinating rabbit hole. Let’s delve into some of the features & proposals we get to look forward to in 2019. | :white_check_mark: |