//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1> My Workspace </h1>
    <div>
      <ul>
        <li> Robotics </li>
        <li> Japanese </li>
        <li> IoT </li>
      </ul>
    </div>
  </div>,
  document.getElementById("root"))