describe('Contact Page', () => {
    beforeEach(() => {
        cy.visit('/contact');
    });

    it('should display the Contact page', () => {
        cy.contains('h1', 'Contact Us');
    });

    it('should display the introduction', () => {
        cy.contains('p', "If you have any questions, suggestions, or feedback, please feel free to get in touch with us. We'd love to hear from you!");
    });

    it('should display the contact form', () => {
        cy.get('form').within(() => {
            cy.get('label[for="name"]').contains('Name');
            cy.get('input#name[type="text"]');

            cy.get('label[for="email"]').contains('Email');
            cy.get('input#email[type="email"]');

            cy.get('label[for="subject"]').contains('Subject');
            cy.get('input#subject[type="text"]');

            cy.get('label[for="message"]').contains('Message');
            cy.get('textarea#message');
        });
    });

    it('should submit the contact form', () => {
        cy.get('form').within(() => {
            cy.get('input#name[type="text"]').type('John Doe');
            cy.get('input#email[type="email"]').type('john.doe@example.com');
            cy.get('input#subject[type="text"]').type('Test Subject');
            cy.get('textarea#message').type('This is a test message.');

            cy.get('button[type="submit"]').click();
        });

        // Add assertions to check for form submission success, e.g., checking for a success message or redirection to another page.
    });
});
