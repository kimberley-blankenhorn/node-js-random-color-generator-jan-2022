// Import libraries...may have to run npm install on randomcolor to work
import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

// User input variables for the color and luminosity
const inputColor = process.argv[2];
const brightness = process.argv[3];

// This will put out the random colors
const color = randomColor({
  luminosity: brightness,
  hue: inputColor,
});

//  This is the output with the random color being displayed in the middle but influencing the hash as well
const multiLine = `  ############################
  ############################
  ############################
  #####                 ######
  #####    ${color}     ######
  #####                 ######
  ############################
  ############################
  ############################`;

// Call the function
console.log(chalk.hex(color).bold(multiLine));
