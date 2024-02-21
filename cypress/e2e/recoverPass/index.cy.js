describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("clicks the link \"Entrar\"", () => {
    cy.contains("Entrar").click();
    cy.url().should("include", "/autenticacao/");
  });
});

describe("RecoverPassword", () => {
  beforeEach(() => {
    cy.visit("/autenticacao/");
  });

  it("clicks the link \"Esqueci minha senha\", preenche o input email e click no botão \"Alterar senha\"", () => {
    cy.get("#multiple-login-recover").click();
    cy.get("#email").type("seuemail@email.com");
    cy.contains("Alterar senha").click();
  });
});
