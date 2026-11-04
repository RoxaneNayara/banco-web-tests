describe('Login', () => {
  beforeEach(() => {
      cy.visit('/')
    })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisValidas()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve papresentar mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalidas()

    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})