---
title: useWindowWidth()
keywords: react super hook hooks scroll
createdAt: Fri Mar 01 2024 11:40:21 GMT+0000 (Greenwich Mean Time)
---

From my [super-hooks npm package](https://www.npmjs.com/package/super-hooks).

When you need javascript for breakpoints and responsive design.

The hook returns the following values: screenWith, isMobile, isTablet, isDesktop and isDesktopLarge.
screenWidth is always set to window.innerWidth so returns a number value which is pixels.

isMobile and other values are booleans which return true when the screenWidth is less than a number which is mapped to that value. For example, isDesktop = true when screenWidth is less than 1280px.
If you do not pass any values to the hook it will by default map the following values:

+ isMobile: screenWidth < 700px

+ isTablet: screenWidth < 1024px

+ isDesktop: screenWidth < 1280px

+ isDesktopLarge: screenWidth < 1536px

However, you can set your own breakpoints by passing four number values to the hook. In the below example isMobile is now true when the screenWidth is less than 600px.




```
import { useWindowWidth } from "super-hooks";
    
const { 
  screenWidth, 
  isMobile, 
  isTablet, 
  isDesktop, 
  isDesktopLarge } = useWindowWidth(600, 1000, 1300, 1500);

  return (
    <div>
      <p>The screen width is: {screenWidth}</p>

      // Only show to messaage to mobile users 
      {isMobile && <p>Hello mobile user</p>}

      // Only show to messaage to users using a desktop computer 
      {!isTablet && <p>Hello desktop user</p>}

    </div>
  )
```
