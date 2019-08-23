---
layout: post
title: "An easier way to use relative units"
---

Browsers nowadays perfectly zoom in and out when using `cmd`-`+` and `cmd`-`-`. Because of this, developers sometimes think that using relative units is actually not necessary. But as zooming<!--more--> that way only affects the current website, browsers also have a setting to change the default font size of the browser. Unfortunately, this has no effect when using absolute units. That is why using relative units _is_ important.

As in the beginning of my developer career it was still completely normal to use `px` for everything and getting Photoshop layouts with pixel measurements, I still think in pixels when developing. Of course, there are tools that help you with that: you can e.g. use `px` in your code base which becomes converted to `rem` when using a post- or pre-processor.

But as it is better to not rely on tooling, I prefer to use one of my all-time favourite css tricks:

```css
html {
  font-size: 62.5%;
}
```

`62.5%` equals `10px`, as the default font size of a browser is `16px` (`16 * 0,625 = 10`).

Now you can use `rem` and your values are the same as your pixel values, the decimal separator just moved one digit to the left:

```css
body {
  font-size: 1.6rem; /* 16px */
}

.wrapper {
  max-width: 72rem; /* 720px */
}
```

Don't forget to explicitely set `font-size` on the `body` now, as `10px` is too small for a default value.

Note: I sometimes see developers using `html: { font-size: 10px; }` to achieve the same, but this does not fix the zooming problem.
