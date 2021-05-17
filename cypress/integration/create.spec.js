const name = "Jim Butcher";
const description = "product testing";
const imgUrl =
  "https://images-na.ssl-images-amazon.com/images/I/61v6AmxQZrL._SY498_BO1,204,203,200_.jpg";
const price = "$15.99";
const inventory = "3";

describe("creation flow", () => {
  it("fills out form and creates a product", () => {
    cy.loadsPage();
    cy.createProduct(name, description, imgUrl, price, inventory);
    // checks product list to ensure it has the  newly created product mane
    cy.get(".ant-layout-content").contains(`${name}`);
    // clicks on the last product with that name
    cy.get('span[aria-label="delete"]').last().click();
    // clicks on delete button
    cy.get('*[class^="ant-btn ant-btn-primary ant-btn-sm"]').click();
    // verifies product deletion prompt
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Product Deleted Successfully!!");
      // checks product list via product name to ensure product was deleted
      cy.get(".ant-layout-content").contains(`${name}`).should("not.exist");
    });
  });
});

// Deleted the created product at the end of the test in an effort to have a "clean slate" for the following tests. Normally I like to
// seed my own data, and tear it down at the end of tests
