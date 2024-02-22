describe("Projeto", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Garante que o projeto seja clicável", () => {
    cy.get(".mc-header-menu__btn-mobile").click();
    cy.contains(".mc-header-menu__itens a", "Projetos").click();
    cy.url().should("include", "projetos");
  });
});
