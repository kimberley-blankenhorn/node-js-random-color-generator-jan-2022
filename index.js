import chalk from 'chalk';
// import { randomHexColor } from 'random-hex-color-generator';
import randomColor from 'randomcolor'; // import the script

const color = randomColor({
  luminosity: 'random',
  hue: 'random',
});

const inputColor = process.argv[2];

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
