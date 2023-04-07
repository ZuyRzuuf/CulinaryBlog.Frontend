import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IndexPage from "../index";

describe('IndexPage', () => {
    it('renders the hero section with title and subtitle', () => {
        render(<IndexPage />);
        const titleElement = screen.getByText(/Pan Przy Garach/i);
        const subtitleElement = screen.getByText(/Discover delicious recipes and culinary inspiration/i);

        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });

    it('renders the Featured Recipes section', () => {
        render(<IndexPage />);
        const featuredRecipesHeading = screen.getByText(/Featured Recipes/i);

        expect(featuredRecipesHeading).toBeInTheDocument();
    });

    it('renders the Recent Articles section', () => {
        render(<IndexPage />);
        const recentArticlesHeading = screen.getByText(/Recent Articles/i);

        expect(recentArticlesHeading).toBeInTheDocument();
    });

    it('renders the Subscribe to Our Newsletter section', () => {
        render(<IndexPage />);
        const subscribeHeading = screen.getByText(/Subscribe to Our Newsletter/i);
        const subscribeDescription = screen.getByText(/Get the latest recipes, articles, and updates delivered to your inbox./i);

        expect(subscribeHeading).toBeInTheDocument();
        expect(subscribeDescription).toBeInTheDocument();
    });
})
