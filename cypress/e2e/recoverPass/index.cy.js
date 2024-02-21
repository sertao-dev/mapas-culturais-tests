describe("RecoverPassword", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("clicks the link \"Entrar\"", () => {
    cy.contains("Entrar").click();
  });

  it("clicks the link \"Esqueci minha senha\"", () => {
    cy.contains("Entrar").click();
    cy.get("#multiple-login-recover").click();
  });
});
