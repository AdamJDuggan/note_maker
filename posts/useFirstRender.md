---
title: useFirstRender()
keywords: first,render,react,hook,super,hooks
createdAt: Fri Mar 01 2024 12:44:16 GMT+0000 (Greenwich Mean Time)
---


Returns a boolean which is true when the enclosing components first renders.

```
import { useFirstRender } from "super-hooks";
    
const firstRender = useFirstRender();  

return (
    <div>
    {firstRender && <p>First render!</p>}
    </div>
)
```
