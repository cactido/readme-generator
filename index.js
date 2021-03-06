//required package inclusions
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
//array of questions to provide to the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project: '
    },
    {
        type: 'checkbox',
        name: 'sections',
        message: 'Choose the sections you want to include: ',
        choices: [
            'Installation',
            'Usage',
            'License',
            'Contributing',
            'Tests',
            'Questions'
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: ',
        when: ({ sections }) => { return(sections.includes('Installation')) }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage instructions: ',
        when: ({ sections }) => { return(sections.includes('Usage')) }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license: ',
        choices: [
            'Apache License 2.0',
            'ISC',
            'GNU GPL v2.0',
            'GNU GPL v3.0',
            'MIT License'
        ],
        when: ({ sections }) => { return(sections.includes('Usage')) }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any contribution guidelines: ',
        when: ({ sections }) => { return(sections.includes('Contributing')) }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any test examples or testing instructions: ',
        when: ({ sections }) => { return(sections.includes('Tests')) }
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username (to include in the questions section): ',
        when: ({ sections }) => { return(sections.includes('Questions')) }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (to include in the questions section): ',
        when: ({ sections }) => { return(sections.includes('Questions')) }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any additional instructions for the questions section: ',
        when: ({ sections }) => { return(sections.includes('Questions')) }
    },
];
//writes data to filename
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { 
        if (err) throw err;
        console.log('File saved.');
    })
}
//initiate the questions through inquirer, send the responses to the markdown
//script, then send the markdown response to the writeToFile function
function init() {
    inquirer.prompt(questions)
    .then(data => writeToFile('./output/README.md', markdown(data)));
}
//start the app
init();
