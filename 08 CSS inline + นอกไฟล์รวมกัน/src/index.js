//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

//! CSS inline + นอกไฟล์รวมกัน!!!

import React from "react";
import ReactDom from "react-dom";

const timing = new Date("July 21, 1983 19:15:00").getHours();
// console.log(typeof(timing))
var text = "";
const inlineCSS = {
  color: "",
};

if (timing >= 12 && timing <= 18) {
  text = "Good Afternoon";
  inlineCSS.color = "green";
} else if (timing >= 18 && timing <= 23) {
  text = "Good evening";
  inlineCSS.color = "blue";
} else {
  text = "Good morning";
  inlineCSS.color = "red";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={inlineCSS}>
      {text}
    </h1>
  </div>,
  document.getElementById("root")
);
