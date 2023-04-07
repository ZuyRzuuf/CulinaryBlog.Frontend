import { render, screen } from '@testing-library/react';
import RecipeCard from '../RecipeCard';

const mockRecipe = {
    id: '1',
    title: 'Test Recipe',
    imageUrl: 'test-image.jpg',
    category: { name: 'Test Category' },
    cuisine: { name: 'Test Cuisine' },
    method: { name: 'Test Method' },
};

describe('RecipeCard', () => {
    it('renders the recipe details correctly', () => {
        render(<RecipeCard recipe={mockRecipe} />);

        expect(screen.getByText(mockRecipe.title)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.category.name)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.cuisine.name)).toBeInTheDocument();
        expect(screen.getByText(mockRecipe.method.name)).toBeInTheDocument();
    });

    it('renders the link with the correct href', () => {
        render(<RecipeCard recipe={mockRecipe} />);
        const linkElement = screen.getByText(mockRecipe.title);

        expect(linkElement.closest('a')).toHaveAttribute('href', `/recipe/${mockRecipe.id}`);
    });
});
