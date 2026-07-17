// propTypes = กลไกที่ใช้ตรวจสอบว่า props ที่ถูกส่งเข้ามา มีชนิดข้อมูล (datatype) ถูกต้องหรือไม่
//             age: PropTypes.number
//             หมายถึง prop ชื่อ age ต้องเป็นชนิด Number

// defaultProps = กำหนดค่าเริ่มต้น (Default Value) ให้กับ props
//                ในกรณีที่ Parent Component ไม่ได้ส่งค่าเข้ามา
//                name: "Guest"

import PropTypes from 'prop-types'

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
Student.prototype ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defautProps ={
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student