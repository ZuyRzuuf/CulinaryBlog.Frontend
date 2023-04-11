describe('Index Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should display the Index page', () => {
        cy.contains('h1', 'Pan Przy Garach');
        cy.contains('p', 'Discover delicious recipes and culinary inspiration');
    });

    it('should display Featured Recipes section', () => {
        cy.contains('h2', 'Featured Recipes');
    });

    it('should display Recent Articles section', () => {
        cy.contains('h2', 'Recent Articles');
    });

    it('should display Subscribe to Our Newsletter section', () => {
        cy.contains('h2', 'Subscribe to Our Newsletter');
        cy.contains('p', 'Get the latest recipes, articles, and updates delivered to your inbox.');
    });
});
