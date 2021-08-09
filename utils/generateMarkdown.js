//returns an MD syntax license badge if a license was selected
function renderLicenseBadge(license) {
  const badges = [
    {
      'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
      'ISC': ' [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
      'GNU GPL v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]',
      'GNU GPL v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
      'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    }
  ]
  //returns license link if a license was requested or an empty string if not
  if (license) {
    return badges[license];
  }
  return '';
}
//returns an MD syntax link if a license was selected
function renderLicenseLink(license) {
  const links = [
    {
      'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      'ISC': '[ISC](https://opensource.org/licenses/ISC)',
      'GNU GPL v2.0': '[GNU GPL v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      'GNU GPL v3.0': '[[GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0)',
      'MIT License': '[MIT License](https://opensource.org/licenses/MIT)'
    }
  ]

  if (license) {
    return links[license];
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
