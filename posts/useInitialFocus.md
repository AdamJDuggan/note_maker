---
title: useInititalFocus()
keywords: react,hook,super,hooks,input,render,focus,initial
createdAt: Fri Mar 01 2024 12:45:39 GMT+0000 (Greenwich Mean Time)
---

Returns a ref which can be placed on an element to focus that elememt as soon as it renders.

```
import { useInitialFocus } from "super-hooks";

const initialFocus = useInitialFocus();

return (
    <input ref={initialFocus} />
)
```