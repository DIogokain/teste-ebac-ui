/// <reference types="cypress" />

const { da } = require('@faker-js/faker');
const perfil = require('../../fixtures/Perfil.json')

describe('funcionalidade: login', () => {

    beforeEach(() => {
         cy.visit('minha-conta/')
    });
    afterEach(() => {
      
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
    it('Deve fazer login com sucesso - Usando massa de dados', () => {
          cy.get('#username').type(perfil.Usuario)
        cy.get('#password').type(perfil.Senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should
    });
      it('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('Perfil').then((dados) => {
        cy.get('#username').type(dados.Usuario)
        cy.get('#password').type(dados.Senha, {log: false}) // log: false para não exibir a senha no log do Cypress
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should

        })


      })   
it.only('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.Arquivo("fabianodiogo8545@gmail.com", "Ambipom85#")
          cy.get('.page-title').should('contain', 'Minha conta') // ou outro texto esperado
})

      })
