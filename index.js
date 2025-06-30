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
  "Roman",
  "Siggagaga",
  "lassaasassa",
];

const letterContainer = document.getElementById("Vsegnuud");

function Haragduulah() {
  for (let i = 0; i < letters.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = letters[i];
    letterContainer.appendChild(button);
  }
}

function randomwords() {
  const randoms = document.getElementById("randoms");

  randoms.innerHTML = "";

  const RandomIndex = Math.floor(Math.random() * randomVgvvd.length);
  const word = document.createElement("div");
  word.innerHTML = randomVgvvd[RandomIndex];
  randoms.appendChild(word);
}

function showAnswer() {
  let vg = "";
  for (let i = 0; i < randomVgvvd.length; i++) {}
}

Haragduulah();
randomwords();
