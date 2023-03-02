// requiring dependencies
const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');
//requiring other files
const questions = require('./lib/questions')
const SVG = require('./lib/svg')
const { Circle, Triangle, Square } = require('./lib/shapes')
// requiring an inquirer dependencie
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
// created the function that will run the application
function init() {
    inquirer
        //uses the command line promts to get answers from the user
        .prompt(questions)
        .then((answers) => {
            //creates new consts that will be used to create the shapes
            const svg = new SVG()
            const newCircle = new Circle()
            const newTriangle = new Triangle()
            const newSquare = new Square()
            // determines which shape the user answered and uses the other answers to set the text and shape colors
            function createSVG(answers) {
                if (answers.shape === 'circle') {
                    svg.setTitle(answers.title, answers.textColor)
                    newCircle.setColor(answers.shapeColor)
                    svg.setShape(newCircle)
                    return svg.render()
                } else if (answers.shape === 'triangle') {
                    svg.setTitle(answers.title, answers.textColor)
                    newTriangle.setColor(answers.shapeColor)
                    svg.setShape(newTriangle)
                    return svg.render()
                } else if (answers.shape === 'square') {
                    svg.setTitle(answers.title, answers.textColor)
                    newSquare.setColor(answers.shapeColor)
                    svg.setShape(newSquare)
                    return svg.render()
                }
            }



            writeFile(`./newSVG/logo.svg`, createSVG(answers), (err) => {
                if (err) throw err;
                console.log('Generated logo.svg')
            })



        });


}

// Calls the init function
init();
