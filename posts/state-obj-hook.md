---
title: useStateObject
keywords: react state super hooks hook 
createdAt: Fri Mar 01 2024 12:39:15 GMT+0000 (Greenwich Mean Time)
---

From my [super-hooks npm package](https://www.npmjs.com/package/super-hooks).

Merge updated properties into large state object to prevent having to always spread other values.

```
import { useStateObject } from "super-hooks";
    
const [state, setState] = useStateObject({
   name: "Blanka",
   country: "Brazil",
   color: "green",
 });
    
return (
   <input value={state.name} onChange={e => setState({name: e.target.value})}
)
```
