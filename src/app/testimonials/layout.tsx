import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Client Testimonials',
    description: 'Read testimonials from clients who successfully navigated U.S. immigration with Henning Law Firm. Real stories of visa approvals, green cards, and citizenship.',
    openGraph: {
        title: 'Client Testimonials | Henning Law Firm PLLC',
        description: 'Read testimonials from clients who successfully navigated U.S. immigration with Henning Law Firm.',
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
