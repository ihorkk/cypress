# telnyx tests


## Requirements

 - [node.js](https://nodejs.org/)
 - [cypress framework](https://www.cypress.io)
 - [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)


## Setup

1. Download node.js (preferable 16.x version)
2. Clone this repository to your local machine and open it with any IDE
3. Enter the following commands to your terminal in the root folder:
      ```bash
       npm install
       npm install cypress --save-dev
       npm install -D cypress-xpath
      ```

## Execution

You will find scripts to run the tests in the package.json file:

- To open cypress:
    `cypress:open`
- To execute all the tests:
    `cypress:run`
- To execute all the tests in headed mode:
    `cypress:headed`
- To execute all the tests in specific browser (e.g. Chrome):
    `cypress:chrome`
- To execute a single test:
    `cypress:single`


## Project structure

- `cypress` folder contains cypress framework 
- `cypress/e2e/pom` folder contains all selectors that are required for testing
- `cypress/e2e/test_cases` folder contains 10 Telnyx tests
- `cypress/videos` folder contains videos of the executed tests
