import React from 'react';
import Layout from '@/components/Layout';
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from 'next';
import { Recipe } from '@/types/recipe';
import mockRecipesData from '@/data_mocks/recipes.json';
import BackToList from "@/components/BackToList";

interface RecipePageProps {
    recipe: Recipe;
}

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => {
    return (
        <Layout>
            <section className="my-16">
                <BackToList href="/recipes" />

                {/* Recipe Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">{recipe.title}</h1>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>By {recipe.author.username}</span>
                        <span> • </span>
                        <span>Posted on {recipe.publishedDate}</span>
                        <span> • </span>
                        <span>Category: {recipe.category.name}</span>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                    <img
                        src={recipe.imageUrl}
                        alt={`Main image for ${recipe.title}`}
                        className="w-full h-96 object-cover mb-4"
                    />
                    {/* Add thumbnail images if needed */}
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                    <ul className="list-disc pl-8">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.name}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                    <ol className="list-decimal pl-8">
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>

                {/* Comments */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    {/* Add your comments component here */}
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<RecipePageProps> = async (
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<RecipePageProps>> => {
    const recipeId = context.params?.id;
    const recipe = mockRecipesData.find((recipe) => recipe.id === recipeId);

    if (!recipe) {
        return {
            notFound: true,
        };
    }

    return {
        props: { recipe },
    };
};

export default RecipePage;
