const name = "Bob Ross";
const description = "Tree Paintings";
const imgUrl =
  "https://images-na.ssl-images-amazon.com/images/I/81UR0AaXeJL._AC_SL1500_.jpg";
const price = "$5000";
const inventory = "3";

describe("Cancellation flow", () => {
  it("cancels mid product creation", () => {
    cy.loadsPage();
    // clicks on create new product
    cy.createProductButton();
    // filling out info for a new product
    cy.get("#name").type(`${name}`);
    cy.get("#description").type(`${description}`);
    cy.get("#imgUrl").type(`${imgUrl}`);
    cy.get("#price").type(`${price}`);
    cy.get("#inventory").type(`${inventory}`);
    // clicks on cancel button
    cy.get(".ant-modal-footer > :nth-child(1) > span").click();
    // checks to ensure new product was not created with `${name}
    cy.contains("Product Catalog");
    cy.get(".ant-layout-content").contains(`${name}`).should("not.exist");
  });
});
