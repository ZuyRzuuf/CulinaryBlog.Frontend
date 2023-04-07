import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
    return (
        <Layout>
            <section className="bg-cover bg-center h-96 relative text-white" style={{ backgroundImage: 'url("path/to/hero-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold">PanPrzyGarach</h1>
                        <p className="text-xl mt-2">Discover delicious recipes and culinary inspiration</p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <h2 className="text-2xl font-bold mb-8">Featured Recipes</h2>
                {/* Add featured recipes grid or carousel here */}
            </section>

            <section className="my-16">
                <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
                {/* Add recent articles list here */}
            </section>

            <section className="my-16 bg-gray-100 p-8">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-4">Get the latest recipes, articles, and updates delivered to your inbox.</p>
                {/* Add subscription form here */}
            </section>
        </Layout>
    );
};

export default IndexPage;
