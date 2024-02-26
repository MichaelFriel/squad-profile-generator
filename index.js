const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer")
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = []


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    
    //Manager questions

    {
        type: 'input',
        name: 'ManagerName',
        message: "Let's get started. What is our Team Manager's name?"
    },

    {
        type: 'input',
        name: 'ManagerId',
        message: 'What is their ID?'
    },

    {
        type: 'input',
        name: 'ManagerEmail',
        message: 'What is their email address?'
    },

    {
        type: "input",
        name: "ManagerNumber",
        message: "What is their office number?"
    },
]

// Selection mnenu question

function selectionMenu () {
    inquirer.prompt([
        {
                    type: "list",
                    name: "addTeam",
                    message: "Would you like to add another team member?",
                    choices: [
                        'Add an engineer',
                        'Add an intern',
                        'Finish building the team'
                    ]
                },
            ]
    )
    .then(answers => {
        console.log(answers)
        if (answers.addTeam === 'Add an engineer') {
            engineerQuestions()
        } else if (answers.addTeam === 'Add an intern') {
            internQuestions()
        } else {console.log(teamMembers)}
     })
}

// Engineer questions functiion

function engineerQuestions () {
    inquirer.prompt([{
        type: 'input',
        name: 'engineerName',
        message: 'Creating Engineer profile. Please provide their name:',
    
    },

    {
        type: 'input',
        name: 'engineerId',
        message: 'What is their ID?',
        
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email address?',
       
    },

    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'What is their gitHub username?',

    },])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub)
        teamMembers.push(engineer)
        selectionMenu()
        
    })
}

function internQuestions () {
    inquirer.prompt([{

        type: 'input',
        name: 'internName',
        message: 'Creating Intern profile. Please provide their name:',
    },

    {
        type: 'input',
        name: 'internId',
        message: 'What is their ID?',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'What is their email address?',
    },

    {
        type: 'input',
        name: 'internSchool',
        message: 'What school are they attending?',
    },
]) 
.then(answers => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
    teamMembers.push(intern)
    selectionMenu()
})
}


function init() {

    inquirer.prompt(questions)
    .then(answers => {
        
        const manager = new Manager(answers.ManagerName, answers.ManagerId, answers.ManagerEmail, answers.ManagerNumber)
        
        teamMembers.push(manager)
        selectionMenu()
        
    });

}

init()