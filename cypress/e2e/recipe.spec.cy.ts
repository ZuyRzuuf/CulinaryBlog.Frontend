describe('Recipe Page', () => {
    const recipeId = '1'; // Replace this with an actual recipe id from your mock data

    beforeEach(() => {
        cy.visit(`/recipe/${recipeId}`);
    });

    it('should display the recipe title', () => {
        cy.get('h1').should('be.visible');
    });

    it('should display the recipe author and published date', () => {
        cy.get('.text-sm.text-gray-500').should('be.visible');
    });

    it('should display the main image', () => {
        cy.get('img').should('be.visible').and('have.attr', 'src');
    });

    it('should display the ingredients section', () => {
        cy.get('h2').contains('Ingredients').should('be.visible');
        cy.get('ul.list-disc > li').should('have.length.gt', 0);
    });

    it('should display the instructions section', () => {
        cy.get('h2').contains('Instructions').should('be.visible');
        cy.get('ol.list-decimal > li').should('have.length.gt', 0);
    });

    it('should display the comments section', () => {
        cy.get('h2').contains('Comments').should('be.visible');
    });

    it('should navigate back to the Recipes page when "Back to List" is clicked', () => {
        cy.get('span').contains('Back to List').click();
        cy.url().should('include', '/recipes');
    });
});
