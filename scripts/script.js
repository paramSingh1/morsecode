import { translate } from "./translator.js";
const userInput = document.querySelector(".inputForm__userInput");
const output = document.querySelector(".inputForm__output");

userInput.addEventListener("input", (event) => {
  event.preventDefault();
  output.value = translate(userInput.value);
});
