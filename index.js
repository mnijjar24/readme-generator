// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your ReadMe? (Required)',
        validate: readmeName => {
            if (readmeName) {
                return true;
            } else {
                console.log('Please enter the name of your Readme!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application (Required)',
        validate: descriptonInput => {
            if (descriptonInput) {
                return true;
            } else {
                console.log('Please enter a description of your application!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide information on how to use your application (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter information on how to use your application!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Provide details on how to install your application.',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select the application license type',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Provide details on the contributions.',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Provide details on running tests on your application.',
    },
    {

        type: 'input',
        name: 'github',
        message: 'Enter your github username (Required)',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },

    {

        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailAddress => {
            if (emailAddress) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
    fs.writeFile(generateMarkdown, data, function (err) {
        if (err) {
            return console.log('Error');
    }else{ 
        console.log('File has been written successfully!')
    }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('./dist/README.md', generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
