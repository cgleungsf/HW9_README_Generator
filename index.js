const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer");


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
    // {
    //     type: "input",
    //     name: "description",
    //     message: "Enter your Project description: "
    // },
    // {
    //     type: "input",
    //     name: "table-contents",
    //     message: "Enter your Table of Contents items separated by commas: "
    // },
    // {
    //     type: "input",
    //     name: "installation",
    //     message: "Enter Installation list: "
    // },
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "Enter usage information: "
    // },
    // {
    //     type: "input",
    //     name: "license",
    //     message: "Enter license information: "
    // },
    // {
    //     type: "input",
    //     name: "contributors",
    //     message: "Enter contributor information: "
    // },
    // {
    //     type: "input",
    //     name: "test",
    //     message: "Enter tests information"
    // }
];

function writeToFile(filename, answers) {
    try {
        // const answers = await promptUser();
        console.log("62", answers.title)

        const md = generateMarkdown(answers);
        // await writeToFile("readme_test.md", md);
        // console.log(answers);
        console.log("67", answers.title)
        
        writeToFile("readme_test.md", md);

        console.log("Successfully wrote to readme_test.md");
    } catch (err) {
        console.log(err);
    }
}

function promptUser() {
    return inquirer.prompt(
        questions
    )
        .then(async function (data) {
            var information = await api.getUser(data.username);
            // console.log(information);// information grabs the api username and avatar
            // console.log(data); // data grabs the information from the questions list
            let answers = { ...information, ...data }; //combines all data into an object
            // console.log(answers);
            // console.log(answers.title)
            writeToFile("readme_test.md", answers); // calls the data to writeToFile function 
        });

};

function init() {
    promptUser();
}

init();
