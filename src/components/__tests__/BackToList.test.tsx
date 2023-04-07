import { render, screen } from '@testing-library/react';
import BackToList from '../BackToList';

let linkElement;
describe('BackToList', () => {
    beforeEach(() => {
        render(<BackToList href="/some-list" />);

        linkElement = screen.getByText('Back to List');
    });

    it('renders the Back to List link', () => {
        expect(linkElement).toBeInTheDocument();
    });

    it('renders the link with the correct href', () => {
        expect(linkElement.closest('a')).toHaveAttribute('href', '/some-list');
    });
});
