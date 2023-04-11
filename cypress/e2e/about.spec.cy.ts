describe('About Page', () => {
    beforeEach(() => {
        cy.visit('/about');
    });

    it('should display the About page', () => {
        cy.contains('h1', 'About PanPrzyGarach');
    });

    it('should display Our Mission section', () => {
        cy.contains('h2', 'Our Mission');
        cy.contains('p', 'At PanPrzyGarach, our mission is to inspire and empower people to discover and create delicious recipes, explore new cuisines, and celebrate their love for food.');
    });

    it("should display the Meet the Author section", () => {
        cy.contains("h2", "Meet the Author");
        cy.contains("h3", "Author Name");
        cy.contains("p", "Author Name is a professional chef and passionate home cook with over 10 years of experience in the culinary world.");
        cy.get('img[alt="Author Name"]').should("be.visible");
    });
});
