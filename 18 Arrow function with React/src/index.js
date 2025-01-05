import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//-----> Map -Create a new array by doing something with each item in an array.
const new_map = numbers.map((x) => x * 3);
console.log(new_map);

//-----> Filter - Create a new array by keeping the items that return true.
const new_filter = numbers.filter((x) => x > 50);
console.log(new_filter);

//-----> Reduce - Accumulate a value by doing something to each item in an array.
var new_reduce = numbers.reduce((x, y) => x + y + 2);
console.log(new_reduce);

//-----> Find - find the first item that matches from an array.
const found = numbers.find((x) => x > 40 && x < 60);
console.log(found);

//-----> FindIndex - find the index of the first item that matches.
const foundIndex = numbers.findIndex((x) => x == 48);
console.log(foundIndex);
