import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about U.S. immigration, visas, green cards, and working with Henning Law Firm PLLC.',
    openGraph: {
        title: 'FAQs | Henning Law Firm PLLC',
        description: 'Find answers to common questions about U.S. immigration, visas, and our services.',
        url: 'https://henning-law.com/faqs',
    },
    alternates: {
        canonical: 'https://henning-law.com/faqs',
    },
};

export default function FAQsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
