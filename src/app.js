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
  function ArrayPicker(item) {
    let concatenated = item[Math.floor(Math.random() * item.length)];
    return concatenated;
  }

  function ArrayConcatenator(who, action, what, when) {
    let sentence = who + " " + action + " " + what + " " + when;

    return sentence;
  }
  const concatenatedSentence = ArrayConcatenator(
    ArrayPicker(who),
    ArrayPicker(action),
    ArrayPicker(what),
    ArrayPicker(when)
  );

  document.getElementById("excuse").innerHTML = concatenatedSentence;
  console.log("Hello Rigo from the console!");
};

/*window.onload = function() {
  //write your code here
  function ArrayPicker(item) {
    let concatenated = item[Math.floor(Math.random() * item.length)];
    return concatenated;
  }
  function ArrayConcatenator(who, action, what, when) {
    let sentence = who + " " + action + " " + what + " " + when;
    return sentence;
  }

  const concatenatedSentence = ArrayConcatenator(
    ArrayPicker(who),
    ArrayPicker(action),
    ArrayPicker(what),
    ArrayPicker(when)
  );

  function WriteToHtml() {
    console.log(concatenatedSentence);

    document.getElementById("excuse").innerHTML = concatenatedSentence;
  }
  document.addEventListener("DOMContentLoaded", WriteToHtml);

  console.log("Hello Rigo from the console!");
};*/
