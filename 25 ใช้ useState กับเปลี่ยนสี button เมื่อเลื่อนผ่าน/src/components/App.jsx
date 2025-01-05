import React, { useState } from "react";

function App() {
  const [headingText, set_headingText] = useState("Hello");
  const [mouseOverState, set_mouseOverState] = useState(false);

  function mouseClick() {
    console.log("clicked");
    set_headingText("Submitted");
  }

  function mouseOver() {
    console.log("overed");
    set_mouseOverState(true);
  }

  function mouseOut() {
    console.log("outed");
    set_mouseOverState(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOverState ? "black" : "white" }}
        onClick={mouseClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

// ดูลูกเล่น mouse: https://www.w3schools.com/tags/ref_eventattributes.asp
