
// TODO: Include packages needed for this application
// need the NPM Inquirer and axios from the base way of looking at this
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

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

        }
    ])
    .then((response) =>
     console.log(JSON.stringify(response)));

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

