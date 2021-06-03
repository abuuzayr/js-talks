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
| Offline-first data: Getting Bigger | Kevin Doran | [:arrow_forward:](https://youtu.be/_deWuTbHb5I) | [:arrow_right:](https://js-talks.netlify.app/posts/offline-first-data-getting-bigger) | :white_check_mark: |
| animations - learning from cartoons | Martin Sonnenholzer | [:arrow_forward:](https://youtu.be/Bpu_WQXONlM) | [:arrow_right:](https://js-talks.netlify.app/posts/animations-learning-from-cartoons) | :white_check_mark: |
| Block, unblock, block! : How ad blockers are being circumvented, and how they are fighting back. | Shwetank Dixit | [:arrow_forward:](https://youtu.be/Vk9bPDaZELQ) | [:arrow_right:](https://js-talks.netlify.app/posts/block-unblock-block-how-ad-blockers-are-being-circumvented-and-how-they-are-fighting-back) | :white_check_mark: |
| TensorFlow.js: Bringing Machine Learning to the Web and Beyond | Nikhil Thorat | [:arrow_forward:](https://youtu.be/imzedQr2tTc) | [:arrow_right:](https://js-talks.netlify.app/posts/tensorflowjs-bringing-machine-learning-to-the-web-and-beyond) | :white_check_mark: |
| Embedding V8 in the real world | Stanimira Vlaeva | [:arrow_forward:](https://youtu.be/wz7Znu6tqFw) | [:arrow_right:](https://js-talks.netlify.app/posts/embedding-v8-in-the-real-world-stanimira-vlaeva-jsconf-eu-2019) | :white_check_mark: |
| The Case for Augmented Reality on the Web | Marley Rafson | [:arrow_forward:](https://youtu.be/Jk4tEMBJleE) | [:arrow_right:](https://js-talks.netlify.app/posts/the-case-for-augmented-reality-on-the-web) | :white_check_mark: |
| Recreating Retro Computer Art with JS! | Sher Minn Chong | [:arrow_forward:](https://youtu.be/nC5q5JxLjnY) | [:arrow_right:](https://js-talks.netlify.app/posts/recreating-retro-computer-art-with-js) | :white_check_mark: |
| llhttp - new HTTP 1.1 parser for Node.js | Fedor Indutny | [:arrow_forward:](https://youtu.be/x3k_5Mi66sY) | [:arrow_right:](https://js-talks.netlify.app/posts/llhttp-new-http-11-parser-for-nodejs) | :white_check_mark: |
| Javascript is for Everyone! | Meya Stephen Kenigbolo | [:arrow_forward:](https://youtu.be/4WuZozUZuHM) | [:arrow_right:](https://js-talks.netlify.app/posts/javascript-is-for-everyone) | :white_check_mark: |
| Performance Empathy | Houssein Djirdeh | [:arrow_forward:](https://youtu.be/uIBYN6w9cBc) | [:arrow_right:](https://js-talks.netlify.app/posts/performance-empathy) | :white_check_mark: |
| Bringing back dial-up: the internet over SMS | Alexandra Sunderland | [:arrow_forward:](https://youtu.be/ZsBAkSxwU5c) | [:arrow_right:](https://js-talks.netlify.app/posts/bringing-back-dial-up-the-internet-over-sms) | :white_check_mark: |
| Polyhedra, I Choose You! Letting Your Passions Take Form | Nat Alison | [:arrow_forward:](https://youtu.be/jhdJHBD9Fts) | [:arrow_right:](https://js-talks.netlify.app/posts/polyhedra-i-choose-you-letting-your-passions-take-form) | :white_check_mark: |
| Tales from the Toilet: how Javascript helps the production of tissue papers | Pier Paolo Fumagalli | [:arrow_forward:](https://youtu.be/G_56cutmrBc) | [:arrow_right:](https://js-talks.netlify.app/posts/tales-from-the-toilet-how-javascript-helps-the-production-of-tissue-papers) | :white_check_mark: |
| BDD: Baby Driven Development | Allison McMillan | [:arrow_forward:](https://youtu.be/EndmLEaKPw8) | [:arrow_right:](https://js-talks.netlify.app/posts/bdd-baby-driven-development) | :white_check_mark: |
| Designing a Rich Content Editor for a Third of the Web | Ella van Durpe | [:arrow_forward:](https://youtu.be/ZNWNhUPrqB4) | [:arrow_right:](https://js-talks.netlify.app/posts/designing-a-rich-content-editor-for-a-third-of-the-web) | :white_check_mark: |
| Finding Your Abstraction Sweet Spot | Johnny Austin | [:arrow_forward:](https://youtu.be/go5VCfJMJhw) | [:arrow_right:](https://js-talks.netlify.app/posts/finding-your-abstraction-sweet-spot) | :white_check_mark: |
| About life, robots and cats! | Constanza Yáñez Calderón | [:arrow_forward:](https://youtu.be/GJ7zLofY1V8) | [:arrow_right:](https://js-talks.netlify.app/posts/about-life-robots-and-cats) | :white_check_mark: |
| What JS Developers can Learn from Medieval Coats of Arms about Accessibility | Amanda Sopkin | [:arrow_forward:](https://youtu.be/jVfVsKXdYK0) | [:arrow_right:](https://js-talks.netlify.app/posts/what-js-developers-can-learn-from-medieval-coats-of-arms-about-accessibility) | :white_check_mark: |
| Build an end-to-end IoT system using JavaScript with "GDPR awareness" | Ziran Sun | [:arrow_forward:](https://youtu.be/2YDI2GUmmFI) | [:arrow_right:](https://js-talks.netlify.app/posts/build-an-end-to-end-iot-system-using-javascript-with-gdpr-awareness) | :white_check_mark: |
| Teaching Kids to Code by a 13 year-old | Jason Straughan | [:arrow_forward:](https://youtu.be/26hois9cs-o) | [:arrow_right:](https://js-talks.netlify.app/posts/teaching-kids-to-code-by-a-13-year-old) | :white_check_mark: |
| The Contentious Relationship Between the LGBTQ+ community and Tech | Bryan Hughes | [:arrow_forward:](https://youtu.be/fSN3LVbXTkg) | [:arrow_right:](https://js-talks.netlify.app/posts/the-contentious-relationship-between-the-lgbtq-community-and-tech) | :white_check_mark: |
| You should start a tech community too. | Roshan Gautam | [:arrow_forward:](https://youtu.be/xZrfXATxJ38) | [:arrow_right:](https://js-talks.netlify.app/posts/you-should-start-a-tech-community-too) | :white_check_mark: |
| What happened to my JavaScript phone? | Garann Means | [:arrow_forward:](https://youtu.be/14wIbWGyaKg) | [:arrow_right:](https://js-talks.netlify.app/posts/what-happened-to-my-javascript-phone) | :white_check_mark: |