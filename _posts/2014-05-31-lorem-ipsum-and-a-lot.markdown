---
layout: post
title:  "Lorem ipsum and a lot"
date:   2014-05-31 20:53:38
categories: jekyll update
---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight css linenos %}
.highlight {
  color: red;
}
code {
  font-family: Monaco, 'Courier New', Courier, monospace;
  font-size: .875rem;
}
{% endhighlight %}

Check out the <a href="http://mgrossklaus.de" target="_blank">mgrossklaus.de</a> for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

{% highlight html linenos %}
<div class="page-head">
  <h1 class="post__title">Lorem ipsum and a lot</h1>
  <p class="post__date date">2014/05/31 </p>
</div>
{% endhighlight %}

{% highlight js linenos %}
var touchClass,
    touchDevice;
/* touch-detection by modernizr.com */
if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  touchClass = ' touch';
  touchDevice = true;
}
else {
  touchClass = ' no-touch';
  touchDevice = false;
}
document.getElementById('mgrossklaus-de').className += touchClass;
{% endhighlight %}

[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll]:    http://jekyllrb.com
