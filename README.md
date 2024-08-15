# A11yTestingDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cy:open` to execute the end-to-end tests via Cypress

## Demo topics

### Using Chrome DevTools
- [identify color contrast](https://developer.chrome.com/docs/devtools/css/color#fix-contrast)
  - compare color and text size
- [Full accessibility tree](https://developer.chrome.com/blog/full-accessibility-tree#full_accessibility_tree_in_devtools)
  - view dom as simplified nodes
  - look for aria labels and titles
  

### Using Axe DevTools extension
- run test on each page
- open accordions and test again

### using Axe-core with Cypress 
- visit page to load DOM
- inject axe-core library
- navigate via query and click
- navigate via keyboard
- run test for open and closed accordion
