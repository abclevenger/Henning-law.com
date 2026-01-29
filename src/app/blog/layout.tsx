import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog & Resources',
    description: 'Insights and guidance on U.S. immigration, visas, green cards, and related legal topics from Henning Law Firm PLLC.',
    openGraph: {
        title: 'Blog & Resources | Henning Law Firm PLLC',
        description: 'Insights and guidance on U.S. immigration, visas, and related legal topics.',
        url: 'https://henning-law.com/blog',
    },
    alternates: {
        canonical: 'https://henning-law.com/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
