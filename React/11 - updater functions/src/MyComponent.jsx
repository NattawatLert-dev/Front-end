// Updater Function = ฟังก์ชันที่ส่งเข้าไปเป็นอาร์กิวเมนต์ของ setState()
//                    เช่น setYear(prevYear => prevYear + 1)
//                    ช่วยให้อัปเดต State ได้อย่างปลอดภัย โดยอ้างอิงจากค่า State ก่อนหน้า (Previous State)
//                    เหมาะสำหรับการอัปเดต State หลายครั้งและการทำงานแบบ Asynchronous
//                    ถือเป็นแนวปฏิบัติที่ดี (Good Practice) ในการใช้ React

import React, { useState } from "react"

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){

        // ใช้ State ปัจจุบัน (Current State) เพื่อคำนวณหา State ถัดไป (Next State)
        // ฟังก์ชัน setState (เช่น setCount) จะไม่อัปเดต State ทันทีที่ถูกเรียก
        // React จะรวม (Batch) การอัปเดต State หลาย ๆ ครั้งเข้าด้วยกันเพื่อเพิ่มประสิทธิภาพในการ Render
        // หลังจาก React ทำการอัปเดตเสร็จ State ถัดไป (Next State) จะกลายเป็น State ปัจจุบัน (Current State)

        // ใช้ค่า State ที่กำลังรอการอัปเดต (Pending State)เพื่อคำนวณหา State ถัดไป (Next State)
        // React จะนำ Updater Function ของคุณไปเก็บไว้ในคิว (Queue) เพื่อรอการประมวลผล
        // ในการ Render รอบถัดไป React จะเรียกใช้ Updater Function เหล่านั้นตามลำดับที่ถูกเพิ่มเข้ามาในคิว

        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    function decrement(){
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    };

    function reset(){
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );

}

export default MyComponent