import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

/*
 1. ค่าใน JSON ถูก Map ไปยัง function "createEntry"
 2. ค่าใน JSON แต่ละ Array (แต่ละ key) ถูกนำไปเป็นค่าในตัวแปรต่างๆ ของ function Entry อีก component นึง
 3. ค่าใน JSON แต่ละ Array (แต่ละ key) ถูกจัดฟอร์มใหม่ ที่จัดไว้ใน function Entry



*/
