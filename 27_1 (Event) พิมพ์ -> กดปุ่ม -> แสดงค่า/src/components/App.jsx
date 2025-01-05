import React, { useState } from "react";

function App() {
  const [name, set_name] = useState("hello");
  let currentname = "";

  // event เป็นการข้อมูลบางอย่างเข้ามา ณ  เวลานั้นๆ เมื่อมีการอ้างอิงถึงฟังก์ชั่นที่ใช้ event
  function handleName(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    // set_name(event.target.value);
    currentname = event.target.value;
  }

  function clicked() {
    console.log("clicked");
    set_name(currentname);
  }

  return (
    <div className="container">
      <h1>{name}</h1>
      <input
        onChange={handleName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={clicked}>Submit</button>
    </div>
  );
}

export default App;
