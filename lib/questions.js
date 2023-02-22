const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxLength-input', MaxLengthInputPrompt)
const questions = [
    {
        type: 'maxLength-input',
        message: 'What is your 3 letter acronym',
        name: 'title',
        MaxLength: 3
    }
]




module.exports = questions;