'use client';

import Link from 'next/link';
import { useLanguage, Language } from '@/context/LanguageContext';
import { translations } from '@/translations';

const langLabels: Record<Language, string> = {
  en: 'EN',
  si: 'සිං',
  ta: 'தமி',
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.services, href: '/services' },
    { label: t.providers, href: '/providers' },
    { label: t.about, href: '/about' },
    { label: t.contact, href: '/contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#F5F5F5', borderBottom: '1px solid #DCDCDC' }} className="sticky top-0 z-50">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', fontSize: 24, fontWeight: 800 }}>
          <span style={{ color: '#C0183F' }}>ලක්</span>
          <span style={{ color: '#1E5C4B' }}> Seva</span>
        </Link>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500 }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ color: '#03110D', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side: language switcher + auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

          {/* Language switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, backgroundColor: '#EBEBEB', borderRadius: 8, padding: '3px 4px' }}>
            {(['en', 'si', 'ta'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: 'none',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  backgroundColor: language === lang ? '#C0183F' : 'transparent',
                  color: language === lang ? '#fff' : '#5a5a5a',
                }}
              >
                {langLabels[lang]}
              </button>
            ))}
          </div>

          <Link href="/login" style={{ color: '#03110D', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            {t.login}
          </Link>
          <Link
            href="/register"
            style={{ backgroundColor: '#C0183F', color: '#fff', padding: '8px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
          >
            {t.getStarted}
          </Link>
        </div>
      </div>
    </nav>
  );
}
