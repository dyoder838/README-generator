const fs = require("fs");
const inquirer = require("inquirer");
const covgen = require("covgen")



inquirer.prompt([
    {
        type:"input",
        name:"projectTitle",
        message:"what is the title of your project"
    },
    {
        type:"input",
        Name: "description",
        message: "Describe the project in detail"
    },   
    {
        type:"input",
        Name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },   
    {
        type:"input",
        Name: "usage",
        message: "Provide instructions and examples for use."
    },   
    {
        type:"input",
        Name: "screenshot",
        message: "Include a screenshot using standard git markup, if you have a local file, use ![Alt text](/relative/path/to/img.jpg?raw=true `Optional Title`), if you have an external file, use ![Alt text](http://full/path/to/img.jpg `Optional title`)"
    },   
    {
        type:"input",
        Name: "collaborator",
        message: "List your collaborators, if any, by their name"
    },   
    {
        type:"input",
        Name: "collaboratorLink",
        message: "links to your collaborators GitHub profile. in the following format: https://github.com/'github user name`"
    },   
    {
        type:"input",
        Name: "thirdPartyAsset",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. [link name](url)"
    },   
    {
        type:"input",
        Name: "tutorialCredit",
        message: "If you followed tutorials, include links to those; name followed by [link name](url)"
    },   
    {
        type:"input",
        Name: "license",
        message: "list a license. `xyz License`.  If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/) . be sure to create the LICENSE file"
    }, 
    {
        type:"input",
        Name: "gitUser",
        message: "for badges,What is your git hub user name?"
    },   
    {
        type:"input",
        Name: "repoName",
        message: "For badges, what is the intended repo?"
    },   
    {
        type:"input",
        Name: "test",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them.`"
    },   
    {
        type:"input",
        Name: "",
        message: ""
    },     
]).then(function(data){
    console.log(data)
    // function to create the readme from the template

    //const readmeTemp = readmeTemplate(answer)
    // this takes 3 parameters; file name, content, callback function(err) 
    // fs.writeFile("generatedReadme.md", readmeTemp, function(err){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log("Wright complete!")
    //     }
    // })
})



// function to generate readme 
function readmeTemplate(answer) {
   `# ${answer.projectTitle}                                           #### License: ![GitHub License](https://img.shields.io/github/license/${answer.gitUser}/${answer.repoName})
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

    ${answers.test}`

}

// function to create the readme from the template

// function to initialize program
function init() {

}

// function call to initialize program
init();
