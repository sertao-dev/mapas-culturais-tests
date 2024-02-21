const { confirmRecaptcha } = require("../../commands/recaptcha");
describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("click no botão \"Entrar\"", () => {
    cy.contains("Entrar").click();
    cy.url().should("include", "/autenticacao/");
  });
});

describe("RegisterPage", () => {
  beforeEach(() => {
    cy.visit("/autenticacao/");
  });

  it("click no botão \"Fazer cadastro\"", () => {
    cy.contains("Fazer cadastro").click();
    cy.url().should("include", "/autenticacao/register/");
  });

  it("click nos campos de cadastro, captcha e no botão \"Continuar\" para continuar cadastro", () => {
    cy.visit("/autenticacao/register/");
    cy.get("#email").type("fake@email.com");
    cy.get("#email").should("have.value", "fake@email.com");
    cy.get("#cpf").type("57397343473");
    cy.get("#pwd").type("Fakepassword@10");
    cy.get("#pwd").should("have.attr", "type", "password");
    cy.get(".seePassword").click({ multiple: true });
    cy.get("#pwd").should("have.value", "Fakepassword@10");
    cy.get("#pwd-check").type("Fakepassword@10");
    cy.wait(1000);
    confirmRecaptcha();
    cy.wait(1000);
    cy.contains("Continuar").click();
  });
});
