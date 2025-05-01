---
title: EditNavbar
icon: blog
date: 2025-05-01 16:36:51
author: FelixSnowman
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## Navbar Edits



### 1. Name the tab on Navbar

- Add the name of your tab under `text` in `navbar.ts`



### 2. Add Icon

- Go to a Website that offers icons like [here](fontawesome.com/icons)

- Copy the icon and past it into the `icon` line in `navbar.ts`



### 3. Add Link

- Add the link of your Article in the `link` line in `navbar.ts`

- The link has the following format : `"folder/articlename.md"`



### 4. Add children under the tab

If you have children in the tab, the tab doesn't show just one link but all of the children which are also links to your articles 

- Delete the `link` line 
- instead write `children [ ]`
- into the square brackets you can write as many links as you want without having to write `link` in front of it and you just have to start and end the link with `" "`
- if the articles are all in the same folder you can add the line `prefix :"/folder"/` before the `children` line



### 5. Add dividers within the children

- In the children open these brackets `{ }`
- in these brackets write another paragraph in which you also have `text: "Divider"` as the name of your divider and `icon:"icon"` as the icon of your divider and another `children [ ]`tab . You may also add a prefix 
- after you've written all of your links in the children close the `[]` and `{}` and start a new `{}` to add more Dividers

### 

