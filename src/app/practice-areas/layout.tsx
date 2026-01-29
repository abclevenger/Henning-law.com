import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'U.S. Immigration Practice Areas',
    description: 'Explore our immigration practice areas: work visas, green cards, family immigration, business visas, citizenship, and real estate for non-residents.',
    openGraph: {
        title: 'Practice Areas | Henning Law Firm PLLC',
        description: 'Comprehensive immigration services for families, companies, and entrepreneurs seeking to live or work in the U.S.',
        url: 'https://henning-law.com/practice-areas',
    },
    alternates: {
        canonical: 'https://henning-law.com/practice-areas',
    },
};

export default function PracticeAreasLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
