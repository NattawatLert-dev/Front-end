// useState() = ทำให้ Component Render ใหม่ (Re-render)
//              ทุกครั้งที่ค่า State มีการเปลี่ยนแปลง

// useRef()   = "use Reference" ใช้สำหรับเก็บค่าหรืออ้างอิงข้อมูล
//              โดยจะไม่ทำให้ Component Render ใหม่
//              เมื่อค่าภายในมีการเปลี่ยนแปลง
//
//              เหมาะสำหรับกรณีที่ต้องการให้ Component
//              "จดจำ" ข้อมูลบางอย่าง
//              แต่ไม่ต้องการให้ข้อมูลนั้นกระตุ้นการ Render ใหม่
//
//              การใช้งานที่พบบ่อย
//              1. เข้าถึงหรือโต้ตอบกับ DOM Element (Accessing / Interacting with DOM Elements)
//
//              2. จัดการ Focus, Animation และ Transition (Handling Focus, Animations, and Transitions)
//
//              3. จัดการ Timer และ Interval (Managing Timers and Intervals)

import React, { useState, useEffect, useRef} from "react"

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(<>
    <div>
        <button onClick={handleClick1}>
        Click me 1!
        </button><br/>
        <input ref={inputRef1}/><br/>

        <button onClick={handleClick2}>
        Click me 2!
        </button><br/>
        <input ref={inputRef2}/><br/>

        <button onClick={handleClick3}>
        Click me 3!
        </button><br/>
        <input ref={inputRef3}/><br/>

    </div>
    </>);
}

export default MyComponent