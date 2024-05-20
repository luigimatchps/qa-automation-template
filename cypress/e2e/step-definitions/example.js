import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the homepage', () => {
  cy.visit('https://google.com');
});

Then('I should see the title {string}', (title) => {
  cy.contains('title', );
});