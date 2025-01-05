import React, { useState } from "react";

function App() {
  const [inputText, set_inputText] = useState("");
  const [item, set_item] = useState([]); //ตัวแปรทั้ง 2 เป็น Array

  function handleInput(event) {
    //function นี้ ทำเมื่อมีการพิมพ์
    const val = event.target.value; //เก็บค่าที่พิมพ์ในตัวแปร "val" และ set มัน
    console.log(val);
    set_inputText(val);
  }

  function recorditem(event) {
    //function นี้ ทำเมื่อมีการกดปุ่ม
    //เก็บค่าที่พิมพ์ในตัวแปร "val" และ set มัน
    set_item((prevItem) => {
      return [...prevItem, inputText]; // 1. เป็น array ค่าก่อนหน้าทั้งหมด และค่าที่ใส่เข้าไปใหม่ (inputText)
    });
    set_inputText(""); //2. จากนั้นค่อยล้างค่าที่อยู่ใน inputText
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={recorditem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* map ค่าทุกตัวใน array โดย return เป็น tag "list" */}
          {item.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
