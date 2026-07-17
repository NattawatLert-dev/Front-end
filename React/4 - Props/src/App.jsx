// props = คุณสมบัติ (properties) แบบอ่านได้อย่างเดียว (read-only) ที่ใช้แชร์ข้อมูลระหว่าง Component
//         Parent Component สามารถส่งข้อมูลไปยัง Child Component ได้โดยส่งผ่าน props ในรูปแบบ
//         <Component key={value} />

import Student from "./Student.jsx"

function App() {
  
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/><br></br>
      <Student name="Patrick" age={42} isStudent={false}/><br></br>
      <Student name="Squidward" age={50} isStudent={false}/><br></br>
      <Student name="Sandy" age={27} isStudent={true}/><br></br>
      <Student name="Squidward" age={0}/><br></br>
    </>
  );
}

export default App
