# CheetahTyper

## Description 

CheetahTyper is a game that allows users to work on their typing speed in a fun way. Each level of this game will have a paragraph for the user to type, and a certain amount of time allotted to finish typing that paragraph. If the user successfully completes the paragraph prior to time running out, they move on to the next level.

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

<p align="center">
  <img src="https://github.com/pmin825/CheetahTyper/blob/main/assets/instructions.png">
</p>

### Gameplay

There are 10 levels per each game difficulty mode. Every level passed will move the cheetah 10 yards closer to the finish line!

<p align="center">
  <img src="https://github.com/pmin825/CheetahTyper/blob/main/assets/gamephoto1.png">
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
```
## Future Direction 

*  Implement a WPM counter that tracks typing speed. 
*  Implement different game modes (ie. single words or different lengths of time) 
