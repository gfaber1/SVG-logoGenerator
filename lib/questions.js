const questions = [
    {
        type: 'maxLength-input',
        message: 'What is your 3 letter acronym',
        name: 'title',
        MaxLength: 3
    },
    {
        type: 'input',
        message: 'Enter either a color keyword or a hexadecimal number for the text color',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'select what shape you would like your SVG to be',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter either a color keyword or a hexadecimal number for the shape color',
        name: 'shapeColor',
    }
]




module.exports = questions;