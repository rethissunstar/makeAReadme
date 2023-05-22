
// TODO: Include packages needed for this application
// need the NPM Inquirer and axios from the base way of looking at this
const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
var description = '';
var title = '';
var install = '';
var usage = '';
var license = '';
var contribute = '';
var test = '';
var gitUser = '';




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
        console.log(response);
        return (response);

    })
    .then((data) => {
     
      fs.writeFile('README.md', '# Title: ' + JSON.stringify(data.title), (err) =>
        err ? console.error(err) : console.log ('readme created')
      );
      fs.appendFile('README.md', '\n ## Description: ' + '\n' +JSON.stringify(data.description) + '\n', (err) =>
      err ? console.error(err) : console.log ('description added')
    );
    fs.appendFile('README.md', '\n ## installation: ' + '\n' +JSON.stringify(data.installation) + '\n', (err) =>
      err ? console.error(err) : console.log ('install added')
    );
    fs.appendFile('README.md', '\n ## Usage: ' + '\n' +JSON.stringify(data.usage) + '\n', (err) =>
      err ? console.error(err) : console.log ('usage added')
    );
    fs.appendFile('README.md', '\n ## License: ' + '\n' +JSON.stringify(data.license[0]) + '\n', (err) =>
    err ? console.error(err) : console.log ('license added')
  );
  fs.appendFile('README.md', '\n ## Contributors: ' + '\n' +JSON.stringify(data.contribute) + '\n', (err) =>
      err ? console.error(err) : console.log ('contributers added')
    );
    fs.appendFile('README.md', '\n ## test: ' + '\n' +JSON.stringify(data.test) + '\n', (err) =>
      err ? console.error(err) : console.log ('test added')
    );
    fs.appendFile('README.md', '\n ## Github link: ' + '\nhttps://github.com/' +JSON.stringify(data.username) + '\n', (err) =>
      err ? console.error(err) : console.log ('github link added')
    );
    })

    //CHECK YOUR GITHUB-HOW DID THIS WORK BEFORE?
    //CHECK YOUR FUNCTION NOTATION.  THIS ARROW SHIT IS NOT OUR JAM
    
    //(err) => {
    //     if (err) return console.log('Error');
        //  console.log('success');
        // console.log(response);
        // console.log(JSON.stringify(response));
        // title = JSON.stringify(response.title);
        
  
     

//     .then((data) => {
//         fs.appendFile('README.md', ('# Description: ' ), (err) =>
// err ? console.error(err) : console.log('Success!'));

//         return (data);
//     })
//     .then((response) => {
//         fs.appendFile('README.md', (JSON.stringify(response.description) )), (err) =>
// err ? console.error(err) : console.log('Success!');
// return(response);
//     })
    
// I will have to assign all the responses to variable because the quotes come with it and that is not what I want.

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

