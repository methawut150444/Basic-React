import React from "react";
import GetHour from "./f_timing";

var text = "";
const inlineCSS = {
  color: "",
};

if (GetHour() >= 12 && GetHour() <= 18) {
  text = "Good Afternoon";
  inlineCSS.color = "green";
} else if (GetHour() >= 18 && GetHour() <= 23) {
  text = "Good evening";
  inlineCSS.color = "blue";
} else {
  text = "Good morning";
  inlineCSS.color = "red";
}

function Heading() {
  return (
    <div>
      <h1 className="heading" style={inlineCSS}>
        {text}
      </h1>
    </div>
  );
}

export default Heading;
