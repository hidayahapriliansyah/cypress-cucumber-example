import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the {string} page', (page) => {
  cy.visit(page);
});

Then('I should see an {string} tag containing {string}', (tag, text) => {
  cy.get(tag).contains(text).should('be.visible');
});

Then('I should see an input with id {string}', (id) => {
  cy.get(`#${id}`).should('be.visible');
});

Then('I should see a button with type {string} containing {string}', (type, text) => {
  cy.get(`button[type="${type}"]`).contains(text).should('be.visible');
});

When('I enter {string} into the input with id {string}', (text, id) => {
  cy.get(`#${id}`).type(text);
});

Then('I should see a {string} tag with id {string}', (tag, id) => {
  cy.get(`#${id}`).should('be.visible');
});

When('I clear the input with id {string}', (id) => {
  cy.get(`#${id}`).clear();
});

Then('I should not see a {string} tag with id {string}', (tag, id) => {
  cy.get(`#${id}`).should('not.exist');
});

When('I click the {string} button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see a toast with className {string} after {int} seconds', (className, seconds) => {
  cy.wait(seconds * 1000);
  cy.get(`.${className}`).should('be.visible');
});
