'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

const stepColors = ['#C0183F', '#1E5C4B', '#A38560'];

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language].howItWorks;

  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '72px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#03110D', margin: 0 }}>{t.heading}</h2>
          <p style={{ marginTop: 8, fontSize: 15, color: '#5a5a5a' }}>{t.subtext}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {t.steps.map((s, i) => (
            <div key={s.step} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: stepColors[i],
                color: '#fff',
                fontWeight: 700,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}>
                {s.step}
              </div>
              <h3 style={{ marginTop: 20, fontSize: 18, fontWeight: 700, color: '#03110D' }}>{s.title}</h3>
              <p style={{ marginTop: 10, fontSize: 14, color: '#5a5a5a', lineHeight: 1.75 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
