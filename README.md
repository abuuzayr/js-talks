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
- [**BackBlaze B2 Cloud Storage**](https://www.backblaze.com/b2/cloud-storage.html) for hosting the audio files (10GB free storage, and 1GB free downloads every day, 80% cheaper than AWS S3!)
- Apple Podcasts, Overcast, Spotify Podcasts, Google Music Podcasts for distributing the podcasts

## Support

I do not earn anything from this project. If you would like to support this project, you can [buy me a coffee](https://www.buymeacoffee.com/iB2dbMt) or contribute! :smiley:

## Videos

### JSConf EU 2019

| Title | Speaker | Video | Link | Added? |
| --- | --- | --- | --- | --- |
| The economics of open source | C J Silverio | [:arrow_forward:](https://youtu.be/MO8hZlgK5zc) | [:arrow_right:](https://js-talks.netlify.app/posts/economics-open-source-c-j-silverio-jsconf-eu-2019) | :white_check_mark: |
| HTTP headers for the responsible developer | Stefan Judis | [:arrow_forward:](https://youtu.be/Mjqf2kkFLy8) | [:arrow_right:](https://js-talks.netlify.app/posts/http-headers-for-the-responsible-developer-by-stefan-judis-jsconf-eu-2019) | :white_check_mark: |
| Let's build a JavaScript Engine in Rust | Jason Williams | [:arrow_forward:](https://youtu.be/_uD2pijcSi4) | [:arrow_right:](https://js-talks.netlify.app/posts/lets-build-a-javascript-engine-in-rust-by-jason-williams-jsconf-eu-2019) | :white_check_mark: |
| A sneak peek into super optimized code in JS frameworks | Maxim Koretskyi | [:arrow_forward:](https://youtu.be/_VHNTC67NR8) | [:arrow_right:](https://js-talks.netlify.app/posts/a-sneak-peek-into-super-optimized-code-in-js-frameworks-jsconf-eu-2019) | :white_check_mark: |
| 10 things I learned making the fastest js server runtime in the world | Paulo Lopes | [:arrow_forward:](https://youtu.be/-npTuvzflh4) | [:arrow_right:](https://js-talks.netlify.app/posts/10-things-i-learned-making-the-fastest-js-server-runtime-in-the-world-jsconf-eu-2019) | :white_check_mark: |
| ES2019 Features: What Even Are They? | Tara Z. Manicsic | [:arrow_forward:](https://youtu.be/1_hHxra0Lf4) | [:arrow_right:](https://js-talks.netlify.app/posts/es2019-features-what-even-are-they-jsconf-eu-2019) | :white_check_mark: |
| The modern PWA Cheat Sheet | Maximiliano Firtman | [:arrow_forward:](https://youtu.be/cybhV88KLfI) | [:arrow_right:](https://js-talks.netlify.app/posts/the-modern-pwa-cheat-sheet-jsconf-eu-2019) | :white_check_mark: |
| CSS Houdini & The Future of Styling | Una Kravets | [:arrow_forward:](https://youtu.be/GhRE3rML9t4) | [:arrow_right:](https://js-talks.netlify.app/posts/css-houdini-and-the-future-of-styling-jsconf-eu-2019) | :white_check_mark: |
| Promises API in Node.js core: where we are and where we’ll get to | Joe Sepi | [:arrow_forward:](https://youtu.be/-4p_qLYjUDc) | [:arrow_right:](https://js-talks.netlify.app/posts/promises-api-in-nodejs-core-where-we-are-and-where-well-get-to) | :white_check_mark: |
| Web APIs in Node.js Core: Past, Present, and Future | Joyee Cheung | [:arrow_forward:](https://youtu.be/ceiUozUFF3Y) | [:arrow_right:](https://js-talks.netlify.app/posts/web-apis-in-nodejs-core-past-present-and-future) | :white_check_mark: |
| tink: A Next Generation Package Manager | Kat Marchán | [:arrow_forward:](https://youtu.be/SHIci8-6_gs) | [:arrow_right:](https://js-talks.netlify.app/posts/tink-a-next-generation-package-manager) | :white_check_mark: |
| JavaScript: who, what, where, why and next | Laurie Voss | [:arrow_forward:](https://youtu.be/gChULw-uEjY) | [:arrow_right:](https://js-talks.netlify.app/posts/javascript-who-what-where-why-and-next) | :white_check_mark: |
| Simulating Sand: Building Interactivity With WebAssembly | Max Bittker | [:arrow_forward:](https://youtu.be/-dD-EaZ29hs) | [:arrow_right:](https://js-talks.netlify.app/posts/simulating-sand-building-interactivity-with-webassembly) | :white_check_mark: |
| Stencil: a built-time approach to the web | Manu Martinez-Almeida | [:arrow_forward:](https://youtu.be/M1F81V-NhP0) | [:arrow_right:](https://js-talks.netlify.app/posts/stencil-a-built-time-approach-to-the-web) | :white_check_mark: |
| Building WebApps Like It's 1972 | Leandro Ostera | [:arrow_forward:](https://youtu.be/yuk7n43xU4g) | [:arrow_right:](https://js-talks.netlify.app/posts/building-webapps-like-its-1972-male) | :white_check_mark: |
| GraphQL: Towards a universal query language | Michael Mifsud | [:arrow_forward:](https://youtu.be/Xi3sxygtDc4) | [:arrow_right:](https://js-talks.netlify.app/posts/graphql-towards-a-universal-query-language) | :white_check_mark: |
| JavaScript, JavaScript…. Rocks You! | Vitalii Bobrov | [:arrow_forward:](https://youtu.be/_yt89v0S1MA) | [:arrow_right:](https://js-talks.netlify.app/posts/javascript-javascript-rocks-you) | :white_check_mark: |
| JavaScript's Journey to the Edge | Ashley Williams | [:arrow_forward:](https://youtu.be/MBndZddVQdw) | [:arrow_right:](https://js-talks.netlify.app/posts/javascripts-journey-to-the-edge) | :white_check_mark: |
| javascript considered...useful | Jenn Schiffer | [:arrow_forward:](https://youtu.be/ylF7ZR-b7Rk) | [:arrow_right:](https://js-talks.netlify.app/posts/javascript-considereduseful) | :white_check_mark: |
| Yarn - 2019 and beyond | Maël Nison | [:arrow_forward:](https://youtu.be/XePfzVs852s) | [:arrow_right:](https://js-talks.netlify.app/posts/yarn-2019-and-beyond) | :white_check_mark: |