describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("click no botão \"Entrar\"", () => {
    cy.contains("Entrar").click();
  });
});

describe("RegisterPage", () => {
  beforeEach(() => {
    cy.visit("/autenticacao/");
  });

  it("click no botão \"Fazer cadastro\"", () => {
    cy.contains("Fazer cadastro").click();
  });
});
