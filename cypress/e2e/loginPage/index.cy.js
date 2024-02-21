const { confirmRecaptcha } = require("../../commands/recaptcha");

describe("Loginpage", () => {
  beforeEach(() => {
    cy.visit("/autenticacao/");

    cy.intercept("POST", "https://www.google.com/recaptcha/api2/userverify", (req) => {
      req.reply({ captchaPassed: true });
    });
  });

  it("Verifica se é possivel logar com email e senha", () => {
    cy.get("input[id='email']").type("Adm@local");
    cy.get("input[id='password']").type("mapas123");
    confirmRecaptcha();
    cy.wait(1000);
    cy.get("button[type='submit']").click();
  });

  it("Verifica se é possivel logar com cpf e senha", () => {
    cy.get("input[id='email']").type("12345678902");
    cy.get("input[id='password']").type("mapas123");
    confirmRecaptcha();
    cy.wait(1000);
    cy.get("button[type='submit']").click();
  });

  it("Garantir que se as informações estiverem incorretas o usuário será avisado sobre", () => {
    cy.get("input[id='email']").type("Adm@local");
    cy.get("input[id='password']").type("mapas123");
    confirmRecaptcha();
    cy.wait(1000);
    cy.get("button[type='submit']").click();
    cy.contains("Usuário ou senha inválidos.");
  });

  it("Garante que o click no captcha seja obrigatório", () => {
    cy.get("input[id='email']").type("Adm@local");
    cy.get("input[id='password']").type("mapas123");
    cy.get("button[type='submit']").click();
    cy.contains("Captcha incorreto, tente novamente!");
  });

  it("Garante que o icone de visulização de senha funciona", () => {
    cy.get("input[id='password']").type("mapas123");
    cy.get(".seePassword").click();
    cy.get("input[id='password']").should("have.attr", "type", "text");
    cy.get("input[id='password']").should("have.value", "mapas123");
  });

  it("Garante que o botão de esqueci minha senha seja clicável", () => {
    cy.get("#multiple-login-recover").click();
  });

  it("Garante que após o clique no botão de esqueci minha senha, seja possivel alterar a senha", () => {
    cy.get("#multiple-login-recover").click();
    cy.contains("Alteração de senha");
    cy.get("input[id='email']").type("Adm@local");
  });
});
