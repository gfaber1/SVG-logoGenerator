

// The SVG class is to create the rest of the SVG code
class SVG {

    // constructor elements used to pull the information from the Inquirer input. 
    constructor() {
        this.title = '';
        this.shape = '';
    }

    setTitle(title, color) {

        if (this.shape === 'triangle') {
            this.title = `<text x="150" y="140" font-size="50" text-anchor="middle" fill="${color}">${title}</text>`
        } else {
            this.title = `<text x="155" y="120" font-size="60" text-anchor="middle" fill="${color}">${title}</text>`
        }
    }
    // sets the shape to shape.render
    setShape(shape) {
        this.shape = shape.render();
    }

    //renders the svg file with the shape and the title text 
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.title}</svg>`
    }

}
//exports contents of this file to be used elsewhere
module.exports = SVG;