// conditional rendering = การแสดงผลแบบมีเงื่อนไข ช่วยให้เราควบคุมว่าอะไรจะถูกแสดงผล
//                         ในแอปพลิเคชันตามเงื่อนไขที่กำหนด
//                         (แสดง, ซ่อน หรือเปลี่ยน Component)

import PropTypes from 'prop-types'

import UserGreeting from "./UserGreeting"

function App() {
  
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Nattawat"/>
    </>
  )
}

export default App
