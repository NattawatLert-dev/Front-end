// useContext() = React Hook ที่ช่วยให้สามารถแชร์ข้อมูล (values)
//                ระหว่าง Component หลายระดับได้
//                โดยไม่จำเป็นต้องส่ง props ผ่านทุกระดับของ Component

// PROVIDER COMPONENT = Component ที่ทำหน้าที่เก็บและส่งต่อข้อมูล (Context) ให้กับ Component 
//                      ลูกทั้งหมดที่อยู่ภายในเพื่อให้สามารถเข้าถึงข้อมูลผ่าน useContext() ได้

// 1. import {createContext} from 'react;
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS = Component ที่รับและใช้งานข้อมูลจาก Context โดยเรียกใช้ useContext()
//                       เพื่อเข้าถึงข้อมูลที่ Provider ส่งมา

// 1. import React, { useContext } from 'react;
//    import { MyContext } from "./ComponentA.jsx"
// 2. const value = useContext(MyContext);

import ComponentA from "./ComponentA"

import React from "react"

function App() {
  

  return (
    <>
    <ComponentA/>
    </>
  )
}

export default App
