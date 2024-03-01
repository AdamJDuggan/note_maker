---
title: Recrusive Quicksort algorithm
keywords: recrusive quicksort algorithm 
createdAt: Fri Mar 01 2024 12:55:24 GMT+0000 (Greenwich Mean Time)
---



```
const quickSort = (array) => {
  if(array.length < 2) return array;
  else {
    const pivot = array[0];
    const shiftedArray = array;
    shiftedArray.shift();
    const less = shiftedArray.filter(item => item <= pivot);
    const greater = shiftedArray.filter(item => item > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}
```
