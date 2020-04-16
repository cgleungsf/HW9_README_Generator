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
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}


`;
}

module.exports = generateMarkdown;
