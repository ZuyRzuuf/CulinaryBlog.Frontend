import React from 'react';
import Layout from '../../components/Layout';

const ArticlePage = () => {
    return (
        <Layout>
            <section className="my-16">
                {/* Article Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">Amazing Article Title</h1>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>By Author Name</span>
                        <span> • </span>
                        <span>Posted on February 25, 2023</span>
                        <span> • </span>
                        <span>Category: Culinary Tips</span>
                    </div>
                </div>

                {/* Article Image */}
                <div className="mb-8">
                    <img src="path/to/article-image.jpg" alt="Article featured image" className="w-full h-96 object-cover" />
                </div>

                {/* Article Content */}
                <div className="mb-8">
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida velit id semper porta. Quisque posuere augue in lorem ullamcorper bibendum. Proin vel dui vitae odio fermentum congue. Fusce id mi id lorem ultricies consectetur at at sapien. In tempus orci justo, in bibendum urna pharetra a.
                    </p>
                    <h2 className="text-2xl font-bold mb-2">Section Title</h2>
                    <p className="mb-4">
                        Vivamus rhoncus, neque eget sagittis iaculis, mi elit rhoncus orci, non vestibulum urna justo non dolor. Proin volutpat sapien nec consectetur sagittis. Sed at congue mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu metus ut nisl tincidunt sagittis.
                    </p>
                    <p>
                        Suspendisse vitae nisi nec sapien vulputate iaculis eget eget est. Sed rhoncus tincidunt lacus, a consequat orci bibendum vel. Donec vel finibus mi, non vestibulum sem. Curabitur suscipit sapien id enim convallis, non aliquet sapien ultrices. Quisque non lorem at urna tempus consectetur.
                    </p>
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

export default ArticlePage;
