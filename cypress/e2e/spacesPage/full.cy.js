describe("HomePage", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("acessa \"Espaços\" no navbar", () => {
    cy.contains("a", "Espaços").click();
    cy.url().should("include", "/espacos/#list");
  });
});

describe("Pagina de Espaços", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/espacos/#list");
  });

  it("clica em \"Acessar\" e entra na pagina no espaço selecionado", () => {
    cy.get(":nth-child(2) > .entity-card__footer > .entity-card__footer--action > .button").click();
    cy.url().should("include", "/espaco/34/#info");
    cy.contains("Henri Hyatt");
  });
});
