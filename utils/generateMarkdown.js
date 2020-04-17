function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Constributors](#contributors)
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
"For more information email [${data.email}](${data.email})"
![GitHub coder avatar](${data.avatar_url})
`;
}

module.exports = generateMarkdown;
