import React from 'react';
import { render } from '@testing-library/react';
import RecipesPage, { getServerSideProps } from '../recipes';
import mockRecipesData from '../../data_mocks/recipes.json';

describe('RecipesPage', () => {
    it('matches snapshot', async () => {
        const { props } = await getServerSideProps(undefined);
        const { asFragment } = render(<RecipesPage {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('getServerSideProps returns correct data', async () => {
        const { props } = await getServerSideProps(undefined);
        expect(props.recipes).toEqual(mockRecipesData);
    });
});
