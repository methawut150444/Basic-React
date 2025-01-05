import React from "react";

function Block(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji_img}
        </span>
        <span>{props.emoji_name}</span>
      </dt>
      <dd>{props.emoji_detail}</dd>
    </div>
  );
}

export default Block;
