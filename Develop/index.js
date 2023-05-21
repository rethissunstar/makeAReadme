
// TODO: Include packages needed for this application
// need the NPM Inquirer and axios from the base way of looking at this
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
//this is not how I would do this with my understanding
//const questions = [];
//Object that has the questions and then move to a promise that will include the writefile.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project',
            name: 'title',

        },
        {
            type: 'input',
            message: 'Type a description of your app',
            name: 'description',

        },
        {
            type: 'input',
            message: 'Installation instructions: ',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'usage information: ',
            name: 'usage',

        },
        {
            type: 'checkbox',
            message: 'Which license was used: ',
            name: 'license',
            choices: ['Apache2.0', 'GNU GPL v3.0', 'MIT License', 'B2D 2-Clause', 'B2D 3-Clause new or revised', 'Mozilla Public license 2.0'],

        },
        {
            type: 'input',
            message: 'Who are your contributers? ',
            name: 'contribute',

        },
        {
            type: 'input',
            message: 'how to test your app? ',
            name: 'test',

        },
        {
            type: 'input',
            message: 'enter your Github username',
            name: 'username',

        }
    ])
    .then((response) => {
     console.log(JSON.stringify(response));
     return (response);
})
    .then((response) => {
        console.log("this worked " + JSON.stringify(response.license[0]));
        return (response);
    })
    .then((response) => {
        console.log('checking this too' + JSON.stringify(response.description));
    })
    

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

