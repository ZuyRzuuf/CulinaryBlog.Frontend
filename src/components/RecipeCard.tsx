import React from 'react';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <Link href={`/recipe/${recipe.id}`}>
            <span className="block bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                    <div className="text-sm text-gray-500">
                        <span>{recipe.category.name}</span>
                        <span> • </span>
                        <span>{recipe.cuisine.name}</span>
                        <span> • </span>
                        <span>{recipe.method.name}</span>
                    </div>
                </div>
            </span>
        </Link>
    );
};

export default RecipeCard;
