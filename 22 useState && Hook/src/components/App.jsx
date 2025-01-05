import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  /*
    useState มี 2 parameter คือ [<ค่าเริ่มต้น>, <ค่าเปลี่ยนแปลง>]

      การสร้างสร้างตัวแปลมารองรับ สามารถสร้างแบบ Array ได้เช่น
        const rgb = [25, 50, 75] ---> const [red, green, blue] = [25, 50, 75]
        สามารถแสดงเป็น : console.log(red) == "25"  

      จากที่สร้างไว้ : const [count, setCount] = useState(0);
        count = 0 (เริ่มต้น) และแสดง setCount เป็นค่าที่เปลี่ยนแปลง

  */

  console.log(useState);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/* เขียนเป็น Arrow function หรือ function ปกติก็ได้ */}
      <button onClick={(x) => setCount(count + 1)}>+</button>
      <button onClick={decrease}>+</button>
    </div>
  );
}

export default App;
