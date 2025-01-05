import React from "react";
import * as time from "./f_timing";

function Footer() {
  return (
    <footer>
      <p> Copyright ⓒ {time.GetYear()}</p>
    </footer>
  );
}
export default Footer;
