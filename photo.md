---
layout: page
title: Photo
permalink: /photo/
---

<script type="text/javascript">
    var feed = new Instafeed({
        get: 'user',
        userId: 600335747,
        accessToken: '600335747.3a81a9f.b008968479e144f0ba9e045de3d17be2',
        sortBy: 'most-recent',
        limit: 60,
        resolution: 'low_resolution',
        clientId: '58d6381baee94f4c9c2d136f843bcc07',
        template: '<a href="{{link}}"><img src="{{image}}" /></a><h3>{{caption}}</h3>'
    });
    feed.run();
</script>

<div id="instafeed"></div>