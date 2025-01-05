import React from "react";
import ReactDOM from "react-dom";

const Fname = "Methawut";
const Lname = "Panyaphuttiroj";
const luckyNum = 150444;

ReactDOM.render(
  <div>
    <h1>Hello {Fname + " " + Lname}!</h1>
    <p> your lucky number is {luckyNum} </p>
  </div>,

  document.getElementById("root")
);
