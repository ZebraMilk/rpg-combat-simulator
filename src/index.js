// Main entry point for various files
import './style.css';

// source the images correctly after webpack does its thing
import marisela from './assets/images/01-marisela.jpeg';
import dimetriux from './assets/images/06-dimetriux.jpg';

const playerOneImage = document.querySelector('.player-1>img');
playerOneImage.src = marisela;

const playerTwoImage = document.querySelector('.player-2>img');
playerTwoImage.src = dimetriux;

// get the dice logic API
import roll from './dice-logic';
import characters from './characters';
const playerOne = characters.playerOne;
const playerTwo = characters.playerTwo;

// populate initial display
characters.playerOne.displayStats();
characters.playerTwo.displayStats();

console.log('Page Loaded!');

const clickHandler = (e) => {
  const attackType = e.target.classList;

  // Check button type for player and advantage
  if (attackType.contains('player-1')) {
    if (attackType.contains('advantage')) {
      playerOne.rollToHitAdvantage();
      return;
    }
    playerOne.rollToHit();
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

roll('1d20');
roll('2d20kh1');
