import { DiceRoll, DiceRoller } from '@dice-roller/rpg-dice-roller';

const roller = new DiceRoller();

const rolls = (dice) => {
  console.log('Roll Start...');
  const rollResult = () => {
    const rollTotal = roller.roll(dice);
    console.log(rollTotal.output);
    return rollTotal;
  };
  // log the roll result after 2 seconds
  setTimeout(() => {
    console.log('Roll complete!');
    return rollResult();
  }, 2000);
  return new Promise();
};

// start a roll

export default rolls;
