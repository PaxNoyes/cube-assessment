// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Creates a new product
Cypress.Commands.add(
  "createProduct",
  (name, description, imgUrl, price, inventory) => {
    cy.get(".ant-menu-item > :nth-child(2)").click().contains("Create Product");
    cy.get("#name").type(`${name}`);
    cy.get("#description").type(`${description}`);
    cy.get("#imgUrl").type(`${imgUrl}`);
    cy.get("#price").type(`${price}`);
    cy.get("#inventory").type(`${inventory}`);
    cy.xpath("/html/body/div[2]/div/div[2]/div/div[2]/div[3]/button[2]")
      .should("exist")
      .click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Created `${name}` Successfully!!");
      cy.get(".ant-layout-content").contains(`${name}`);
    });
  }
);

// Navigates to page and verifies text
Cypress.Commands.add("loadsPage", () => {
  cy.visit("http://localhost:3000/").contains("Productotron 3000");
});

// Confirms success message for successfully edited products
Cypress.Commands.add("successMessage", (successMessage) => {
  cy.get('*[class^="ant-message"]').contains(`${successMessage}`);
});

// Clicks Create Product button and verified Create Product text on module
Cypress.Commands.add("createProductButton", () => {
  cy.get(".ant-menu-item > :nth-child(2)").click().contains("Create Product");
});
