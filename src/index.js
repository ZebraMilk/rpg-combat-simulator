// Main entry point for various files
import './style.css';

// source the images correctly after webpack does its thing
import marisela from './assets/images/01-marisela.jpeg';
import dimetriux from './assets/images/06-dimetriux.jpg';

const playerOneImage = document.querySelector('.player-1>img');
playerOneImage.src = marisela;

const playerTwoImage = document.querySelector('.player-2>img');
playerTwoImage.src = dimetriux;

import characters from './characters';
const playerOne = characters.playerOne;
const playerTwo = characters.playerTwo;

// populate initial display
characters.playerOne.displayStats();
characters.playerTwo.displayStats();

// get the dice logic API
import rolls from './dice-logic';

console.log('Page Loaded!');

const toHit = (roll, armor) => {
  console.log(roll, armor);
  if (roll >= armor) {
    console.log('HIT!');
  } else {
    console.log('Miss...');
  }
};

// bring the rollToHit functions into this file to better learn callback Hell
const rollToHit = () => {
  const rollTotal = rolls('1d20');
  console.log(rollTotal);
  return rollTotal;
};

const rollToHitAdvantage = () => {
  const rollTotal = rolls('2d20kh1');
  console.log(rollTotal);
  return rollTotal;
};

const clickHandler = (e) => {
  const attackType = e.target.classList;
  let rollTotal;
  // Check button type for player and advantage
  if (attackType.contains('player-1')) {
    // get a dice roll, takes 2s
    if (attackType.contains('advantage')) {
      rollTotal = rollToHitAdvantage();
    } else {
      rollTotal = rollToHit();
    }
    // THAC0!!!
    // passing in rollTotal which is undefined at the moment
    // so let's pass toHit into rollToHit and call it there
    toHit(rollTotal, playerTwo.armorClass[0]);
  } else if (attackType.contains('player-2')) {
    if (attackType.contains('advantage')) {
      playerTwo.rollToHitAdvantage();
      return;
    }
    playerTwo.rollToHit();
  } else console.log('something else...');
};
// listen to each button?
// OR listen to the console and check the class of the button that's clicked
const buttonConsole = document.querySelector('.console');
buttonConsole.addEventListener('click', clickHandler);
