

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
    setShape(shape) {
        this.shape = shape.render();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.title}</svg>`
    }

}

module.exports = SVG;