import React from 'react';
import Layout from '@/components/Layout';
import { GetServerSideProps } from "next";
import { Article } from '@/types/article';
import mockArticlesData from '../data_mocks/articles.json';
import ArticleList from "@/components/ArticleList";

interface ArticleListProps {
    articles: Article[];
}

const ArticlesPage: React.FC<ArticleListProps> = ({ articles }) => {
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
                    <ArticleList articles={articles} />
                </div>

                {/* Pagination */}
                <div className="mt-8">
                    {/* Add pagination component here */}
                </div>
            </section>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps<ArticleListProps> = async () => {
    const articles = mockArticlesData;

    return {
        props: {
            articles,
        },
    };
};

export default ArticlesPage;
