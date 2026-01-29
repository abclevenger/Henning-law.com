import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact Henning Law Firm for U.S. immigration consultations. Offices in Tampa and Minneapolis. Call (239) 821-6504 or submit our contact form.',
    openGraph: {
        title: 'Contact | Henning Law Firm PLLC',
        description: 'Contact Henning Law Firm for U.S. immigration consultations. Offices in Tampa and Minneapolis.',
        url: 'https://henning-law.com/contact',
    },
    alternates: {
        canonical: 'https://henning-law.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
