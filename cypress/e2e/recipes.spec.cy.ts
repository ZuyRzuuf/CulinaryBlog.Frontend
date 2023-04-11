describe('Recipes Page', () => {
    beforeEach(() => {
        cy.visit('/recipes');
    });

    it('should display the Recipes heading', () => {
        cy.get('h1').contains('Recipes').should('be.visible');
    });

    it('should display the recipe cards', () => {
        cy.get('[data-at="recipes-list"] span').should('have.length.gt', 0);
    });

    it('should display images for each recipe', () => {
        cy.get('[data-at="recipes-list"] span img').each(($img) => {
            cy.wrap($img).should('be.visible');
            cy.wrap($img).should('have.attr', 'src');
        });
    });

    it('should display titles for each recipe', () => {
        cy.get('[data-at="recipes-list"] span h2').each(($title) => {
            cy.wrap($title).should('be.visible');
        });
    });

    it('should display category, cuisine, and method for each recipe', () => {
        cy.get('[data-at="recipes-list"] span .text-sm.text-gray-500').each(($info) => {
            cy.wrap($info).should('be.visible');
        });
    });

    // Add additional test cases for search, filter, and pagination components when they are implemented
});
