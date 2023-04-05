import React from 'react';
import Layout from '../components/Layout';

const RecipesPage = () => {
    return (
        <Layout>
            <section className="my-16">
                <h1 className="text-3xl font-bold mb-8">Recipes</h1>

                {/* Search and Filter Section */}
                <div className="mb-8">
                    {/* Add search input and filter components here */}
                </div>

                {/* Recipe Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Add recipe cards here */}
                </div>

                {/* Pagination */}
                <div className="mt-8">
                    {/* Add pagination component here */}
                </div>
            </section>
        </Layout>
    );
};

export default RecipesPage;
