---
title: useToggleInput()
keywords: react hook hooks toggle input 
createdAt: Fri Mar 01 2024 12:42:31 GMT+0000 (Greenwich Mean Time)
---

From my [super-hooks npm package](https://www.npmjs.com/package/super-hooks).

When you want to toggle between a text value and an input to update that value.
```
import { useToggleInput } from "super-hooks";
    
const { text, setText, edit, setEdit, inputRef, onSave } = useToggleInput(
() => alert(text),
"Blanka"
);

return (
    {edit ? (
    <form onSubmit={onSave}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Save</button>
    </form>
  ) : (
    <div  onClick={() => setEdit(true)}>
      {text}
    </div>
  )}
)
```
