/* 
  ต่อจากข้อ 8. แต่ทำเป็น Component
    component app: ใช้ตัดเรียง Element
    component f_heading: จัดการข้อมูลส่วน
    component f_timing: ตัดการเวลา
*/

import React from "react";
import ReactDom from "react-dom";
import App from "./component/app";

ReactDom.render(<App />, document.getElementById("root"));
