
const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');

const questions = require('./lib/questions')
const SVG = require('./lib/svg')
const { Circle, Triangle, Square } = require('./lib/shapes')

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {

            const svg = new SVG()
            const newCircle = new Circle()
            const newTriangle = new Triangle()
            const newSquare = new Square()

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



            writeFile(`./examples/logo.svg`, createSVG(answers), (err) => {
                console.log("Generated logo.svg");
                if (err) throw err;
                console.log("Generated logo.svg");
            })



        });


}

// Calls the init function
init();
