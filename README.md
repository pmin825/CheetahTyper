# CheetahTyper

## Description 

CheetahTyper is a game that allows users to work on their typing speed in a fun way. Players will try and get Cheetah to the finish line, by correctly typing each sentence/paragraph that is presented within an alotted amount of time. There are a variety of game difficulties so that anyone can play, and enjoy working on their typing speed at the same time! 

<p align="center">
  <img width="100" height="100" src="https://github.com/pmin825/CheetahTyper/blob/main/assets/cheetah.png">
</p>

## Live

Play the live game [here](https://pmin825.github.io/CheetahTyper/)!

## Technologies

*  Vanilla Javascript

*  HTML5

*  CSS3

*  Webpack

## Instructions 

*  Choose your game difficulty level, and then press start game! 

*  Each level of the game will have a sentence or paragraph for you to type, and a certain alotted time based on the difficulty chosen. 

*  Successfully type out the sentence/paragraph correctly before time runs out, and move Cheetah 10 yards close to the finish line.

*  Get Cheetah to the finish line to win (100 yards)!

### Gameplay

There are 10 levels per each game difficulty mode. Every level passed will move the cheetah 10 yards closer to the finish line!

<p align="center">
  <img src="https://github.com/pmin825/CheetahTyper/blob/main/assets/cheetahgamess.png">
</p>

## Technical Implementation 

 Leveraging javascripts asynchrosity, a series of fuctions are invoked upon a sentence being successfully typed correctly. 
 
 *  correctSound plays a sound signifying the sentence was typed correctly.
 *  animate moves the cheetah 10 yards (10px) accross the screen.
 *  showChallenge generates a new challenge sentence to be displayed.

```js
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
    }   else {
        levelDisplay.innerHTML = ((level - 1) * 10)
    }
})

function correctSound() {
    const correctWord = new Audio("./assets/winsound.mp3");
    if (soundOn === false) correctWord.muted = true;
    correctWord.volume = .40
    correctWord.play();
}

let cheetahLeft = 0;
function animate(e) {
    cheetahLeft += (window.screen.width / 12);
    cheetah.style.left = cheetahLeft + 'px';
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
```
## Future Direction 

*  Implement a WPM counter that tracks typing speed. 
*  Implement different game modes (ie. single words or different lengths of time) 
