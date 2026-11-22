'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ProviderCard from '@/components/ProviderCard';
import { providers } from '@/data/providers';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import { getPageText } from '@/translations/pages';

const inputStyle = {
  padding: '12px 16px',
  borderRadius: 10,
  border: '1px solid #D0D0D0',
  backgroundColor: '#fff',
  fontSize: 14,
  color: '#03110D',
  outline: 'none',
} as const;

export default function ProvidersList() {
  const { language } = useLanguage();
  const t = getPageText(language).providers;
  const router = useRouter();
  const params = useSearchParams();

  const q = params.get('q') ?? '';
  const location = params.get('location') ?? '';
  const category = params.get('category') ?? '';

  const [qInput, setQInput] = useState(q);
  const [locationInput, setLocationInput] = useState(location);

  const enItems = translations.en.categories.items;
  const items = translations[language].categories.items;

  const norm = (s: string) => s.trim().toLowerCase();
  const results = providers.filter(
    (p) =>
      (!category || p.service === category) &&
      (!q || norm(p.name).includes(norm(q)) || norm(p.service).includes(norm(q))) &&
      (!location || norm(p.location).includes(norm(location))),
  );

  const go = (next: { q?: string; location?: string; category?: string }) => {
    const sp = new URLSearchParams();
    if (next.q?.trim()) sp.set('q', next.q.trim());
    if (next.location?.trim()) sp.set('location', next.location.trim());
    if (next.category) sp.set('category', next.category);
    const qs = sp.toString();
    router.push(qs ? `/providers?${qs}` : '/providers');
  };

  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <section style={{ padding: '8px 24px 72px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              go({ q: qInput, location: locationInput, category });
            }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}
          >
            <input style={{ ...inputStyle, flex: 1, minWidth: 200 }} value={qInput} onChange={(e) => setQInput(e.target.value)} placeholder={t.searchPlaceholder} />
            <input style={{ ...inputStyle, width: 180 }} value={locationInput} onChange={(e) => setLocationInput(e.target.value)} placeholder={t.locationPlaceholder} />
            <select
              style={inputStyle}
              value={category}
              onChange={(e) => go({ q: qInput, location: locationInput, category: e.target.value })}
            >
              <option value="">{t.allCategories}</option>
              {enItems.map((c, i) => (
                <option key={c.label} value={c.label}>{items[i].label}</option>
              ))}
            </select>
            <button type="submit" style={{ backgroundColor: '#C0183F', color: '#fff', padding: '12px 28px', borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
              {t.searchBtn}
            </button>
          </form>

          {results.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#5a5a5a', fontSize: 15 }}>{t.noResults}</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
              {results.map((p) => (
                <ProviderCard key={p.name} p={p} reviewsLabel={t.reviews} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
