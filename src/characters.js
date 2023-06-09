// Grab field arrays, should be 2 of each from ./template.html
const playerNameFields = document.querySelectorAll('.player-name');
const armorClassFields = document.querySelectorAll('.armor-class');
const hitPointsFields = document.querySelectorAll('.hit-points');
const weaponFields = document.querySelectorAll('.weapon');
const damageFields = document.querySelectorAll('.damage');
const speedFields = document.querySelectorAll('.speed');

// get the dice logic API
import rolls from './dice-logic';

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
    rollToHit() {
      console.log(`Player ${id + 1} Attack!`);
      const rollTotal = rolls('1d20');
      return rollTotal;
    },
    rollToHitAdvantage() {
      console.log(`Player ${id + 1} Attack with Advantage!!!`);
      const rollTotal = rolls('2d20kh1');
      return rollTotal;
    },
    rollDamage() {},
  };
  // Definitely can return just the methods, the "get/set" stuff, rather than the whole thing
  return playerObj;
};

// make two players
const playerOne = makePlayer(
  0,
  'Marisela',
  18,
  50,
  50,
  'Dagger of holding',
  '2d6',
  10
);

const playerTwo = makePlayer(
  1,
  'Dimetriux',
  15,
  40,
  40,
  'Fingernails of Some Description',
  '3d8',
  20
);

export default { playerOne, playerTwo };
