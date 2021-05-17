const name = "Delete Me";
const description = "I'm deleting this for testing";
const imgUrl =
  "https://www.exterro.com/images/uploads/blogPosts/Preserve-or-Delete-Meme.jpg";
const price = "$432.10";
const inventory = "0";

describe("deletion flow", () => {
  it("creates a new product and deletes it", () => {
    cy.loadsPage();
    // creates a new product passing in the specified variables
    cy.createProduct(name, description, imgUrl, price, inventory);
    //checking the product list to ensure the new product named "Delete Me" exsts
    cy.get(".ant-layout-content").contains(`${name}`);
    // clicking Delete
    cy.get('span[aria-label="delete"]').last().click();
    // prompt confirming you want to delete this product
    cy.get('*[class^="ant-popover-message-title"]').contains(
      "Are you sure you'd like to delete this product"
    );
    // clicking cancel and not deleting the product
    cy.get('*[class^="ant-btn ant-btn-sm"]').click();
    //checking the product list to ensure the new product named "Delete Me" exsts
    cy.get(".ant-layout-content").contains(`${name}`);
    // clicking Delete
    cy.get('span[aria-label="delete"]').last().click();
    // confirm you want to delete product
    cy.get('*[class^="ant-btn ant-btn-primary ant-btn-sm"]').click();
    // prompt confirming successful deletion of product
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Product Deleted Successfully!!");
      // checking product list to ensure "Delete Me" doesn't exist
      cy.get(".ant-layout-content").contains(`${name}`).should("not.exist");
    });
  });
});

// My tests look for the last created product named "Delete Me", simply because I don't have control of test data here, so if it failed
// after the creation and didn't delete, when I ran it again there'd already be a "Delete Me", so I want to ensure it's deleting
// what I expect. If I had the ability to control my test data this wouldn't be needed, as well as if I could use test-ids.
