describe('Portal COVID Testes - Filtro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve verificar se o input de filtro está visível', () => {
    cy.get('.filter-input').should('be.visible')
   
  })

  it('deve digitar "Paraná" no input de filtro e depois apagar o texto', () => {
    cy.get('.filter-input').type('Paraná')
    cy.screenshot('filter-input-parana-typed')
    cy.wait(5000) 
    cy.screenshot('filter-input-parana-typed')
    cy.get('.filter-input').clear()
    cy.get('.filter-input').should('have.value', '')
   
  })

  it('deve digitar "Todos" no input de filtro', () => {
    cy.get('.filter-input').type('Todos')
    cy.wait(5000) 
    cy.screenshot('filter-input-todos-typed')
  })
})

describe('Portal COVID Testes - Menu de Região', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve abrir o menu de região e selecionar "Sul"', () => {
    cy.get('.menu-icon > :nth-child(2)').should('be.visible').click()
    cy.wait(3000) 
    
    cy.get('[name="region"]').should('be.visible')
    
    cy.get('[name="region"]').select('Sul')
    cy.wait(6000) 
    cy.screenshot('region-sul-selected')
  })

  it('deve abrir o menu de região e selecionar "Norte"', () => {
    cy.get('.menu-icon > :nth-child(2)').should('be.visible').click()
    cy.wait(3000)
    
    cy.get('[name="region"]').should('be.visible')
   
    cy.get('[name="region"]').select('Norte')
    cy.wait(6000)
    cy.screenshot('region-norte-selected')
  })

  it('deve abrir o menu de região e selecionar "Centro-Oeste"', () => {
    cy.get('.menu-icon > :nth-child(2)').should('be.visible').click()
    cy.wait(3000)
    
    cy.get('[name="region"]').should('be.visible')
    
    cy.get('[name="region"]').select('Centro-Oeste')
    cy.wait(6000)
    cy.screenshot('region-centro-oeste-selected')
  })
})

describe('Portal COVID Testes - Interação com o Mapa', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve clicar em um estado no mapa e exibir sua informação', () => {
    cy.get('#BR-AC').click()
    cy.wait(5000) 
    cy.screenshot('map-state-AC-clicked')
    cy.get('.tooltip').should('exist') 
    cy.get('.tooltip').should('be.visible')
  })

  it('deve clicar em São Paulo no mapa e exibir sua informação', () => {
    cy.get('#BR-SP').click()
    cy.wait(5000)
    cy.screenshot('map-state-SP-clicked')
    cy.get('.tooltip').should('exist') 
    cy.get('.tooltip').should('be.visible') 
   
  })

  it('deve clicar no Rio de Janeiro no mapa e exibir sua informação', () => {
    cy.get('#BR-RJ').click()
    cy.wait(5000) 
    cy.screenshot('map-state-RJ-clicked')
    cy.get('.tooltip').should('exist') 
    cy.get('.tooltip').should('be.visible') 
   
  })

 
  it('deve clicar no Minas Gerais no mapa e exibir sua informação', () => {
    cy.get('#BR-MG').click()
    cy.wait(3000)
    cy.screenshot('map-state-MG-clicked')
    cy.get('.tooltip').should('exist')
    cy.get('.tooltip').should('be.visible')
    
  })

  it('deve clicar no Bahia no mapa e exibir sua informação', () => {
    cy.get('#BR-BA').click()
    cy.wait(5000)
    cy.screenshot('map-state-BA-clicked')
    cy.get('.tooltip').should('exist')
    cy.get('.tooltip').should('be.visible')
   
  })
})
