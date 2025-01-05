import React from "react";
import emojipedia from "../emojipedia";
import Block from "./Block";

function createBlock(data) {
  return (
    <Block
      key={data.id}
      emoji_img={data.emoji}
      emoji_name={data.name}
      emoji_detail={data.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createBlock)}</dl>
    </div>
  );
}

export default App;
