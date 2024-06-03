const { type } = require("@testing-library/user-event/dist/type")

describe('Portal COVID Testes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve digitar "Paraná", apagar e depois digitar "Todos"', () => {
    // Verifica se o input de filtro está visível
    cy.get('.filter-input').should('be.visible')

    // Digita "Paraná"
    cy.get('.filter-input').type('Paraná')
    cy.wait(1000)  // Espera explícita para os resultados carregarem
    

    // Apaga o texto
    cy.get('.filter-input').clear()
    

    // Verifica se o campo de input está vazio
    cy.get('.filter-input').should('have.value', '')

    // Digita "Todos"
    cy.get('.filter-input').type('Todos')
    cy.wait(1000)  // Espera explícita para os resultados carregarem

    cy.get('[name="region"]')
    

    
  })


  describe('Portal COVID Testes', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('deve clicar em um ponto do mapa e verificar informações', () => {
      // Espera que o mapa carregue
      cy.get('#map').should('be.visible')
  
      // Clica no primeiro ponto do mapa
      cy.get('svg g circle').first().click()
      cy.screenshot('mapa-ponto-clicado')  // Tira uma screenshot após clicar no ponto
  
      // Verifica se a informação do popup foi exibida
      cy.get('.leaflet-popup-content').should('be.visible').and('contain', 'Informação Esperada')
    })
  })
  
})
    



