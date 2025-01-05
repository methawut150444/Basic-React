import React from "react";
import ReactDOM from "react-dom";

import * as math from "./basicCalculator"; //เอามาทั้งหมดโดนใช้ชื่อ Class: "math"
import description from "./basicCalculator"; //เอามาแค่ตัวแปรนั้นๆ ในไฟล์
import { function0 } from "./basicCalculator"; //เอามาแค่ function นั้นๆ
import { function1, function2 } from "./basicCalculator"; //เอา function มา แต่หลายอันทีเดียว

ReactDOM.render(
  <ul>
    {/* เอามาแค่ variable */}
    <li>{description}</li>

    {/* เอามาแค่ function */}
    <li>{function0()}</li>
    <li>{function1()}</li>

    {/* ชื่อ Class.Function */}
    <li>{math.add(1, 2)}</li>
    <li>{math.multiply(2, 3)}</li>
    <li>{math.subtract(7, 2)}</li>
    <li>{math.divide(5, 2)}</li>
    <li>{math.modulate(2)}</li>
  </ul>,
  document.getElementById("root")
);
