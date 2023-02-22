const inquirer = require('inquirer')
const fs = require('fs');
const shapes = require('./lib/shapes')
const questions = require('./lib/questions')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

inquirer.registerPrompt('maxLength-input', MaxLengthInputPrompt)

inquirer
    .Prompt(questions)
    .then(() => {

    })