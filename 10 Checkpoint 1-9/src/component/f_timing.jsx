import React from "react";

function GetHour() {
  return new Date("July 21, 1983 02:15:00").getHours();
  //return hour -> 0 to 23 (type: number)
}

export default GetHour;
