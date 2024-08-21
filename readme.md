# Selenium Booking Test

This project demonstrates a basic Selenium framework to test casino spin games
Author: TestingTrail. 2024.

## Project Structure
selenium-slot-test/ 
- node_modules/ # Node modules and Selenium dependencies
- pages/ # Page objects 
- tests/ # Test scripts 
- tsconfig.json/ # Typescript config file
- package.json # Project metadata and dependencies 
- .gitignore # in case we will use github in the future


## Prerequisites

- Node.js and npm installed
- Selenium WebDriver
- Mocha
- TypeScript
- Appropriate WebDriver for the browser you intend to use (e.g., ChromeDriver for Google Chrome)

## Setup

1. Unzip the project in your folder (or clone it)
2. Navigate to the project directory.
3. Install dependencies by running: `npm install`
4. Compile Typescript by entering in the termina `tsc`
5. Run either ```ts-node tests/SpinTest.js``` or ```npm run test``` (two separate tests for two separate casinos)

## Testing approach

SpinTest.ts
- approach for testing was to check the encode64 before and after the spin
```ts-node tests/SpinTest.js```


SpinTest2.ts 
- created using mocha, able to spin, for lack of time not able to check API for balance
```npm run test```

## Dev Notes

- The suggested casino did not have console logs or API but still able to spin and 
check status
- The second example (SpinTest2.ts) made with Mocha but not enough time to create a proper set of waits and to validate API
- For TypeScript projects, ensure you have a [`tsconfig.json`] file configured for your project's needs.
- Cannot use chai v5 as there is an issue when using const { expect } = require('chai');
