describe("Homepage", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("acessa \"Projetos\" no navbar", () => {
    cy.contains("a", "Projetos").click();
    cy.url().should("include", "/projetos/");
  });
});

describe("Pagina de Projetos", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/projetos/#list");
  });

  it("clica em \"Acessar\" e entra na pagina no projeto selecionado", () => {
    cy.get(":nth-child(2) > .entity-card__footer > .entity-card__footer--action > .button").click();
    cy.url().should("include", "/projeto/21/#info");
    cy.contains("Conner Kshlerin-D'Amore");
  });
});
