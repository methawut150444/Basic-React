import React, { useState } from "react";

function App() {
  const [name, set_name] = useState("");

  // event เป็นการข้อมูลบางอย่างเข้ามา ณ  เวลานั้นๆ เมื่อมีการอ้างอิงถึงฟังก์ชั่นที่ใช้ event
  function handleName(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);

    set_name(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleName}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
