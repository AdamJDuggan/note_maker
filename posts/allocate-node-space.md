---
title: Allocate and persist extra memory for Node.js in Linux
keywords: Node.js Linux
---

Open terminal config file

`nano .zshrc`

And add this line

`export NODE_OPTIONS=--max-old-space-size=4096`


