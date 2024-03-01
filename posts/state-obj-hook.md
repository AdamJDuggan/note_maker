---
title: useStateObject
keywords: react state super hooks hook 
createdAt: Fri Mar 01 2024 12:39:15 GMT+0000 (Greenwich Mean Time)
---

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
