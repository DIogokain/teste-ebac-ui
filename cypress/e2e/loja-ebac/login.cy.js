/// <reference types="cypress" />

describe('funcionalidade: login', () => {

    beforeEach(() => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('fabianodiogo8545@gmail.com')
        cy.get('#password').type('Ambipom85#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should

    })
    it('deve exibir uma mensagem de erro quando colocar um usuario invalido', () => {
        cy.get('#username').type('fabianodogo8545@gmail.com')
        cy.get('#password').type('Ambipom85#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it('senha invalida', () => {
         cy.get('#username').type('fabianodiogo8545@gmail.com')
        cy.get('#password').type('Ambipo85#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail fabianodiogo8545@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-form > .button').should('exist')

        
    });

})
