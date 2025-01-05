import React from "react";
import Avatar from "./f_avatar";
import Info from "./f_detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name"> {props.name} </h2>
        <Avatar img={props.img} />
      </div>

      <div className="bottom">
        <Info detail={props.tel} />
        <Info detail={props.mail} />
      </div>
    </div>
  );
}

export default Card;
