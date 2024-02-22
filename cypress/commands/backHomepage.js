function backHomepage () {
  cy.contains("a", "Home").click({ force: true });
  cy.url().should("include", "");
}

module.exports = { backHomepage };
