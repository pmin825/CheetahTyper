document.addEventListener("DOMContentLoaded", () => {   
    let startGame = document.getElementById("start-game");

    startGame.addEventListener("click", () => { 
        document.getElementById("intro-container").classList.add("hidden");
    })
})

window.addEventListener('load', init);

let time = 10;
let isPlaying;

const wordsDisplay = document.querySelector('#words-display');
const wordsInput = document.querySelector('#words-input');
const timeDisplay = document.querySelector('#timer');

const sample = ["He found his art never progressed when he literally used his sweat and tears."]

function init() {
    showChallenge(sample)
}

function showChallenge(sample) {
    wordsDisplay.innerHTML = sample;
}
