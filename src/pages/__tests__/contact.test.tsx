import { render } from '@testing-library/react';
import ContactPage from '../contact';

describe('ContactPage', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
