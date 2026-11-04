describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '11')

        cy.verificarMensagemNoToast('Transferência realizada!')

    })

    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token ', () => {
        cy.realizarTransferencia('João da Silva', 'Maria Oliveira', '5001')

        cy.verificarMensagemNoToast('Saldo insuficiente para realizar a transferência.')

    })
})