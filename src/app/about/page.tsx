'use client';

import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = getPageText(language).about;
  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <section style={{ padding: '8px 24px 72px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {t.body.map((para) => (
            <p key={para} style={{ fontSize: 16, color: '#03110D', lineHeight: 1.85, marginBottom: 20 }}>{para}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
