---
title: useShowHideElement()
keywords: react super hook hooks modal element
createdAt: Fri Mar 01 2024 11:40:21 GMT+0000 (Greenwich Mean Time)
---

From my [super-hooks npm package](https://www.npmjs.com/package/super-hooks).

Show and hide an element such as a dropdown menu.

The hook returns an object with the following...
    
**visible**: A boolean value used in your jsx to conditionally dispaly the element. By default visible is set to false. However, you can overide this by passing an arguement (true) to the hook like thisuseShowHideElement(true).

**ref**: A ref to be placed on the element/div which you want to show/hide. If you click outside of this element it will set visible to false.

**show()**, **hide()** and **toggle()**: Functions which change the state of visible. You can guess what they each do!

```
import { useShowHideElement } from "super-hooks";

const dropDownMenu = useShowHideElement();

return (
      <>
            <button onClick={dropDownMenu.show}>Show  menu</button>
            {dropDownMenu.visible && (
            <div ref={dropDownMenu.ref}>
            <h2>Menu</h2>
            <p>Item 1</p>
            <p>Item 2</p>
            </div>
            )}
      </>
)
```
