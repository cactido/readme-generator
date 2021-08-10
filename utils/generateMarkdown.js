//returns an MD syntax license badge if a license was selected
function renderLicenseBadge(license) {
  const badges = {
      'Apache License 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
      'ISC': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
      'GNU GPL v2.0': '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)',
      'GNU GPL v3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'MIT License': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
  //returns license link if a license was requested or an empty string if not
  if (license) {
    return badges[license];
  }
  return '';
}
//returns an MD syntax link if a license was selected
function renderLicenseLink(license) {
  const links = {
      'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      'ISC': '[ISC](https://opensource.org/licenses/ISC)',
      'GNU GPL v2.0': '[GNU GPL v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      'GNU GPL v3.0': '[[GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0)',
      'MIT License': '[MIT License](https://opensource.org/licenses/MIT)'
    }
  
  if (license) {
    return links[license];
  }
  return '';
}
//returns the rendered license section
function renderLicenseSection(license) {
  return `
  ## License
  Licensed under ${renderLicenseLink(license)}.
  `
}
//generates the entire readme from the constituent sections
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}  

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.installation ?  `- [Installation](#installation)` : ''}
  ${data.usage ? `- [Usage](#usage)`: ''}
  ${data.contributing ? `- [Contributing](#contributing)`: ''}
  ${data.tests ? `- [Tests](#tests)`: ''}
  ${data.questions ? `- [Questions](#questions)`: ''}
  ${data.license ? `- [License](#license)`: ''}

  ${data.license ? renderLicenseSection(data.license): ''}

  ${data.installation ? renderSection('Installation', data.installation): ''}
  ${data.usage ? renderSection('Usage', data.usage): ''}
  ${data.contributing ? renderSection('Contributing', data.contributing): ''}
  ${data.tests ? renderSection('Tests', data.tests): ''}
  ${renderQuestions(data)}
  ${data.license ? renderSection('License', data.license): ''}  
  `;
}
//returns the elements of the questions section
function renderQuestions(data) {
  if (data.email) {
    return `
  ## Questions  
  ${data.questions}  
  [Email Me](mailto:${data.email})  
  [My GitHub Profile](https://github.com/${data.username})
  `
  }
  return '';
}
//returns a header element with the provided title and renders the user input for it
function renderSection (title, data) {
  return `## ${title}
  ${data}
  `
}

module.exports = generateMarkdown;
