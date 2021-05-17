import * as selectors from "../support/selectors.js";

const name = "Jim Butcher";
const description = "product testing";
const imgUrl =
  "https://images-na.ssl-images-amazon.com/images/I/61v6AmxQZrL._SY498_BO1,204,203,200_.jpg";
const price = "$15.99";
const inventory = "3";
const successMessage = "Successfully edited Pax";
const existingProduct = "Product A";

describe("edit a new product", () => {
  it("creates a new product & edits it", () => {
    cy.loadsPage();
    cy.createProduct(name, description, imgUrl, price, inventory);
    cy.get(selectors.productList).contains(`${name}`);
    cy.get(selectors.editButton).last().click();
    cy.get(selectors.editName).clear().type("Pax");
    cy.get(selectors.editButtonOnProductModule).click();
    cy.successMessage(successMessage);
    cy.get(selectors.editButton).last().click();
    // editing and saving with no changes
    cy.get(selectors.editButtonOnProductModule).click();
    cy.successMessage(successMessage);
  });
});

describe("edit an existing product", () => {
  it("edits an existing product", () => {
    cy.loadsPage();
    cy.get(selectors.topRowOfProductList).contains(`${existingProduct}`);
    cy.get(selectors.productA).click();
    cy.get("#price").clear({ force: true }).type("$1.25");
    cy.get(selectors.editButtonOnNewProduct).click();
    cy.get(selectors.productUpdatedMessage).contains(`${existingProduct}`);
    cy.get(selectors.productList).contains(`${existingProduct}`);
    cy.get(selectors.productACardDetails).contains("$1.25");
  });
});

// in this test I utilized a selectors file, to make the code more readable. I normally uses data-testids where I can, not css selectors,
// which I feel make the code more readable to others jumping in, and less brittle. I don't have data-testids for this challenge
// but I still utilized a selectors file to help with readability.
