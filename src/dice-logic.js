import { DiceRoll, DiceRoller } from '@dice-roller/rpg-dice-roller';

const roller = new DiceRoller();

const rollLogic = (dice) => {
  console.log('ROLLLLL');
  const rollResult = roller.roll(dice);
  console.log(rollResult.total);
  return rollResult.total;
};

// start a roll

export default rollLogic;
