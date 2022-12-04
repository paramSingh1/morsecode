export const morseCode =
  // A to Z in Morse Code
  {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: "-----",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    ":": "---...",
    "-": "-....-",
    "/": "-..-.",
    "`": ".----.",
    "!": "-.-.--",
  };

export const translate = (text) => {
  let output = "";
  const value = text.toUpperCase().trim().split("");
  let lastValue = value[value.length - 1];

  // Characters only permitted in morse code.
  const morseChars = [".", "-", "/", " "];
  if (
    value.length > 0 &&
    lastValue.charCodeAt(0) !== 32 &&
    !(lastValue in morseCode)
  ) {
    if (value.length > 0) {
      value.push("�");
    }
    return `${lastValue} is not a supported character!`;
  }

  const fromMorse = value.every((ele) => {
    return morseChars.includes(ele);
  });

  if (fromMorse) {
    // translate morse to letters , numbers and special chars
    let inputText = text;
    inputText = inputText.split(" ");
    let resultArr = inputText.map((ele) => {
      if (ele == "/") {
        return " ";
      } else {
        return Object.keys(morseCode).find((key) => morseCode[key] == ele);
      }
    });
    return resultArr.join("");
  }

  console.log(value);
  const morseString = value.map((ele) => {
    if (ele === " ") {
      return "/";
    } else {
      return morseCode[ele];
    }
  });
  output = morseString.join(" ");
  return output.trim();
};
