describe("Homepage", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("Garante o funcionamento do home", () => {
    cy.contains("a", "Home").click();
    cy.url().should("include", "");
  });
});
