const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('renders the correct SVG string', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const svgString = shape.render();
    expect(svgString).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('renders the correct SVG string', () => {
    const shape = new Circle();
    shape.setColor('red');
    const svgString = shape.render();
    expect(svgString).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  test('renders the correct SVG string', () => {
    const shape = new Square();
    shape.setColor('green');
    const svgString = shape.render();
    expect(svgString).toEqual('<rect x="40" y="40" width="220" height="120" fill="green" />');
  });
});