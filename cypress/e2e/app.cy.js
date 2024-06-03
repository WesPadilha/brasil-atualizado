describe('Portal COVID Testes', () => {
  beforeEach(() => {
    cy.visit('/')
  })



  

  it('deve verificar se o input de filtro está visível', () => {
    cy.get('.filter-input').should('be.visible')
  })

  it('deve digitar "Paraná" no input de filtro e depois apagar o texto', () => {
    cy.get('.filter-input').type('Paraná')
    cy.wait(1000)  // Espera explícita para os resultados carregarem
    cy.get('.filter-input').clear()
    cy.get('.filter-input').should('have.value', '')
  })

  it('deve digitar "Todos" no input de filtro', () => {
    cy.get('.filter-input').type('Todos')
    cy.wait(1000)  // Espera explícita para os resultados carregarem
  })

  it('deve abrir o menu de região e selecionar "Sul"', () => {
    cy.get('.menu-icon > :nth-child(2)').should('be.visible').click()
    cy.wait(2000) // Aguarde 2 segundos para garantir que o menu seja exibido
    cy.get('[name="region"]').should('be.visible')
    cy.get('[name="region"]').select('Sul')
    cy.wait(5000) // Aguarde 5 segundos para garantir que a ação seja processada
    
  })

  
})

describe('Testes do Mapa', () => {
  it('deve clicar em um estado e exibir sua informação', () => {
    cy.visit('/') // Verifique se a URL está correta
    cy.get('#BR-AC').click() // Clique em um estado específico
    cy.get('.tooltip').should('be.visible') // Verifique se o tooltip está visível
    
  })
})
