function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
![awesomebadge](https://img.shields.io/badge/awesomeness%20level-${data.login}-blueviolet)

For more information email [${data.email}](${data.email})
![GitHub coder avatar](${data.avatar_url})
`;
}
module.exports = generateMarkdown;
