'use client';

import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = getPageText(language).privacy;
  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <section style={{ padding: '8px 24px 72px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {t.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#03110D' }}>{s.heading}</h2>
              <p style={{ marginTop: 8, fontSize: 15, color: '#5a5a5a', lineHeight: 1.8 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
