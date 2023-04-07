import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout', () => {
    beforeEach(() => {
        render(
            <Layout>
                <div>Test Child</div>
            </Layout>
        );
    });

    it('renders navigation links', () => {
        expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
        expect(screen.getByText('Recipes').closest('a')).toHaveAttribute('href', '/recipes');
        expect(screen.getByText('Articles').closest('a')).toHaveAttribute('href', '/articles');
        expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
        expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
    });

    it('renders the child component', () => {
        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    it('renders the footer with the correct copyright text', () => {
        const currentYear = new Date().getFullYear();
        const footerText = screen.getByText(`© ${currentYear} PanPrzyGarach`);

        expect(footerText).toBeInTheDocument();
    });
});
