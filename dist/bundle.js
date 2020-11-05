/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
window.addEventListener('load', init);
document.addEventListener("DOMContentLoaded", function () {
  var startGame = document.getElementById("start-game");
  var newGame = document.getElementById("new-game");
  var easy = document.getElementById("easy");
  var medium = document.getElementById("medium");
  var hard = document.getElementById("hard");
  startGame.addEventListener("click", function () {
    document.getElementById("intro-container").classList.add("hidden");
    setInterval(counter, 1000);
    document.getElementById("words-input").focus();
  });
  newGame.addEventListener("click", function () {
    isPlaying = true;
    timer = currentDifficulty;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 1;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
  easy.addEventListener("click", function () {
    easy.style.color = "white";
    medium.style.color = "black";
    hard.style.color = "black";
    isPlaying = true;
    timer = 20;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 1;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
  medium.addEventListener("click", function () {
    easy.style.color = "black";
    medium.style.color = "white";
    hard.style.color = "black";
    isPlaying = true;
    timer = 14;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 1;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
  hard.addEventListener("click", function () {
    easy.style.color = "black";
    medium.style.color = "black";
    hard.style.color = "white";
    isPlaying = true;
    timer = 8;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 1;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
});
easy2.addEventListener("click", function () {
  easy2.style.color = "white";
  medium2.style.color = "black";
  hard2.style.color = "black";
  currentDifficulty = difficulty.easy;
});
medium2.addEventListener("click", function () {
  easy2.style.color = "black";
  medium2.style.color = "white";
  hard2.style.color = "black";
  currentDifficulty = difficulty.medium;
});
hard2.addEventListener("click", function () {
  easy2.style.color = "black";
  medium2.style.color = "black";
  hard2.style.color = "white";
  currentDifficulty = difficulty.hard;
});
var sample = ["He found his art never progressed when he literally used his sweat and tears.", "In the end, he realized he could see sound and hear words.", "I am counting my calories, yet I really want dessert.", "In hopes of finding out the truth, he entered the one-room library.", "When nobody is around, the trees gossip about the people who have walked under them.", "You can't compare apples and oranges, but what about bananas and plantains?", "You'll see the rainbow bridge after it rains cats and dogs.", "The tart lemonade quenched her thirst, but not her longing.", "He was so preoccupied with whether or not he could that he failed to stop to consider if he should.", "People generally approve of dogs eating cat food but not cats eating dog food.", "For the 216th time, he said he would quit drinking soda after this last Coke.", "On a scale from one to ten, what's your favorite flavor of random grammar?"];
var difficulty = {
  easy: 20,
  medium: 14,
  hard: 8
};
var currentDifficulty = difficulty.easy;
var timer = currentDifficulty;
var isPlaying;
var level = 1;
var wordsDisplayElement = document.getElementById('words-display');
var wordsDisplay = document.querySelector('#words-display');
var wordsInputElement = document.getElementById('words-input');
var wordsInput = document.querySelector('#words-input');
var timeDisplay = document.querySelector('#timer');
var levelDisplay = document.querySelector('#level-display');
var messageDisplay = document.querySelector('#message');
var modal = document.getElementById('modal');
wordsInput.addEventListener('input', function () {
  var arrayWords = wordsDisplayElement.querySelectorAll('span');
  var arrayValue = wordsInputElement.value.split('');
  var correct = true;
  arrayWords.forEach(function (charSpan, idx) {
    var _char = arrayValue[idx];

    if (_char === null) {
      charSpan.classList.remove('spelled-right');
      charSpan.classList.remove('spelled-wrong');
      correct = false;
    } else if (_char === charSpan.innerText) {
      charSpan.classList.add('spelled-right');
      charSpan.classList.remove('spelled-wrong');
    } else {
      charSpan.classList.add('spelled-wrong');
      charSpan.classList.remove('spelled-right');
      correct = false;
    }
  });

  if (correct) {
    isPlaying = true;
    timer = currentDifficulty;
    showChallenge(sample);
    wordsInput.value = '';
    level += 1;
  }

  levelDisplay.innerHTML = level;
});

function init() {
  showChallenge(sample);
  setInterval(gameStatus, 50);
}

function showChallenge(sample) {
  var randIndex = Math.floor(Math.random() * sample.length);
  wordsDisplayElement.innerHTML = '';
  sample[randIndex].split('').forEach(function (_char2) {
    var charSpan = document.createElement('span');
    charSpan.innerText = _char2;
    wordsDisplayElement.appendChild(charSpan);
  });
}

function counter() {
  timer > 0 ? timer-- : isPlaying = false;
  timeDisplay.innerHTML = timer;
}

function gameStatus() {
  if (!isPlaying && timer === 0) {
    messageDisplay.innerHTML = 'Game Over';
    document.getElementById("modal").classList.remove("hidden");
  } else {
    messageDisplay.innerHTML = '';
  }
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map