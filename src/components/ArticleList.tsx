import React from 'react';
import Link from 'next/link';
import { Article } from '@/types/article';

interface ArticleListProps {
    articles: Article[];
}
const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div data-at="articles-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article: Article) => (
                <Link href={`/article/${article.id}`} key={article.id}>
                    <span className="block bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                            <div className="text-sm text-gray-500">
                                <span>By {article.author.username}</span>
                                <span> • </span>
                                <span>Posted on {article.publishedDate}</span>
                            </div>
                        </div>
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;
