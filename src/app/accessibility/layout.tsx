import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accessibility Statement',
    description: 'Henning Law Firm PLLC accessibility commitment. We strive to make our website accessible to all users.',
    openGraph: {
        title: 'Accessibility Statement | Henning Law Firm PLLC',
        description: 'Our commitment to website accessibility for all users.',
        url: 'https://henning-law.com/accessibility',
    },
    alternates: {
        canonical: 'https://henning-law.com/accessibility',
    },
};

export default function AccessibilityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
