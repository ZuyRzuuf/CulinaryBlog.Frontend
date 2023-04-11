import React from 'react';
import Layout from '@/components/Layout';
import RecipeCard from '@/components/RecipeCard';
import { GetServerSideProps } from "next";
import { Recipe } from '@/types/recipe';
import mockRecipesData from '../data_mocks/recipes.json';

interface RecipesPageProps {
    recipes: Recipe[];
}

const RecipesPage: React.FC<RecipesPageProps> = ({ recipes }) => {
    return (
        <Layout>
            <section className="my-16">
                <h1 className="text-3xl font-bold mb-8">Recipes</h1>

                {/* Search and Filter Section */}
                <div className="mb-8">
                    {/* Add search input and filter components here */}
                </div>

                {/* Recipe Grid */}
                <div data-at="recipes-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-8">
                    {/* Add pagination component here */}
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<RecipesPageProps> = async () => {
    const recipes: Recipe[] = mockRecipesData;

    return {
        props: { recipes },
    };
}

export default RecipesPage;
