'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '88px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: '#1E5C4B',
          color: '#fff',
          fontSize: 13,
          fontWeight: 600,
          padding: '6px 16px',
          borderRadius: 999,
          marginBottom: 24,
          letterSpacing: '0.03em',
        }}>
          {t.badge}
        </span>

        <h1 style={{ fontSize: 58, fontWeight: 800, color: '#03110D', lineHeight: 1.15, margin: 0 }}>
          {t.heading1}{' '}
          <span style={{ color: '#C0183F' }}>{t.heading2}</span>
        </h1>

        <p style={{ marginTop: 20, fontSize: 18, color: '#5a5a5a', lineHeight: 1.75, maxWidth: 600, margin: '20px auto 0' }}>
          {t.subtext}
        </p>

        <div style={{ marginTop: 36, display: 'flex', gap: 12, maxWidth: 680, margin: '36px auto 0' }}>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            style={{
              flex: 1,
              padding: '14px 20px',
              borderRadius: 10,
              border: '1px solid #D0D0D0',
              backgroundColor: '#fff',
              fontSize: 14,
              color: '#03110D',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder={t.locationPlaceholder}
            style={{
              width: 160,
              padding: '14px 20px',
              borderRadius: 10,
              border: '1px solid #D0D0D0',
              backgroundColor: '#fff',
              fontSize: 14,
              color: '#03110D',
              outline: 'none',
            }}
          />
          <button style={{
            backgroundColor: '#C0183F',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 10,
            border: 'none',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>
            {t.searchBtn}
          </button>
        </div>

        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, fontSize: 13, color: '#5a5a5a' }}>
          <span>{t.popular}</span>
          {t.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 14px',
                borderRadius: 999,
                border: '1px solid #A38560',
                color: '#03110D',
                cursor: 'pointer',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
