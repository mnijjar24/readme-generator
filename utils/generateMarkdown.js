function renderLicenseBadge(license) {
            return renderLicenseBadge;
          }
            renderLicenseBadge()
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'GNU AGPLv3': return `https://www.gnu.org/licenses/agpl-3.0`;
      case 'GNU GPLv3': return `https://www.gnu.org/licenses/gpl-3.0`;
      case 'GNU LGPLv3': return `https://www.gnu.org/licenses/lgpl-3.0`;
      case 'Mozilla Public License 2.0': return `https://opensource.org/licenses/MPL-2.0`;
      case 'Apache License 2.0': return `https://opensource.org/licenses/Apache-2.0`;
      case 'MIT License': return `https://opensource.org/licenses/MIT`;
      case 'Boost Software License 1.0': return `https://www.boost.org/LICENSE_1_0.txt`;
      case 'The Unlicense': return `http://unlicense.org/`;
  }
  
}
renderLicenseLink()


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseBadges, licenseLink) {
  return `
  
  ## License
  ${licenseBadges}
  Link to the license: ${licenseLink}
  `;
}
//function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(licenseBadge, licenseLink);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseLink}

## Contributing
${data.contributions}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;