import React from 'react';
import Layout from '@/components/Layout';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Article } from '@/types/article';
import mockArticlesData from '@/data_mocks/articles.json';

interface ArticlePageProps {
    article: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
    return (
        <Layout>
            <section className="my-16">
                {/* Article Image */}
                <div className="mb-8">
                    <img
                        src={article.imageUrl}
                        alt={`Featured image for ${article.title}`}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Article Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">{article.title}</h1>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>By {article.author.username}</span>
                        <span> • </span>
                        <span>Posted on {article.publishedDate}</span>
                        <span> • </span>
                        <span>Tags: {article.tags.map((tag, index) => (
                            <span key={tag.id}>{tag.name}{index !== article.tags.length - 1 && ', '}</span>
                        ))}</span>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mb-8 prose">
                    <p>{article.content}</p>
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

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async (
    context: GetServerSidePropsContext
) => {
    const articleId = context.params?.id;
    const article = mockArticlesData.find((article) => article.id === articleId);

    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: { article },
    };
};

export default ArticlePage;
