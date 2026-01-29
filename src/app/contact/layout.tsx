import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getContactMetadata, parseLang } from '@/data/metadataByLang';

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    const lang = parseLang(cookieStore.get('language')?.value);
    const meta = getContactMetadata(lang);
    return {
        ...meta,
        alternates: {
            canonical: 'https://henning-law.com/contact',
        },
    };
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
