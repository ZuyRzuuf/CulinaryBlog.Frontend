describe('Articles Page', () => {
    beforeEach(() => {
        cy.visit('/articles');
    });

    it('should display the page title', () => {
        cy.get('h1').contains('Articles');
    });

    it('should display search section', () => {
        // Add assertions to check for the search input component presence
        // For example, if the search input has a specific class or id, check for its existence
    });

    it('should display article list', () => {
        cy.get('[data-at="articles-list"] span').should('have.length.gt', 0);
    });

    it('should display images for each article', () => {
        cy.get('[data-at="articles-list"] span img').each(($img) => {
            cy.wrap($img).should('be.visible');
            cy.wrap($img).should('have.attr', 'src');
        });
    });

    it('should display titles for each article', () => {
        cy.get('[data-at="articles-list"] span h2').each(($title) => {
            cy.wrap($title).should('be.visible');
        });
    });

    it('should display author and published date for each article', () => {
        cy.get('[data-at="articles-list"] span .text-sm.text-gray-500').each(($info) => {
            cy.wrap($info).should('be.visible');
            cy.wrap($info).contains('By ');
            cy.wrap($info).contains('Posted on ');
        });
    });

    it('should display pagination', () => {
        // Add assertions to check for the pagination component presence
        // For example, if the pagination has a specific class or id, check for its existence
    });
});
