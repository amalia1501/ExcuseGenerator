/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here

  // function arrayPicker(item) {
  //   let concatenated = item[Math.floor(Math.random() * item.length)];
  //   return concatenated;
  // }
  const arrayPicker = item => item[Math.floor(Math.random() * item.length)];

  function arrayConcatenator(who, action, what, when) {
    let sentence = who + " " + action + " " + what + " " + when;

    return sentence;
  }
  const concatenatedSentence = arrayConcatenator(
    arrayPicker(who),
    arrayPicker(action),
    arrayPicker(what),
    arrayPicker(when)
  );

  document.getElementById("excuse").innerHTML = concatenatedSentence;
  console.log("Hello Rigo from the console!");
};
