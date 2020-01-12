---
layout: post
title: Reducing the file size of open source fonts
description: Removing unused characters from open source fonts can drastically decrease the file size
---

I was recently working on the relaunch of my website and wanted to include the open source font [Inter](https://rsms.me/inter/). Unfortunately, even the *woff2* versions of each different font style were at least 100kb large. As I wanted to use three font styles, this was, of course, way too much.<!--more-->

Fortunately, I knew that it is possible to reduce the file size by only using certain characters. After a quick search I stumbled upon [FontForge](https://fontforge.org/), which allows you to edit all sorts of things in open source fonts (I honestly do not have a clue what most of them are).
I opened the font files and saw that all kinds of characters (romanian, greek, kyrillic and other letters, characters for spacings, mathematical characters and so on) were included. Since my website does not have any user generated content, I knew pretty well what kind of characters I would need. Especially for bold and italic font styles, the amount of necessary characters is very limited. That way I was able to remove most of the characters and decrease the total size of all font files **from 314kb to 39kb**.

The steps to do that are the following:

1. Open a font file via *File* → *Open*
2. Go to *Element* → *Font Info* (opens a new window) → *Unicode Ranges*
3. Select an entry in the list
4. In the other window deselect the characters you want to keep and remove the selected characters via *Encoding* → *Detach & Remove Glyhphs…*
5. Repeat that for every entry in the *Unicode Ranges* list
6. Create a new font file via *File* → *Generate Fonts…*

Admittedly, the UX could be a bit better and depending on your font files, this can be quite time-consuming. Nevertheless, it is fairly easy with *FontForge* to remove characters from a font file and the results are definitely worth it.

*Note:* At the time of writing this, the security restrictions on macOS Catalina do not allow you to open font files from your "Downloads", "Documents" and "Desktop" folders. Move the font files in any other folder if *FontForge* says "Unauthorized / Operation not permitted". See also [this issue](https://github.com/fontforge/fontforge/issues/4082) on GitHub.
