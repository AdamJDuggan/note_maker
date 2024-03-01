---
title: useScrollToBottom()
keywords: react super hook hooks scroll
createdAt: Fri Mar 01 2024 11:40:21 GMT+0000 (Greenwich Mean Time)
---


From my [super-hooks npm package](https://www.npmjs.com/package/super-hooks).

Recieves an array and returns a ref which, when placed on a div wrapping the array, will scroll to bottom of the div when new elements are added to the array.

```
import { useScrollToBottom } from "super-hooks";

const { scrollContainer } = useScrollToBottom(posts);
  
return (
      <li  ref={scrollContainer}>
      	{posts.map(post => <li>{post}</li>)}
      </li>
 )
```
