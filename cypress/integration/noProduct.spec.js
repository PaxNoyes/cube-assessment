describe("no product test", () => {
  it("closes create product module then cancels with no data", () => {
    cy.loadsPage();
    // clicks on create product
    cy.createProductButton();
    // clicks on x to close create product module
    cy.get(".ant-modal-close-x").click();
    // clicks on create product
    cy.createProductButton();
    // Clicks on Create Product Button
    cy.get(".ant-btn-primary > span").click();
    // No Product prompt should exist
    cy.get(".ant-message-custom-content > :nth-child(2)")
      .should("exist")
      .contains("No product");
    // Clicks cancel button
    cy.get(".ant-modal-footer > :nth-child(1) > span").click();
  });
});
