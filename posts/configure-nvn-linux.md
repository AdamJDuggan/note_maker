---
title: Set up NVM in Linux
keywords: Node.js NVN Linux Config
---


Open terminal config file

`nano .zshrc`


And add this line
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```


