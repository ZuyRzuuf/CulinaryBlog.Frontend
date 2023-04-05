// components/Layout.tsx

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>PanPrzyGarach</title>
            </Head>
            <header className="bg-gray-800 text-white p-4">
                <nav>
                    <Link href="/" passHref>
                        <span className="mx-2 cursor-pointer">Home</span>
                    </Link>
                    <Link href="/recipes" passHref>
                        <span className="mx-2 cursor-pointer">Recipes</span>
                    </Link>
                    <Link href="/articles" passHref>
                        <span className="mx-2 cursor-pointer">Articles</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className="mx-2 cursor-pointer">About</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="mx-2 cursor-pointer">Contact</span>
                    </Link>
                </nav>
            </header>
            <main className="p-4">{children}</main>
            <footer className="bg-gray-800 text-white p-4">
                <p>&copy; {new Date().getFullYear()} PanPrzyGarach</p>
            </footer>
        </>
    );
};

export default Layout;
