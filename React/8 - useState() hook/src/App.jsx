// React Hook = ฟังก์ชันพิเศษของ React ที่ช่วยให้ Functional Component
//              สามารถใช้งานความสามารถต่าง ๆ ของ React ได้
//              โดยไม่จำเป็นต้องเขียนเป็น Class Component
//              (เช่น useState, useEffect, useContext,useReducer, useCallback และอื่น ๆ)

// useState() = React Hook ที่ใช้สำหรับสร้างตัวแปร State
//              และสร้าง Setter Function สำหรับอัปเดตค่าของ State นั้น
//              ใน Virtual DOM
//              [name, setName]

import MyComponent from "./MyComponent"
import Counter from "./Counter"

function App() {

  return (
    <>
     <Counter/>
    </>
  )
}

export default App
