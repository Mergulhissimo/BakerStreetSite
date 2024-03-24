/// <reference types="Cypress" />

describe('BAKER STREET TESTS (TESTS hehe)', function() {

  this.beforeEach(() => {
    cy
      .visit('../index.html')
    })

    it('Teste do botão skills', () => {
      cy
      .get('[href="#skills"]')
      .click()
      cy
      .get('[class="h3 Maior"]')
      .first()
      .should('contain',"QA/TESTER")
    })
  
})