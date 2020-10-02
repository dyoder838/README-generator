// For this app we are using fs and inquirer.
const fs = require("fs");
const inquirer = require("inquirer");
// Wrap all the code in an async function.
async function start() {
    // Run the inquirer prompts to get the data from the user.
    await inquirer.prompt([
        // These prompts were created in order, following the flow of a readme template
        {
            type: "input",
            name: "projectTitle",
            message: "what is the title of your project"
        },
        {
            type: "input",
            name: "description",
            message: "Describe the project in detail"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "screenshot",
            message: "Include a screenshot using standard git markup, if you have a local file, use ![Alt text](/relative/path/to/img.jpg?raw=true `Optional Title`), if you have an external file, use ![Alt text](http://full/path/to/img.jpg `Optional title`)"
        },
        {
            type: "input",
            name: "collaborator",
            message: "List your collaborators, if any, by their name"
        },
        {
            type: "input",
            name: "collaboratorLink",
            message: "links to your collaborators GitHub profile. in the following format: https://github.com/'github user name`"
        },
        {
            type: "input",
            name: "thirdPartyAsset",
            message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. [link name](url)"
        },
        {
            type: "input",
            name: "tutorialCredit",
            message: "If you followed tutorials, include links to those; name followed by [link name](url)"
        },
        {
            type: "input",
            name: "license",
            message: "list a license. `xyz License`.  If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/) . be sure to create the LICENSE file"
        },
        {
            type: "input",
            name: "gitUser",
            message: "for badges,What is your git hub user name?"
        },
        {
            type: "input",
            name: "repoName",
            message: "For badges, what is the intended repo?"
        },
        {
            type: "input",
            name: "test",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.`"
        },
        // The .then here makes the program wait to write the readme until after the the prompts are finished.
    ]).then(function (answer) {
        
        // readmeTemp holds the string returned from the readmeTemplate function.
        const readmeTemp = readmeTemplate(answer)

        // fs.writeFile takes 3 parameters; file name, content, callback function err. 
        // The function creates a new file "", adds the string content from readmeTemp, and lets you know if it worked.
        fs.writeFile("generatedReadme.md", readmeTemp, function (err) {
            if (err) {
                console.log(err)
            } else {
                console.log("Wright complete!")
            }
        })
    });

// The readmeTemplate function returns the template with the user data, and is used above in readmeTemp.
// The template below was copied from a previously generated readme, to verify the layout.
// The string literals are the user input from the inquirer.prompt.
// The inquirer.prompt objects were created in descending order from the needed input fields below.
// *Note - this function is placed at the edge of the screen because of formatting - if it was not on the edge, the generatedReadme would be indented. 
// *Note - return must be at the head of the string, and back ticks must be used at the beginning and the end of the body of the text - it's all one massive string.
function readmeTemplate(answer) {
        
return`# ${answer.projectTitle} 
![GitHub License](https://img.shields.io/github/license/${answer.gitUser}/${answer.repoName})
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
                                                                                            
 ## Description
        
${answer.description}

            
## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#credits)
- [license](#license)
- [Badges](#Badges)
- [Contributing](#Contributing)
- [Tests](#Tests)
            
            
## Installation
Install Contributor Covenant by executing the following commands in command terminal: npm install -g covgen; covgen "<your_email_address>"
${answer.installation}
        

## Usage 
        
${answer.usage}
            
${answer.screenshot}

            
## Credits

### Collaborators
            
${answer.collaborator} ${answer.collaboratorLink}

### Third Party Assets
            
${answer.thirdPartyAsset}

### Tutorials 
            
${answer.tutorialCredit}

            
## License

This project is using the standard ${answer.license}. See [LICENSE](.LICENSE) for Terms and Conditions.


## Badges

![GitHub language count](https://img.shields.io/github/languages/count/${answer.gitUser}/${answer.repoName})
![GitHub repo size](https://img.shields.io/github/repo-size/${answer.gitUser}/${answer.reponame})

            
## Contributing

[Contributor Covenant](.CODE_OF_CONDUCT.md)
            
            
## Tests

${answer.test}`

};

};
// The start function is called to begin the program
start();