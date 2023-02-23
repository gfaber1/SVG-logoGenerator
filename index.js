const inquirer = require('inquirer')
const fs = require('fs');
const shapes = require('./lib/shapes')
const questions = require('./lib/questions')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile('logo.svg', logoGenerator(data));
        });
}

// Call initialize function
init();