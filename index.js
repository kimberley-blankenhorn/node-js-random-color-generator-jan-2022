import chalk from 'chalk';
// import { randomHexColor } from 'random-hex-color-generator';
import randomColor from 'randomcolor'; // import the script

const inputColor = process.argv[2];
const brightness = process.argv[3];

const color = randomColor({
  luminosity: brightness,
  hue: inputColor,
});

// const color = chalk.hex('#FF8800').bold('#FF8800');
const multiLine = `  ############################
  ############################
  ############################
  #####                 ######
  #####    ${color}     ######
  #####                 ######
  ############################
  ############################
  ############################`;

console.log(chalk.hex(color).bold(multiLine));
