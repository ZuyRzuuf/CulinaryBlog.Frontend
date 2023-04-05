// pages/recipe/[id].tsx
import React from 'react';
import Layout from '../../components/Layout';

const RecipePage = () => {
    return (
        <Layout>
            <section className="my-16">
                {/* Recipe Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Delicious Recipe Title</h1>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>By Author Name</span>
                        <span> • </span>
                        <span>Posted on February 25, 2023</span>
                        <span> • </span>
                        <span>Category: Desserts</span>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                    <img src="path/to/main-image.jpg" alt="Main recipe image" className="w-full h-96 object-cover mb-4" />
                    <div className="flex space-x-2">
                        <img src="path/to/thumbnail-1.jpg" alt="Thumbnail 1" className="w-24 h-24 object-cover" />
                        <img src="path/to/thumbnail-2.jpg" alt="Thumbnail 2" className="w-24 h-24 object-cover" />
                        <img src="path/to/thumbnail-3.jpg" alt="Thumbnail 3" className="w-24 h-24 object-cover" />
                    </div>
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                    <ul className="list-disc pl-8">
                        <li>1 cup all-purpose flour</li>
                        <li>1/2 cup unsalted butter, softened</li>
                        <li>1/2 cup granulated sugar</li>
                        <li>1 large egg</li>
                        <li>1 teaspoon vanilla extract</li>
                    </ul>
                </div>

                {/* Instructions */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                    <ol className="list-decimal pl-8">
                        <li>Preheat oven to 350°F (180°C).</li>
                        <li>In a large bowl, cream together butter and sugar until smooth.</li>
                        <li>Add the egg and vanilla extract, and mix well.</li>
                        <li>Gradually stir in the flour, mixing until just combined.</li>
                        <li>Drop dough by rounded tablespoons onto a parchment-lined baking sheet.</li>
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

export default RecipePage;
