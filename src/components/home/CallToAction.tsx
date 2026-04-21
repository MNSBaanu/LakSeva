'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function CallToAction() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section style={{ backgroundColor: '#1E5C4B', padding: '80px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', margin: 0 }}>
          {t.heading}
        </h2>
        <p style={{ marginTop: 16, fontSize: 16, color: '#A8D5C2', lineHeight: 1.75 }}>
          {t.subtext}
        </p>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 16 }}>
          <Link
            href="/register"
            style={{
              backgroundColor: '#C0183F',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            {t.joinBtn}
          </Link>
          <Link
            href="/services"
            style={{
              border: '1px solid rgba(255,255,255,0.5)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 10,
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            {t.browseBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
