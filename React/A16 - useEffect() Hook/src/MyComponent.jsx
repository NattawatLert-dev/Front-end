// useEffect() = React Hook ที่ใช้บอก React ให้ "ทำบางอย่างเมื่อ..." (เลือกอย่างใดอย่างหนึ่ง)
//               Component นี้มีการ Re-render
//               Component นี้ถูก Mount (แสดงผลครั้งแรก)
//               ค่า State หรือค่าใดค่าหนึ่งมีการเปลี่ยนแปลง
//
// รูปแบบการใช้งาน:
// useEffect(function, [dependencies])

// 1. useEffect(() => {})          // Runs after every re-render ทำงานทุกครั้งหลังจาก Component มีการ Render ใหม่
// 2. useEffect(() => {}, [])      // Runs only on mount ทำงานเพียงครั้งเดียว ตอน Component ถูกสร้างขึ้นครั้งแรก (Mount)
// 3. useEffect(() => {}, [value]) // Runs on mouont + when value changes ทำงานครั้งแรกตอน Mount และทำงานอีกครั้งเมื่อ value เปลี่ยน

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useEffect, useState } from "react"

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = "count: " + count + " " +color; 

        return () => {
            // SOME CLEANUP CODE
        }
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    };

    function subtractCount(){
        setCount(c => c - 1);
    };

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(<>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Click Me</button>
    <button onClick={subtractCount}>Subtract</button>
    <button onClick={changeColor}>Change Color</button>
    </>);

}

export default MyComponent