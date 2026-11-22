'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function NotFound() {
  const { language } = useLanguage();
  const t = getPageText(language).notFound;
  return (
    <main style={{ minHeight: '50vh' }}>
      <PageHeader title={`404 — ${t.title}`} subtext={t.subtext} />
      <div style={{ textAlign: 'center', paddingBottom: 72 }}>
        <Link href="/" style={{ backgroundColor: '#C0183F', color: '#fff', padding: '12px 28px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
          {t.home}
        </Link>
      </div>
    </main>
  );
}
