const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub Username?"
    },
    // {
    //     type: "input",
    //     name: "badge",
    //     message: "What badge do you want to add?"
    // },
    {
        type: "input",
        name: "title",
        message: "Enter your Project title: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter your Project description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Installation information: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instructions and usage information: "
    },
    {
        type: "input",
        name: "license",
        message: "Enter license information: "
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter contributor information: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter tests information: "
    }
];

function promptUser() {
    return inquirer.prompt(
        questions
    )
        .then(async function (data) {
            var information = await api.getUser(data.username);
            // console.log(information);// information grabs the api username and avatar
            // console.log(data); // data grabs the information from the questions list
            let answers = { ...information, ...data }; //combines all data into an object
            console.log(answers);
            const readme = await generateMarkdown(answers);
            await writeFileAsync("./assets/readme.md", readme);
            console.log("did this work?  - 87")
        });
        console.log(answers);
};

async function init() {
    try {
         await promptUser();
    } catch (err) {
        console.log("Error alert:" + err);
    }

}

init();
