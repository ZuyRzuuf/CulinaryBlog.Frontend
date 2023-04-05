import React from 'react';
import Layout from '../components/Layout';

const ArticlesPage = () => {
    return (
        <Layout>
            <section className="my-16">
                <h1 className="text-3xl font-bold mb-8">Articles</h1>

                {/* Search Section */}
                <div className="mb-8">
                    {/* Add search input component here */}
                </div>

                {/* Article List */}
                <div>
                    {/* Add article list items here */}
                </div>

                {/* Pagination */}
                <div className="mt-8">
                    {/* Add pagination component here */}
                </div>
            </section>
        </Layout>
    );
};

export default ArticlesPage;
