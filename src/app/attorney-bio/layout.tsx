import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getAttorneyBioMetadata, parseLang } from '@/data/metadataByLang';

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    const lang = parseLang(cookieStore.get('language')?.value);
    const meta = getAttorneyBioMetadata(lang);
    return {
        ...meta,
        alternates: {
            canonical: 'https://henning-law.com/attorney-bio',
        },
    };
}

export default function AttorneyBioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
