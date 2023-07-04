const { promptUser } = require('./examples/lib/userinput');
const { Triangle, Circle, Square } = require('./examples/lib/shapes');
const { writeFile } = require('./examples/lib/writefile');

async function generateLogo() {
  const { text, textColor, shape, shapeColor } = await promptUser();

  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      console.log('Invalid shape.');
      return;
  }

  shapeInstance.setColor(shapeColor);

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeInstance.render()}
      <text x="150" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;

  writeFile('logo.svg', svgString);
  console.log('Generated logo.svg');
}

generateLogo();