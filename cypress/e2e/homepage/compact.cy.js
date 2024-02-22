describe("Homepage compactada", () => {
  beforeEach(() => {
    cy.viewport(1000, 768);
    cy.visit("/");
  });

  it("Garante o funcionamento do home", () => {
    cy.get(".mc-header-menu__btn-mobile").click();
    cy.contains(".mc-header-menu__itens a", "Home").click();
    cy.url().should("include", "");
  });
});
