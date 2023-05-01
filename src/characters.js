// Move the character creation and stats stuff from index to here

import marisela from './assets/images/01-marisela.jpeg';
import dimetriux from './assets/images/06-dimetriux.jpg';

// source the images correctly after webpack does its thing
const playerOneImage = document.querySelector('.player-1>img');
playerOneImage.src = marisela;

const playerTwoImage = document.querySelector('.player-2>img');
playerTwoImage.src = dimetriux;

// Grab field arrays
const playerNameFields = document.querySelectorAll('.player-name');
const armorClassFields = document.querySelectorAll('.armor-class');
const hitPointsFields = document.querySelectorAll('.hit-points');
const weaponFields = document.querySelectorAll('.weapon');
const damageFields = document.querySelectorAll('.damage');
const speedFields = document.querySelectorAll('.speed');
