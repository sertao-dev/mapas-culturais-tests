import { backFaqPage } from "../../commands/backFaqPage";

describe("faqPage", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("a", "Dúvidas frequentes").click();
  });

  it("Garante que as opções do menu 'Dúvidas Frequentes' sejam clicáveis", () => {
    const url = [
      "https://redesign.testes.map.as/perguntas-frequentes/cadastro/",
      "https://redesign.testes.map.as/perguntas-frequentes/IntroducaoMapa/",
      "https://redesign.testes.map.as/perguntas-frequentes/inscricao/"
    ];

    url.forEach(url => {
      cy.get(`.faq__frequent > [href="${url}"]`).click();
      backFaqPage();
    });

    url.forEach(url => {
      cy.get(`.faq__links > [href="${url}"]`).click();
      backFaqPage();
    });
  });
});
