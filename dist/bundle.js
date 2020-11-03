/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
document.addEventListener("DOMContentLoaded", function () {
  var startGame = document.getElementById("start-game");
  startGame.addEventListener("click", function () {
    document.getElementById("intro-container").classList.add("hidden");
  });
});
window.addEventListener('load', init);
var time = 10;
var isPlaying;
var wordsDisplay = document.querySelector('#words-display');
var wordsInput = document.querySelector('#words-input');
var timeDisplay = document.querySelector('#timer');
var sample = ["He found his art never progressed when he literally used his sweat and tears."];

function init() {
  showChallenge(sample);
}

function showChallenge(sample) {
  wordsDisplay.innerHTML = sample;
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map