describe('Article Page', () => {
    const articleId = '1'; // Replace this with an actual article id from your mock data

    beforeEach(() => {
        cy.visit(`/article/${articleId}`);
    });

    it('should display the article title', () => {
        cy.get('h1').should('be.visible');
    });

    it('should display the article author and published date', () => {
        cy.get('.text-sm.text-gray-500').should('be.visible');
    });

    it('should display the featured image', () => {
        cy.get('img').should('be.visible').and('have.attr', 'src');
    });

    it('should display the article content', () => {
        cy.get('.prose').should('be.visible');
    });

    it('should display the comments section', () => {
        cy.get('h2').contains('Comments').should('be.visible');
    });

    it('should navigate back to the Articles page when "Back to List" is clicked', () => {
        cy.get('span').contains('Back to List').click();
        cy.url().should('include', '/articles');
    });
});
