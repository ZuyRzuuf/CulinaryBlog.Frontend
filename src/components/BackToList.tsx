import React from 'react';
import Link from 'next/link';

interface BackToListProps {
    href: string;
}

const BackToList: React.FC<BackToListProps> = ({ href }) => {
    return (
        <Link href={href}>
            <span className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                </svg>
                Back to List
            </span>
        </Link>
    );
};

export default BackToList;
