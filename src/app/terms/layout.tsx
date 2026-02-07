import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using the Henning Law Firm PLLC website. Review our terms of service.',
    openGraph: {
        title: 'Terms & Conditions | Henning Law Firm PLLC',
        description: 'Terms and conditions for using the Henning Law Firm website.',
        url: 'https://henning-law.com/terms',
    },
    alternates: {
        canonical: 'https://henning-law.com/terms',
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
