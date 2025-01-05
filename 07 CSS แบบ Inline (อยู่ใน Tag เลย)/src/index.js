import React from "react";
import ReactDOM from "react-dom";

const fName = "Methawut";
const lName = "Panyaphutti";

// https://www.w3schools.com/cssref/index.php เอาไว้ดู Ref
const fullNameStyle = {
  color: "red",
  fontSize: "40px",
};

fullNameStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={fullNameStyle}>{`my name is ${fName} ${lName}`}</h1>
  </div>,
  document.getElementById("root")
);
