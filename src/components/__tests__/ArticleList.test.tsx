// import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import ArticleList from '../ArticleList';
import { Article } from '@/types/article';

const mockArticles: Article[] = [
    {
        id: '1',
        title: 'Test Article 1',
        content: 'Test content 1',
        imageUrl: 'https://via.placeholder.com/150',
        publishedDate: '2023-04-04',
        author: { id: '1', username: 'Author 1' },
    },
    {
        id: '2',
        title: 'Test Article 2',
        content: 'Test content 2',
        imageUrl: 'https://via.placeholder.com/150',
        publishedDate: '2023-04-05',
        author: { id: '2', username: 'Author 2' },
    },
] as Article[];

describe('ArticleList', () => {
    it('renders the component', () => {
        render(<ArticleList articles={mockArticles} />);
        expect(screen.getByText(/Test Article 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Article 2/i)).toBeInTheDocument();
    });

    it('renders the correct number of articles', () => {
        render(<ArticleList articles={mockArticles} />);
        const articleElements = screen.getAllByRole('img');
        expect(articleElements.length).toEqual(mockArticles.length);
    });

    it('renders the article titles and author names', () => {
        render(<ArticleList articles={mockArticles} />);
        expect(screen.getByText(/Test Article 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Article 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Author 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Author 2/i)).toBeInTheDocument();
    });
});
