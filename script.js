const result = document.querySelector(".result");
const yourScore = document.querySelector("#your-score");
const machineScore = document.querySelector("#machine-score");
const medalFirst = document.querySelector("#medal-first");
const medalSecond = document.querySelector("#medal-second");

let yourPoints = 0;
let machinePoints = 0;

const first = "&#x1F947;";
const second = "&#x1F948;";
const choice = (element) => {
  playGame(element, machine());
};

const machine = () => {
  const choices = ["paper", "rock", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const medal = () => {
  if (yourPoints > machinePoints) {
    medalFirst.innerHTML = first;
    medalSecond.innerHTML = second;
  } else if (machinePoints > yourPoints) {
    medalFirst.innerHTML = second;
    medalSecond.innerHTML = first;
  } else {
    //empate não faça nada
  }
};

const playGame = (choice, machine) => {
  if (choice === machine) {
    result.innerHTML = "Empate, ninguém pontua! &#x1F612;";
  } else if (
    (choice === "paper" && machine === "rock") ||
    (choice === "rock" && machine === "scissors") ||
    (choice === "scissors" && machine === "paper")
  ) {
    yourPoints++;
    result.innerHTML = "Você ganhou a rodada! &#x1F917;";
    yourScore.innerHTML = yourPoints;
    medal();
  } else {
    machinePoints++;
    result.innerHTML = "Você perdeu a rodada! &#x1F622;";
    machineScore.innerHTML = machinePoints;
    medal();
  }
};

const clearGame = () => {
  yourPoints = 0;
  machinePoints = 0;
  result.innerHTML = " Vamos jogar? &#x1F600;";
  yourScore.innerHTML = "0";
  machineScore.innerHTML = "0";
  medalFirst.innerHTML = "";
  medalSecond.innerHTML = "";
};
