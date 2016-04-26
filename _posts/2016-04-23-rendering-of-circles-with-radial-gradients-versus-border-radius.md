---
layout: post
draft: true
---

<figure class="image-left">
  <img src="/assets/posts/2016-04-23_01.gif" alt="A quarter of a circle" width="210" height="210">
</figure>

While working on [animals.mgrossklaus.de](https://animals.mgrossklaus.de){:target="_blank"}, I stumpled upon a small but interesting difference when it comes to rendering of circles &#8212; or rather parts of a circle &#8212; with CSS.

Imagine you want to build a yummy (minimalistic) piece of pizza... For the markup, all you need is a simple div:

{% highlight html %}
<div class="pizza"></div>
{% endhighlight %}

My first approach for the CSS was roughly the following:

{% highlight css %}
.pizza {
  font-size: 200px;
  width: 1em;
  height: 1em;
  overflow: hidden;
  position: relative;
}
.pizza::before {
  content: '';
  display: block;
  position: absolute;
  width: 200%;
  height: 200%;
  background: red;
  border-radius: 50%;
}
{% endhighlight %}

What I basically did here was to create a pseudo-element that has double the size of its "parent" element (how do you call these elements actually?) and the `border-radius: 50%` to make it round. By using `overflow: hidden` for `.pizza`, 3/4 of the circle is truncated, so we get our piece of pizza:

<p data-height="270" data-theme-id="light" data-slug-hash="QNBVbK" data-default-tab="css,result" data-user="mgrsskls" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/mgrsskls/pen/QNBVbK/">QNBVbK</a> by Michael Großklaus (<a href="http://codepen.io/mgrsskls">@mgrsskls</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

What I don't like about this approach is that you need a pseudo- (or even worse: a second, if your pseudo-elements are already in use) element. So I came up with the following CSS:

{% highlight css %}
.pizza {
  font-size: 200px;
  width: 1em;
  height: 1em;
  overflow: hidden;
  background: radial-gradient(circle closest-side, red 99%, transparent);
  background-size: 200% 200%;
}
{% endhighlight %}

I just create the circle using a `radial-gradient`, setting its size to 200% (similar to the first approach) et voilà... No more pseudo-element:

<p data-height="270" data-theme-id="light" data-slug-hash="KzBxzW" data-default-tab="css,result" data-user="mgrsskls" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/mgrsskls/pen/KzBxzW/">KzBxzW</a> by Michael Großklaus (<a href="http://codepen.io/mgrsskls">@mgrsskls</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Yeehaw!

But the ones of you with an eagle eye might already see the difference.
If you don't, here is an enlarged extract:

<figure class="image-left">
  <img src="/assets/posts/2016-04-23_02.gif" alt="Rendering of a circle with border-radius compared to radial-gradient" width="344" height="190">
</figure>

While the first approach with `border-radius` renders a perfect sharp circle, the second approach causes small artefacts when rendering the edge. At the time of writing this post, this looks almost the same in Chrome, Firefox and Safari &#8212; there are just slight differences.

Summa summarum: If possible, try to avoid using `background-image: radial-gradient()` for rendering a circle. Otherwise you will have small artefacts at its edge.
