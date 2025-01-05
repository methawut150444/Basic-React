import React, { useState } from "react";

function App() {
  const [name, set_name] = useState("");
  const [headingText, set_headingText] = useState("");

  // event เป็นการข้อมูลบางอย่างเข้ามา ณ  เวลานั้นๆ เมื่อมีการอ้างอิงถึงฟังก์ชั่นที่ใช้ event
  function handleName(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    set_name(event.target.value);
    console.log(name);
  }

  function clicked(event) {
    console.log("clicked");
    set_headingText(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={clicked}>
        <input
          onChange={handleName}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

/* 
    element "form" นิยมใช้กับการส่งชุดข้อมูลเพื่อไปทำการ Request HTTP method 
      ปัญหาคือ เมื่อส่งแล้ว มันจะ refresh เว็บเอง

      แก้โดยการใช้ event.preventDefault() (ในฟังก์ชั่นที่เรียกใช้คำสั่งนี้ ต้องใช้ event ด้วย)
      ป้องกันการ Refresh เว็บเอง
  */
