import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <Layout>
            {/* Introduction Section */}
            <section className="bg-cover bg-center h-96 relative text-white" style={{ backgroundImage: 'url("path/to/about-image.jpg")' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center">
                    <div>
                        <h1 className="text-4xl font-bold">About PanPrzyGarach</h1>
                        <p className="text-xl mt-2">Learn more about our culinary journey and mission</p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="my-16">
                <h2 className="text-2xl font-bold mb-8">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                    At PanPrzyGarach, our mission is to inspire and empower people to discover and create delicious recipes, explore new cuisines, and celebrate their love for food. We strive to provide our visitors with high-quality content, including innovative recipes, informative articles, and expert tips on cooking and baking.
                </p>
            </section>

            {/* Author's Biography */}
            <section className="my-16">
                <h2 className="text-2xl font-bold mb-8">Meet the Author</h2>
                <div className="flex items-center">
                    <img src="path/to/author-image.jpg" alt="Author Name" className="w-32 h-32 rounded-full mr-8" />
                    <div>
                        <h3 className="text-xl font-bold">Author Name</h3>
                        <p className="text-lg leading-relaxed mt-4">
                            Author Name is a professional chef and passionate home cook with over 10 years of experience in the culinary world. With a love for creating innovative recipes and exploring new flavors, Author Name started PanPrzyGarach to share their culinary knowledge and inspire others to embark on their own culinary adventures.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AboutPage;
