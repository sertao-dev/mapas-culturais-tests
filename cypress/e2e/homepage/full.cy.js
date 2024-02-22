import { backHomepage } from "../../commands/backHomepage";

describe("Homepage", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("Garante o funcionamento do home", () => {
    backHomepage();
  });
  it("Acessa \"Ver todos\" de Oportunidades", () => {
    cy.get(":nth-child(1) > .card__right > .button").click();
    cy.url().should("include", "/oportunidades/");
    backHomepage();
  });
  it("Acessa \"Ver todos\" de Eventos", () => {
    cy.get(":nth-child(2) > .card__right > .button").click();
    cy.url().should("include", "/eventos/");
    backHomepage();
  });
  it("Acessa \"Ver todos\" de Espaços", () => {
    cy.get(":nth-child(3) > .card__right > .button").click();
    cy.url().should("include", "/espacos/");
    backHomepage();
  });
  it("Acessa \"Ver todos\" de Agentes", () => {
    cy.get(":nth-child(4) > .card__right > .button").click();
    cy.url().should("include", "/agentes/");
    backHomepage();
  });
  it("Acessa \"Ver todos\" de Projetos", () => {
    cy.get(":nth-child(5) > .card__right > .button").click();
    cy.url().should("include", "/projetos/");
    backHomepage();
  });
});
