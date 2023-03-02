//creates a class of shape with a constructor that will be used to set the color of the shapes
class Shape {
    constructor() {
        this.color = "";
    }

    setColor(color) {
        this.color = color;
    }
}
//sets the shapes fill color then renders it
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
//sets the triangles fill color and then renders the shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//sets the fill color of the shape and then renders the shape
class Square extends Shape {
    render() {
        return `<rect x="90" y ="40" width="120" height="120" fill="${this.color}" />`;
    }
}
//exports the contents of the file so it can be used in the index.js file
module.exports = { Circle, Triangle, Square };
