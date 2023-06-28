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

}
}

class Circle extends Shape {
  render() {

}
}

class Square extends Shape {
  render() {
    
}
}

module.exports = { Shape, Triangle, Circle, Square };