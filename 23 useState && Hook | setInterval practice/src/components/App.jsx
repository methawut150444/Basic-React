import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000); //ทำทุกๆ 1 วิ (ทำให้เว็บมันเปลี่ยนตลอดเวลา)

  const now = new Date().toLocaleTimeString(); //แสดงเมื่อเริ่มต้นไปก่อน
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
