import { render } from '@testing-library/react';
import ArticlesPage, { getServerSideProps } from '../articles';
import mockArticlesData from '../../data_mocks/articles.json';

describe('ArticlesPage', () => {
    it('matches snapshot', () => {
        const props = { articles: mockArticlesData };
        const { asFragment } = render(<ArticlesPage {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('getServerSideProps returns expected data', async () => {
        const { props } = await getServerSideProps(undefined);
        expect(props.articles).toEqual(mockArticlesData);
    });
});
