import { backHomepageCompact } from "../../commands/backHomepageCompact";

describe("Homepage compactada", () => {
  beforeEach(() => {
    cy.viewport(1000, 768);
    cy.visit("/");
  });

  it("Garante o funcionamento do home", () => {
    backHomepageCompact();
  });

  it("Acessa \"Ver todos\" de Eventos", () => {
    cy.get(":nth-child(2) > .card__right > .button").click();
    cy.url().should("include", "/eventos/");
    backHomepageCompact();
  });
  it("Acessa \"Ver todos\" de Espaços", () => {
    cy.get(":nth-child(3) > .card__right > .button").click();
    cy.url().should("include", "/espacos/");
    backHomepageCompact();
  });
  it("Acessa \"Ver todos\" de Agentes", () => {
    cy.get(":nth-child(4) > .card__right > .button").click();
    cy.url().should("include", "/agentes/");
    backHomepageCompact();
  });
  it("Acessa \"Ver todos\" de Projetos", () => {
    cy.get(":nth-child(5) > .card__right > .button").click();
    cy.url().should("include", "/projetos/");
    backHomepageCompact();
  });
});
