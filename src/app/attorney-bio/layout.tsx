import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Norma Henning, J.D. - U.S. Immigration Attorney',
    description: 'Meet Norma Henning, J.D., founding attorney at Henning Law Firm. Former Honorary Consul of Germany in Florida with decades of experience in U.S. immigration law.',
    openGraph: {
        title: 'Norma Henning, J.D. | Henning Law Firm PLLC',
        description: 'Meet Norma Henning, J.D., founding attorney specializing in U.S. immigration for German-speaking clients.',
        url: 'https://henning-law.com/attorney-bio',
    },
    alternates: {
        canonical: 'https://henning-law.com/attorney-bio',
    },
};

export default function AttorneyBioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
