class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {

    }
}

class Triangle extends Shape {
  render() {
    const points = "150,18 244,182 56,182";
    return `<polygon points="${points}" fill="${this.color}" />`
}
}

class Circle extends Shape {
  render() {
    const cx = 150;
    const cy = 100;
    const r = 80;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
}
}

class Square extends Shape {
  render() {
    const x = 40;
    const y = 40;
    const width = 220;
    const height = 120;
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`;
}
}

module.exports = { Shape, Triangle, Circle, Square };