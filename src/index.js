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

// populate initial display
characters.playerOne.displayStats();
characters.playerTwo.displayStats();

console.log('Page Loaded!');

// listen to each button?
// OR listen to the console and check the class of each button 3

roll();
