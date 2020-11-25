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
  var hard = document.getElementById("hard"); // document.addEventListener("keydown", animate);

  startGame.addEventListener("click", function () {
    document.getElementById("intro-container").classList.add("hidden");
    backgroundMusic();
    setInterval(counter, 1000);
    document.getElementById("words-input").focus();
  });
  newGame.addEventListener("click", function () {
    timer = currentDifficulty;
    showChallenge(sample);
    wordsInput.value = '';
    level = 1;
    levelDisplay.innerHTML = 0;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
    backgroundMusic();
  });
  easy.addEventListener("click", function () {
    easy.style.backgroundColor = "green";
    medium.style.backgroundColor = "#CDB498";
    hard.style.backgroundColor = "#CDB498";
    easy.style.color = "white";
    medium.style.color = "black";
    hard.style.color = "black";
    timer = 26;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 0;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
  medium.addEventListener("click", function () {
    medium.style.backgroundColor = "orange";
    easy.style.backgroundColor = "#CDB498";
    hard.style.backgroundColor = "#CDB498";
    easy.style.color = "black";
    medium.style.color = "white";
    hard.style.color = "black";
    timer = 21;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 0;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
  hard.addEventListener("click", function () {
    hard.style.backgroundColor = "red";
    easy.style.backgroundColor = "#CDB498";
    medium.style.backgroundColor = "#CDB498";
    easy.style.color = "black";
    medium.style.color = "black";
    hard.style.color = "white";
    timer = 16;
    showChallenge(sample);
    wordsInput.value = '';
    levelDisplay.innerHTML = 0;
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("words-input").focus();
  });
});
easy.addEventListener("click", function () {
  easy2.style.backgroundColor = "green";
  medium2.style.backgroundColor = "#CDB498";
  hard2.style.backgroundColor = "#CDB498";
  currentDifficulty = difficulty.easy;
});
medium.addEventListener("click", function () {
  medium2.style.backgroundColor = "orange";
  easy2.style.backgroundColor = "#CDB498";
  hard2.style.backgroundColor = "#CDB498";
  currentDifficulty = difficulty.medium;
});
hard.addEventListener("click", function () {
  hard2.style.backgroundColor = "red";
  easy2.style.backgroundColor = "#CDB498";
  medium2.style.backgroundColor = "#CDB498";
  currentDifficulty = difficulty.hard;
});
easy2.addEventListener("click", function () {
  easy2.style.backgroundColor = "green";
  medium2.style.backgroundColor = "#CDB498";
  hard2.style.backgroundColor = "#CDB498";
  easy2.style.color = "white";
  medium2.style.color = "black";
  hard2.style.color = "black";
  currentDifficulty = difficulty.easy;
});
medium2.addEventListener("click", function () {
  medium2.style.backgroundColor = "orange";
  easy2.style.backgroundColor = "#CDB498";
  hard2.style.backgroundColor = "#CDB498";
  easy2.style.color = "black";
  medium2.style.color = "white";
  hard2.style.color = "black";
  currentDifficulty = difficulty.medium;
});
hard2.addEventListener("click", function () {
  hard2.style.backgroundColor = "red";
  easy2.style.backgroundColor = "#CDB498";
  medium2.style.backgroundColor = "#CDB498";
  easy2.style.color = "black";
  medium2.style.color = "black";
  hard2.style.color = "white";
  currentDifficulty = difficulty.hard;
});
var sample = ["He found his art never progressed when he literally used his sweat and tears.", "In the end, he realized he could see sound and hear words.", "I am counting my calories, yet I really want dessert.", "In hopes of finding out the truth, he entered the one-room library.", "When nobody is around, the trees gossip about the people who have walked under them.", "You can't compare apples and oranges, but what about bananas and plantains?", "You'll see the rainbow bridge after it rains cats and dogs.", "The tart lemonade quenched her thirst, but not her longing.", "He was so preoccupied with whether or not he could that he failed to stop to consider if he should.", "People generally approve of dogs eating cat food but not cats eating dog food.", "For the 216th time, he said he would quit drinking soda after this last Coke.", "On a scale from one to ten, what's your favorite flavor of random grammar?", "The door swung open to reveal pink giraffes and red elephants.", "Truth in advertising and dinosaurs with skateboards have much in common.", "Swim at your own risk was taken as a challenge for the group of Kansas City college students.", "There were white out conditions in the town; subsequently, the roads were impassable.", "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.", "She finally understood that grief was her love with no place for it to go.", "Writing a list of random sentences is harder than I initially thought it would be.", "The wake behind the boat told of the past while the open sea for told life in the unknown future.", "While on the first date he accidentally hit his head on the beam.", "He knew it was going to be a bad day when he saw mountain lions roaming the streets.", "Every manager should be able to recite at least ten nursery rhymes backward.", "The tattered work gloves speak of the many hours of hard labor he endured throughout his life", "Poison ivy grew through the fence they said was impenetrable.", "She always had an interesting perspective on why the world must be flat.", "Standing on one's head at job interviews forms a lasting impression.", "Random words in front of other random words create a random sentence.", "To the surprise of everyone, the Rapture happened yesterday but it didn't quite go as expected.", "He had a hidden stash underneath the floorboards in the back room of the house.", "If you like tuna and tomato sauce- try combining the two. It's really not as bad as it sounds.", "He had unknowingly taken up sleepwalking as a nighttime hobby.", "She hadn't had her cup of coffee, and that made things all the worse.", "I don't respect anybody who can't tell the difference between Pepsi and Coke.", "While all her friends were positive that Mary had a sixth sense, she knew she actually had a seventh sense.", "The green tea and avocado smoothie turned out exactly as would be expected."];
var difficulty = {
  easy: 26,
  medium: 21,
  hard: 16
};
var currentDifficulty = difficulty.medium;
var timer = currentDifficulty;
var level = 1;
var wordsDisplayElement = document.getElementById('words-display');
var wordsDisplay = document.querySelector('#words-display');
var wordsInputElement = document.getElementById('words-input');
var wordsInput = document.querySelector('#words-input');
var timeDisplay = document.querySelector('#timer');
var levelDisplay = document.querySelector('#level-display');
var scoreDisplay = document.querySelector('#final-score');
var messageDisplay = document.querySelector('#message');
var modal = document.getElementById('modal');
var sound = document.getElementById("sound-settings");
var cheetahDisplay = document.getElementById('cheetah');
var gameFinished = document.getElementById('game-over');
var tryAgain = document.getElementById('try-again-msg');
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
      // animate();
      charSpan.classList.add('spelled-right');
      charSpan.classList.remove('spelled-wrong');
    } else {
      charSpan.classList.add('spelled-wrong');
      charSpan.classList.remove('spelled-right');
      correct = false;
    }
  });

  if (correct) {
    correctSound();
    animate();
    timer = currentDifficulty;
    showChallenge(sample);
    wordsInput.value = '';
    level += 1;
    if (level === 11) cheetah.style.left = 0;
  }

  if (level === 1) {
    levelDisplay.innerHTML = 0;
  } else {
    levelDisplay.innerHTML = (level - 1) * 10;
  }
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
  if (timer > 0) timer--;
  timeDisplay.innerHTML = timer;
}

function gameStatus() {
  if (timer === 0 || level === 11) {
    cheetahLeft = 0;
    cheetah.style.left = 0;

    if (level === 11) {
      gameFinished.innerHTML = 'You Win';
      tryAgain.innerHTML = 'Cheetah made it to the finish line!';
      messageDisplay.innerHTML = 'You Win';
    } else {
      gameFinished.innerHTML = 'Game over';
      tryAgain.innerHTML = "Try again!";
      messageDisplay.innerHTML = 'Game Over';
    }

    if (currentDifficulty === difficulty.easy) {
      easy2.style.color = "white";
      medium2.style.color = "black";
      hard2.style.color = "black";
    } else if (currentDifficulty === difficulty.medium) {
      easy2.style.color = "black";
      medium2.style.color = "white";
      hard2.style.color = "black";
    } else if (currentDifficulty = difficulty.hard) {
      easy2.style.color = "black";
      medium2.style.color = "black";
      hard2.style.color = "white";
    }

    document.getElementById("modal").classList.remove("hidden");
    gameMusic.pause();
    gameMusic.currentTime = 0;

    if (level === 11) {
      winnerSound();
    } else {
      gameOverSound();
    }

    timer = null;
    scoreDisplay.innerHTML = (level - 1) * 10 + " yards!";
    level = 1;
  } else {
    messageDisplay.innerHTML = '';
  }
}

wordsInput.addEventListener("keydown", typeSound);
var soundOn = true;
sound.addEventListener("click", function () {
  if (soundOn === true) {
    soundOn = false;
    stopMusic();
  } else {
    soundOn = true;
    backgroundMusic();
  }

  sound.innerHTML === "SOUND is ON" ? sound.innerHTML = "SOUND is OFF" : sound.innerHTML = "SOUND is ON";
});

function typeSound() {
  var keyPress = new Audio("./assets/typeclick.mp3");
  if (soundOn === false) keyPress.muted = true;
  keyPress.volume = .20;
  keyPress.play();
}

;

function correctSound() {
  var correctWord = new Audio("./assets/winsound.mp3");
  if (soundOn === false) correctWord.muted = true;
  correctWord.volume = .40;
  correctWord.play();
}

function gameOverSound() {
  var gameOver = new Audio("./assets/gmover.mp3");
  if (soundOn === false) gameOver.muted = true;
  gameOver.volume = .30;
  gameOver.play();
}

function winnerSound() {
  var winner = new Audio("./assets/won.mp3");
  if (soundOn === false) winner.muted = true;
  winner.volume = .40;
  winner.play();
}

var gameMusic = new Audio("./assets/gamemusic.mp3");

function backgroundMusic() {
  if (soundOn === false) gameMusic.muted = true;
  if (soundOn === true) gameMusic.muted = false;
  gameMusic.volume = .40;
  gameMusic.play();
  gameMusic.loop = true;
}

function stopMusic() {
  gameMusic.pause();
  gameMusic.currentTime = 0;
}

var cheetahLeft = 0;

function animate(e) {
  cheetahLeft += window.screen.width / 12;
  cheetah.style.left = cheetahLeft + 'px';
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map