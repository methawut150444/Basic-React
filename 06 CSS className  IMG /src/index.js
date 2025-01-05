import React from "react";
import ReactDOM from "react-dom";

const randomIMG = "https://picsum.photos/200/300?grayscale";
// generate IMG: https://picsum.photos/

ReactDOM.render(
  <div>
    <h1 className="changeHeading">My Hobby</h1>
    <ul>
      <div>
        <li>Bacon</li>
        <img
          className="food-image"
          src="https://www.southernliving.com/thmb/p8kZMtHjs9kt_gA7uo9SBRAB3dk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Microwave_Bacon_006-482743193ffb405ba69d7d255f772d68.jpg"
        />
        <img
          className="food-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrAtkeX0214muY7mPos8IrxZlHnMaoT3-1g&s"
        />
      </div>

      <div>
        <li>Noodles</li>
        <img
          className="food-image"
          src="https://www.allrecipes.com/thmb/Px7y2LlDPmeKlH6PgJ2H-15baEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233446-lo-mein-noodles-dmfs-4x3-1356-1493-64be4dff0a84483b8e7716d6020fb1d5.jpg"
        />
      </div>

      <div>
        <img src={randomIMG} />
      </div>
    </ul>
  </div>,
  document.getElementById("root")
);
