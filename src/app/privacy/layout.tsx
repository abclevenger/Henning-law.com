import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Henning Law Firm PLLC privacy policy. Learn how we collect, use, and protect your personal information.',
    openGraph: {
        title: 'Privacy Policy | Henning Law Firm PLLC',
        description: 'Learn how we collect, use, and protect your personal information.',
        url: 'https://henning-law.com/privacy',
    },
    alternates: {
        canonical: 'https://henning-law.com/privacy',
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
