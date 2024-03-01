---
title: Navigate file structure
keywords: file structure map javascript 
createdAt: Fri Mar 01 2024 12:53:36 GMT+0000 (Greenwich Mean Time)
---


```
const fileStructure = {};
files.forEach(file => {
  const split = file.name.split("/");
  let parent = fileStructure;
  let path;
  split.forEach((part, index) => {
    path = path ? path + "/" + part : part;
    if(!parent[part]){
      parent[part] = {type: index < split.length - 1 ? "dir" : "file", path, children: {}};
    }
    parent = parent[part].children;    
  })
})
```
