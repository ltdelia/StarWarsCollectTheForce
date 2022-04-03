$(document).ready(function () {
  //-----------------------------
  // GLOBALS
  //-----------------------------

  // Character Values
  let charValue = [];
  let reyValue = 0;
  let finnValue = 0;
  let poeValue = 0;
  let bbValue = 0;
  let matchNumber = 0;

  // Game Counters
  let winCounter = 0;
  let lossCounter = 0;
  let totalScore = 0;

  init();

  //-----------------------------
  // METHODS
  //-----------------------------

  function init() {
    for (var i = 1; i <= 12; i++) {
      charValue.push(i);
    }
    shuffle(charValue);
    assignCharValues();
    matchNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    //Change HTML to reflect round conditions
    document.getElementById("matchNumber").innerHTML = matchNumber;
    document.getElementById("winCounter").innerHTML = winCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;
    document.getElementById("totalScore").innerHTML = totalScore;
  }

  // Shuffle array values in random order
  function shuffle(charValue) {
    let currentIndex = charValue.length,
      tempValue,
      randIndex;
    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = charValue[currentIndex];
      charValue[currentIndex] = charValue[randIndex];
      charValue[randIndex] = tempValue;
    }
    return charValue;
  }

  // Assign each character a random value from the array
  function assignCharValues() {
    reyValue = charValue[0];
    finnValue = charValue[1];
    poeValue = charValue[2];
    bbValue = charValue[3];
  }

  function addToTotalScore(charValue) {
    totalScore += charValue;
    document.getElementById("totalScore").innerHTML = totalScore;
    roundClear();
  }

  // end the round if the totalScore matches or exceeds matchNumber
  function roundClear() {
    if (totalScore == matchNumber) {
      alert("The force is strong with you. You've won!");
      winCounter += 1;
      document.getElementById("winCounter").innerHTML = winCounter;
      resetGame();
    } else if (totalScore > matchNumber) {
      alert("The force is too strong. You've lost...");
      lossCounter += 1;
      document.getElementById("lossCounter").innerHTML = lossCounter;
      resetGame();
    }
  }

  // Reset counters and values
  function resetGame() {
    totalScore = 0;
    document.getElementById("totalScore").innerHTML = totalScore;
    matchNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    document.getElementById("matchNumber").innerHTML = matchNumber;
    shuffle(charValue);
    assignCharValues();
  }

  // --------------------------------
  // Character Button Event Listeners
  // --------------------------------

  $("#rey").click(function () {
    addToTotalScore(reyValue);
  });

  $("#finn").click(function () {
    addToTotalScore(finnValue);
  });

  $("#poe").click(function () {
    addToTotalScore(poeValue);
  });

  $("#bb8").click(function () {
    addToTotalScore(bbValue);
  });
});
