import { render } from '@testing-library/react';
import AboutPage from '../about';

describe('AboutPage', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<AboutPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
