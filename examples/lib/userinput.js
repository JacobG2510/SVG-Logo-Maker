const inquirer = require('inquirer');

async function promptUser() {
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo (up to three characters):',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter up to three characters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ]);

  return { text, textColor, shape, shapeColor };
}

module.exports = { promptUser };