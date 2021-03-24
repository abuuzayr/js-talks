---
title: "{{title}} | {{event}}"
date: "{{posting_date}}T00:00:00.000Z"
template: "post"
draft: false
slug: "{{slug}}"
category: "{{event}}"
tags:
{{#tags}}
  - "{{.}}"
{{/tags}}
description: "{{description}}"
socialImage: "{{{img}}}"
podcastURL: "{{{podcast_url}}}"
podcastDuration: "{{podcast_duration}}"
podcastSpeaker: "{{speaker}}"
podcastSize: {{podcast_size}}
---

Original post, video and transcript on the official [{{event}} website]({{{source}}}).

<!-- End of podcast preview -->

<div style="text-align: center">
	<audio controls="controls">
		<source type="audio/mp3" src="{{{podcast_url}}}"></source>
		<p>Your browser does not support the audio element.</p>
	</audio>
</div>