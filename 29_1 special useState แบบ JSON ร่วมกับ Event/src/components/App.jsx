import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleValue(event) {
    const { name, value } = event.target;
    //event.target ที่เราอิง function จะมี "name" กับ "placeholder" ที่อยู่ภายใน element "input"

    setContact((prevValue) => {
      // เช็คดูว่า tag "name" ใน element "input" ที่เรากำลังพิมพ์ในช่องนั้นๆ ตรงกันไหม ซึ่งมันโผล่ใน event.target ที่แสดงแบบ real time
      // ค่าอื่นๆ ที่อยู่นอกเหนือจากช่องที่เราพิมพ์ไป ก็ปล่อยให้มันเก็บค่าเดิมมา (ค่าเดิมคือคำที่ติดอยู่ในช่องกรอก)

      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleValue}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleValue}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleValue}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
