'use client';

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { getPageText } from '@/translations/pages';

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = getPageText(language).services;
  const items = translations[language].categories.items;
  const enItems = translations.en.categories.items;

  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <section style={{ padding: '24px 24px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {items.map((cat, i) => (
            <Link
              key={enItems[i].label}
              href={`/providers?category=${encodeURIComponent(enItems[i].label)}`}
              style={{ backgroundColor: '#fff', borderRadius: 14, padding: '28px 24px', border: '1px solid #E0E0E0', textDecoration: 'none', display: 'block' }}
            >
              <p style={{ fontWeight: 700, fontSize: 16, color: '#03110D' }}>{cat.label}</p>
              <p style={{ marginTop: 6, fontSize: 13, color: '#A38560' }}>{cat.count}</p>
              <p style={{ marginTop: 14, fontSize: 13, fontWeight: 600, color: '#C0183F' }}>{t.viewProviders} →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
