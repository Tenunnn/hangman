const letters = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const randomVgvvd = [
  "African Creature",
  "MongolZ",
  "Roman Empire",
  "Siggagaga",
  "lassaasassa",
];

let SelectedLetter = [];
let pickedWord =
  randomVgvvd[Math.floor(Math.random() * randomVgvvd.length)].toUpperCase();

const letterContainer = document.getElementById("Vsegnuud");
const randoms = document.getElementById("randoms");
const fail = document.getElementById("Fail");
let FailValue = 0;
let HangPic = document.getElementById("pic1");
HangPic.src = "images/0.jpg";
const GameOver = document.getElementById("gameOver");
const Win = document.getElementById("Win");

function Haragduulah() {
  letterContainer.innerHTML = "";

  for (let i = 0; i < letters.length; i++) {
    const button = document.createElement("button");
    button.style.backgroundColor = "blue";
    button.style.height = "30px";
    button.style.width = "30px";
    button.style.gap = "10px";
    button.style.borderRadius = "10px";
    button.innerHTML = letters[i];
    letterContainer.appendChild(button);

    button.addEventListener("click", function () {
      const Value = button.innerText;
      button.disabled = true;

      let alreadySelected = false;
      for (let j = 0; j < SelectedLetter.length; j++) {
        if (SelectedLetter[j] === Value) {
          alreadySelected = true;
        }
      }

      let isCorrect = false;
      for (let j = 0; j < pickedWord.length; j++) {
        if (pickedWord[j] === Value) {
          isCorrect = true;
        }
      }

      if (alreadySelected === false) {
        SelectedLetter.push(Value);

        if (isCorrect === false) {
          FailValue = FailValue + 1;
          HangPic.src = "images/" + FailValue + ".jpg";

          if (FailValue === 7) {
            GameOver.style.visibility = "visible";
          }
        }

        fail.textContent = "Fail: " + FailValue;
        randomwords();

        let x = true;

        for (let i = 0; i < pickedWord.length; i++) {
          let ch = pickedWord[i];
          let isSpace = ch === " ";
          let guessed = false;

          for (let j = 0; j < SelectedLetter.length; j++) {
            if (SelectedLetter[j] === ch) {
              guessed = true;
            }
          }

          if (isSpace === false) {
            if (guessed === false) {
              x = false;
            }
          }
        }

        if (x === true) {
          Win.style.visibility = "visible";
        }
      }
    });
  }
}

function randomwords() {
  randoms.innerHTML = "";

  let hidden = "";
  for (let i = 0; i < pickedWord.length; i++) {
    const char = pickedWord[i];
    const isSpace = char === " ";
    let revealed = false;

    for (let j = 0; j < SelectedLetter.length; j++) {
      if (SelectedLetter[j] === char) {
        revealed = true;
      }
    }

    if (isSpace) {
      hidden = hidden + "   ";
    } else {
      if (revealed) {
        hidden = hidden + char + " ";
      } else {
        hidden = hidden + "_ ";
      }
    }
  }

  const word = document.createElement("div");
  word.innerHTML = hidden.trim();
  randoms.appendChild(word);
}

function startGame() {
  FailValue = 0;
  SelectedLetter = [];
  pickedWord =
    randomVgvvd[Math.floor(Math.random() * randomVgvvd.length)].toUpperCase();
  HangPic.src = "images/0.jpg";
  fail.textContent = "Fail: 0";
  randomwords();
  Haragduulah();
}

startGame();
