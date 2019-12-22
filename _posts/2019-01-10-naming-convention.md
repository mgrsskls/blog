---
layout: post
title: "How I write CSS"
---

1. [File structure](#file-structure)
2. [Naming convention](#naming-convention)
3. [State-, utility- and other classes](#state--utility--and-other-classes)

## File structure

```
- theme
- reset
- base
- elements
- form
- patterns
- grid
- utils
```

### theme

Either CSS custom properties or scss<!--more--> variables to define…

- colors
- fonts
- spacings
- and any other global theming

### reset

CSS files to reset (or normalize) all styling. [More on that later](#reset-css).

### base

Includes some basic styling like:

```css
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

html {
  font-size: 62.5%;
}

body {
  color: var(--color-text-regular);
  font-family: var(--font-family);
  font-size: var(--font-size-300);
  line-height: var(--line-height-300);
}
```

## Naming convention

### Component naming

For components I'm using a form of [BEM](http://getbem.com/), but in a slightly different way, which I picked up from [factorial](https://www.factorial.io) &ndash; an agency I worked for awhile.
While the original BEM naming convention looks like this:

```css
.block {
}
.block--modifier {
}
.block__element {
}
```

I write it like this:

```css
.Block {
}
.Block--modifier {
}
.Block-element {
}
```

I prefer using uppercase for the block make sure that it's a component (while I would use lowercase for [utility classes]() e.g.).
Using `.Block-element` instead of `.Block__element` is basically just a personal preference.

In practice, this would look like this:

```html
<!-- TeaserLists component -->
<ul class="TeaserLists">
  <li class="TeaserLists-item">
    <!-- TeaserList component -->
    <ul class="TeaserList">
      <li class="TeaserList-item">
        <!-- Teaser component -->
        <div class="Teaser">
          <h2 class="Teaser-title"></h2>
          <p class="Teaser-copy"></p>
        </div>
      </li>
    </ul>
  </li>
</ul>
```

By the way: I don't only use this for reusable components, but also for page wrappers and similar things.

### State and other classes

Furthermore, I use…

## State-, utility- and other classes

State class on its own are always toggled directly to a component and fulfill a certain purpose for this component only. A good example is hiding elements. Sometimes it's fine to simply use `display: none` to hide an element, so you define:

```css
.OneComponent.is-hidden {
  display: none;
}
```

But sometimes you might also want to have some transition when showing an element, so `display:none` would not work. Instead, you might want to do something like this:

```css
.AnotherComponent.is-hidden {
  max-height: 0;
  overflow: hidden;
  transition: 0.25s max-height ease-in;
}
```

Both elements are basically hidden, which is why I use the same class name, but are hidden in a different way.\\
If I need a class that always does the same is not bound to a specific component, I would use a utility class:

```css
.u-hidden {
  diplay: none;
}
```

[More on these further down in this article](#utility-classes).

The last type of classes that I use look e.g. like this:

```css
.has-children {
}
```

This can be useful when you e.g. have a navigation where some of its items have a subnavigation and you need to style an item based on that.
