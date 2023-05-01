// Main entry point for various files
import './style.css';

// get the dice logic API
import roll from './dice-logic';

// load image sources
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

console.log('Page Loaded!');

// make a factory function for the characters
const makePlayer = (
  id,
  playerName,
  armorClass,
  currentHitPoints,
  maxHitPoints,
  weapon,
  damage,
  speed
) => {
  const playerObj = {
    id,
    // have each player property associated with the value and the corresponding display field
    playerName: [playerName, playerNameFields[id]],
    armorClass: [armorClass, armorClassFields[id]],
    hitPoints: [currentHitPoints, maxHitPoints, hitPointsFields[id]],
    weapon: [weapon, weaponFields[id]],
    damage: [damage, damageFields[id]],
    speed: [speed, speedFields[id]],
    // methods
    takeDamage(damage) {
      this.hitPoints[0] = this.hitPoints[0] - damage;
      if (this.hitPoints[0] <= 0) {
        this.death();
      }
      this.displayStats();
    },
    heal() {
      this.hitPointes.currentHitPoints = this.maxHitPoints;
      this.displayStats();
    },
    displayStats() {
      this.playerName[1].textContent = this.playerName[0];
      this.armorClass[1].textContent = this.armorClass[0];
      this.hitPoints[2].textContent = `${this.hitPoints[0]} / ${this.hitPoints[1]}`;
      this.weapon[1].textContent = this.weapon[0];
      this.damage[1].textContent = this.damage[0];
      this.speed[1].textContent = this.speed[0];
    },
    death() {},
  };
  return playerObj;
};

// listen to each button?
// OR listen to the console and check the class of each button 3

// make two players
const playerOne = makePlayer(
  0,
  'Marisela',
  18,
  50,
  50,
  'Dagger of holding',
  6,
  10
);

const playerTwo = makePlayer(
  1,
  'Dimetriux',
  15,
  40,
  40,
  'Fingernails of Some Description',
  15,
  20
);

// populate initial display
playerOne.displayStats();
playerTwo.displayStats();
roll();
