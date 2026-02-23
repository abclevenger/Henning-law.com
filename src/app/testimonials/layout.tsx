import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Client Testimonials',
    description: 'Read testimonials from clients who have worked with Henning Law Firm on U.S. immigration and mobility matters. Past results do not guarantee future outcomes.',
    openGraph: {
        title: 'Client Testimonials | Henning Law Firm PLLC',
        description: 'Read testimonials from clients who have worked with Henning Law Firm. Past results do not guarantee future outcomes.',
        url: 'https://henning-law.com/testimonials',
    },
    alternates: {
        canonical: 'https://henning-law.com/testimonials',
    },
};

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
