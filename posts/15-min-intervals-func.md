---
title: Function to return array of x length, 15 minute intervals from startDate  
keywords: javascript time interval intervals 
createdAt: Fri Mar 01 2024 12:48:37 GMT+0000 (Greenwich Mean Time)
---

Return array of times at 15 minute intervals 

```
const get15MinIntervals = (startDate, span) => {
  const start = new Date(startDate);
  const endTime = new Date(start);
  endTime.setHours(endTime.getHours() + span);
  const arr = [];
  let minutes = 0;
  while (start < endTime) {
    const date = new Date(start);
    const hours = minutes < 60 ? minutes + " mins" : minutes / 60 + " hrs";
    arr.push({
      label: `${start.toTimeString().substring(0, 5)}  (${hours})`,
      value: date,
    });
    minutes += 15;
    start.setMinutes(start.getMinutes() + 15);
  }
  arr.shift();
  return arr;
};
```