import { render } from '@testing-library/react';
import ArticlePage, { getServerSideProps } from '../../article/[id]';
import mockArticlesData from '../../../data_mocks/articles.json';
import { GetServerSidePropsContext } from 'next';

describe('ArticlePage', () => {
    it('matches snapshot', () => {
        const article = mockArticlesData[0];
        const props = { article };
        const { asFragment } = render(<ArticlePage {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('getServerSideProps returns correct article', async () => {
        const articleId = mockArticlesData[0].id;
        const context: GetServerSidePropsContext = {
            params: { id: articleId },
            req: {} as any,
            res: {} as any,
            query: {},
            resolvedUrl: '',
        };

        const { props } = await getServerSideProps(context);
        expect(props.article).toEqual(mockArticlesData[0]);
    });

    it('getServerSideProps returns notFound when article is not found', async () => {
        const articleId = 'non-existent-id';
        const context: GetServerSidePropsContext = {
            params: { id: articleId },
            req: {} as any,
            res: {} as any,
            query: {},
            resolvedUrl: '',
        };

        const { notFound } = await getServerSideProps(context);
        expect(notFound).toBe(true);
    });
});
