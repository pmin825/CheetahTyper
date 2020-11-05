window.addEventListener('load', init);


document.addEventListener("DOMContentLoaded", () => {   
    let startGame = document.getElementById("start-game");
    let newGame = document.getElementById("new-game");
    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");

    startGame.addEventListener("click", () => { 
        document.getElementById("intro-container").classList.add("hidden");
        setInterval(counter, 1000);
        document.getElementById("words-input").focus();
    });

    newGame.addEventListener("click", () => {
        isPlaying = true;
        timer = currentDifficulty;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
    });
    
    easy.addEventListener("click", () => {
        easy.style.color = "white";
        medium.style.color = "black";
        hard.style.color = "black";
        isPlaying = true;
        timer = 20;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
    });

    medium.addEventListener("click", () => {
        easy.style.color = "black";
        medium.style.color = "white";
        hard.style.color = "black";
        isPlaying = true;
        timer = 14;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
    });

    hard.addEventListener("click", () => {
        easy.style.color = "black";
        medium.style.color = "black";
        hard.style.color = "white";
        isPlaying = true;
        timer = 8;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
    });    
});

easy2.addEventListener("click", () => {
    easy2.style.color = "white";
    medium2.style.color = "black";
    hard2.style.color = "black";
    currentDifficulty = difficulty.easy;
});

medium2.addEventListener("click", () => {
    easy2.style.color = "black";
    medium2.style.color = "white";
    hard2.style.color = "black";
    currentDifficulty = difficulty.medium;
});

hard2.addEventListener("click", () => {
    easy2.style.color = "black";
    medium2.style.color = "black";
    hard2.style.color = "white";
    currentDifficulty = difficulty.hard;
});


const sample = [
    "He found his art never progressed when he literally used his sweat and tears.", 
    "In the end, he realized he could see sound and hear words.",
    "I am counting my calories, yet I really want dessert.",
    "In hopes of finding out the truth, he entered the one-room library.",
    "When nobody is around, the trees gossip about the people who have walked under them.",
    "You can't compare apples and oranges, but what about bananas and plantains?",
    "You'll see the rainbow bridge after it rains cats and dogs.",
    "The tart lemonade quenched her thirst, but not her longing.",
    "He was so preoccupied with whether or not he could that he failed to stop to consider if he should.",
    "People generally approve of dogs eating cat food but not cats eating dog food.",
    "For the 216th time, he said he would quit drinking soda after this last Coke.",
    "On a scale from one to ten, what's your favorite flavor of random grammar?"
];

const difficulty = {
    easy: 20,
    medium: 14,
    hard: 8
};

let currentDifficulty = difficulty.easy;

let timer = currentDifficulty;
let isPlaying;
let level = 1;


const wordsDisplayElement = document.getElementById('words-display')
const wordsDisplay = document.querySelector('#words-display');
const wordsInputElement = document.getElementById('words-input')
const wordsInput = document.querySelector('#words-input');
const timeDisplay = document.querySelector('#timer');
const levelDisplay = document.querySelector('#level-display');
const messageDisplay = document.querySelector('#message');
const modal = document.getElementById('modal')

wordsInput.addEventListener('input', () => {
    const arrayWords = wordsDisplayElement.querySelectorAll('span')
    const arrayValue = wordsInputElement.value.split('')

    let correct = true;
    arrayWords.forEach((charSpan, idx) => {
        const char = arrayValue[idx]
        if (char === null) {
            charSpan.classList.remove('spelled-right')
            charSpan.classList.remove('spelled-wrong')
            correct = false;
        }   else if (char === charSpan.innerText) {
            charSpan.classList.add('spelled-right')
            charSpan.classList.remove('spelled-wrong')
        }   else {
            charSpan.classList.add('spelled-wrong')
            charSpan.classList.remove('spelled-right')
            correct = false;
        }
    })
    if (correct) {
        isPlaying = true;
        timer = currentDifficulty;
        showChallenge(sample);
        wordsInput.value = '';
        level += 1;
    }
    levelDisplay.innerHTML = level
})

function init () {
    showChallenge(sample);
    setInterval(gameStatus, 50);
}


function showChallenge(sample) {
    const randIndex = Math.floor(Math.random() * sample.length);
    wordsDisplayElement.innerHTML = '';
    sample[randIndex].split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        wordsDisplayElement.appendChild(charSpan)
    })
}

function counter() {
    timer > 0 ? timer-- : isPlaying = false;
    timeDisplay.innerHTML = timer;
}

function gameStatus() {
    if (!isPlaying && timer === 0) {
        messageDisplay.innerHTML = 'Game Over';
        document.getElementById("modal").classList.remove("hidden");
    }   else {
        messageDisplay.innerHTML = '';
    }
}  


