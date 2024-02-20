describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("click no botão \"Entrar\"", () => {
    cy.contains("Entrar").click();
  });
});
