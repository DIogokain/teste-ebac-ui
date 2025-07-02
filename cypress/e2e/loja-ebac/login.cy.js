/// <reference types="cypress" />

describe('funcionalidade: login', () => {

    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('fabianodiogo8545@gmail.com')
        cy.get('#password').type('Ambipom85#')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should

    })

})
