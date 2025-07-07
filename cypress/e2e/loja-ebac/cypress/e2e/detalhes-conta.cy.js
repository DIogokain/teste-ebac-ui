/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.login('fabianodiogo8545@gmail.com', 'Ambipom85#')
    });

    it('Deve alterar os detalhes da conta com sucesso', () => {

    })

})