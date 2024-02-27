describe("Oportunidade", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Garante que o oportunidades seja clicável, permite digitar no campo de busca e navega para uma URL específica", () => {
    cy.get(".mc-header-menu__btn-mobile").click();
    cy.contains(".mc-header-menu__itens a", "Oportunidades").click();
    cy.url().should("include", "/oportunidades");
    cy.get(".search-filter__actions--form-input").type("teste");
    // acessaria a URL desejada
    cy.visit("https://redesign.testes.map.as/oportunidade/298/#info");
  });
});
