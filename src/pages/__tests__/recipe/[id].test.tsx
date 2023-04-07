import { render } from '@testing-library/react';
import RecipePage, { getServerSideProps } from '../../recipe/[id]';
import mockRecipesData from '../../../data_mocks/recipes.json';
import { GetServerSidePropsContext } from 'next';

describe('RecipePage', () => {
    it('matches snapshot', () => {
        const recipe = mockRecipesData[0];
        const props = { recipe: recipe };
        const { asFragment } = render(<RecipePage {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('getServerSideProps returns correct recipe', async () => {
        const recipeId = mockRecipesData[0].id;
        const context: GetServerSidePropsContext = {
            params: { id: recipeId },
            req: {} as any,
            res: {} as any,
            query: {},
            resolvedUrl: '',
        };

        const { props } = await getServerSideProps(context);
        expect(props.recipe).toEqual(mockRecipesData[0]);
    });

    it('getServerSideProps returns notFound when recipe is not found', async () => {
        const recipeId = 'non-existent-id';
        const context: GetServerSidePropsContext = {
            params: { id: recipeId },
            req: {} as any,
            res: {} as any,
            query: {},
            resolvedUrl: '',
        };

        const { notFound } = await getServerSideProps(context);
        expect(notFound).toBe(true);
    });
});
