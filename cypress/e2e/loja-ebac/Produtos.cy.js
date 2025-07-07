

describe('Funcionalidades: Produtos', () => {
    beforeEach(() => {
         cy.visit('produtos/');
    
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').last().click();
        cy.get('#tab-title-description > a').should('contain', 'Descrição');

        
    });

});