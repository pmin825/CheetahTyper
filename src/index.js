window.addEventListener('load', init);


document.addEventListener("DOMContentLoaded", () => {   
    let startGame = document.getElementById("start-game");
    let newGame = document.getElementById("new-game");
    let easy = document.getElementById("easy");
    let medium = document.getElementById("medium");
    let hard = document.getElementById("hard");

    
    // document.addEventListener("keydown", animate);

    startGame.addEventListener("click", () => { 
        document.getElementById("intro-container").classList.add("hidden");
        backgroundMusic();
        setInterval(counter, 1000);
        document.getElementById("words-input").focus();
    });

    newGame.addEventListener("click", () => {
        timer = currentDifficulty;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
        backgroundMusic();
    });
    
    easy.addEventListener("click", () => {
        easy.style.color = "white";
        medium.style.color = "black";
        hard.style.color = "black";
        timer = 21;
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
        timer = 16;
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
        timer = 11;
        showChallenge(sample);
        wordsInput.value = '';
        levelDisplay.innerHTML = 1
        document.getElementById("modal").classList.add("hidden");
        document.getElementById("words-input").focus();
    });    
});

easy.addEventListener("click", () => {
    currentDifficulty = difficulty.easy;

});

medium.addEventListener("click", () => {
    currentDifficulty = difficulty.medium;

});

hard.addEventListener("click", () => {
    currentDifficulty = difficulty.hard;

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
    "On a scale from one to ten, what's your favorite flavor of random grammar?",
    "The door swung open to reveal pink giraffes and red elephants.",
    "Truth in advertising and dinosaurs with skateboards have much in common.",
    "Swim at your own risk was taken as a challenge for the group of Kansas City college students.",
    "There were white out conditions in the town; subsequently, the roads were impassable.",
    "A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.",
    "She finally understood that grief was her love with no place for it to go",
    "Writing a list of random sentences is harder than I initially thought it would be.",
    "The wake behind the boat told of the past while the open sea for told life in the unknown future.",
    "While on the first date he accidentally hit his head on the beam.",
    "He knew it was going to be a bad day when he saw mountain lions roaming the streets.",
    "Every manager should be able to recite at least ten nursery rhymes backward.",
    "The tattered work gloves speak of the many hours of hard labor he endured throughout his life",
    "Poison ivy grew through the fence they said was impenetrable.",
    "She always had an interesting perspective on why the world must be flat.",
    "Standing on one's head at job interviews forms a lasting impression.",
    "Random words in front of other random words create a random sentence.",
    "To the surprise of everyone, the Rapture happened yesterday but it didn't quite go as expected.",
    "He had a hidden stash underneath the floorboards in the back room of the house.",
    "If you like tuna and tomato sauce- try combining the two. It's really not as bad as it sounds.",
    "He had unknowingly taken up sleepwalking as a nighttime hobby.",
    "She hadn't had her cup of coffee, and that made things all the worse.",
    "I don't respect anybody who can’t tell the difference between Pepsi and Coke.",
    "While all her friends were positive that Mary had a sixth sense, she knew she actually had a seventh sense",
    "The green tea and avocado smoothie turned out exactly as would be expected."
];

const difficulty = {
    easy: 21,
    medium: 16,
    hard: 11
};

let currentDifficulty = difficulty.medium

let timer = currentDifficulty;
let level = 1;

const wordsDisplayElement = document.getElementById('words-display')
const wordsDisplay = document.querySelector('#words-display');
const wordsInputElement = document.getElementById('words-input')
const wordsInput = document.querySelector('#words-input');
const timeDisplay = document.querySelector('#timer');
const levelDisplay = document.querySelector('#level-display');
const scoreDisplay = document.querySelector('#final-score');
const messageDisplay = document.querySelector('#message');
const modal = document.getElementById('modal');
const sound = document.getElementById("sound-settings");
const cheetahDisplay = document.getElementById('cheetah');
const gameFinished = document.getElementById('game-over');
const tryAgain = document.getElementById('try-again-msg');


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
                    // animate();
            charSpan.classList.add('spelled-right')
            charSpan.classList.remove('spelled-wrong')
        }   else {
            charSpan.classList.add('spelled-wrong')
            charSpan.classList.remove('spelled-right')
            correct = false;
        }
    })
    if (correct) {
        correctSound();
        animate();
        timer = currentDifficulty;
        showChallenge(sample);
        wordsInput.value = '';
        level += 1;
        if (level === 11) cheetah.style.left = 0;
    }
    levelDisplay.innerHTML = level
    scoreDisplay.innerHTML = ((level - 1) * 10) + " YARDS!"
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
    if (timer > 0) timer--;
    timeDisplay.innerHTML = timer;
}

function gameStatus() {
    if (timer === 0 || level === 11) {
        cheetahLeft = 0;
        cheetah.style.left = 0;
        if (level === 11) {
            gameFinished.innerHTML = 'You Win!'; 
            tryAgain.innerHTML = 'Cheetah made it to the finish line!'
            messageDisplay.innerHTML = 'You Win!'; 
        }   else {
            gameFinished.innerHTML = 'Game over'; 
            tryAgain.innerHTML = "Try again!"
            messageDisplay.innerHTML = 'Game Over';
        }
        if (currentDifficulty === difficulty.easy) {
            easy2.style.color = "white";
            medium2.style.color = "black";
            hard2.style.color = "black";
        }   else if (currentDifficulty === difficulty.medium) {
            easy2.style.color = "black";
            medium2.style.color = "white";
            hard2.style.color = "black";
        }   else if (currentDifficulty = difficulty.hard) {
            easy2.style.color = "black";
            medium2.style.color = "black";
            hard2.style.color = "white";
        }
        document.getElementById("modal").classList.remove("hidden");
        level = 1;
        gameMusic.pause();
        gameMusic.currentTime = 0;
        gameOverSound();
        timer = null; 
    }   else {
        messageDisplay.innerHTML = '';
    }
}

wordsInput.addEventListener("keydown", typeSound);

let soundOn = true;

sound.addEventListener("click", () => {

    if (soundOn === true) {
        soundOn = false;
        stopMusic();
    }   else {
        soundOn = true;
        backgroundMusic();
    }

    sound.innerHTML === "SOUND is ON" ? sound.innerHTML = "SOUND is OFF" : sound.innerHTML = "SOUND is ON"
});

function typeSound() {
    const keyPress = new Audio("./assets/typeclick.mp3");
    if (soundOn === false) keyPress.muted = true;
    keyPress.volume = .20   
    keyPress.play();
};


function correctSound() {
    const correctWord = new Audio("./assets/winsound.mp3");
    if (soundOn === false) correctWord.muted = true;
    correctWord.volume = .40
    correctWord.play();
}

function gameOverSound() {
    const gameOver =  new Audio("./assets/gmover.mp3");
    if (soundOn === false) gameOver.muted = true;
    gameOver.volume = .20;
    gameOver.play();
}

const gameMusic = new Audio ("./assets/gamemusic.mp3");

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

let cheetahLeft = 0;
function animate(e) {
    cheetahLeft += (window.screen.width / 12);
    cheetah.style.left = cheetahLeft + 'px';
}




















