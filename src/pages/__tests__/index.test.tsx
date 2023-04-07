import { render } from '@testing-library/react';
import IndexPage from '../index';

describe('IndexPage', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<IndexPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
