import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#F5F5F5', borderBottom: '1px solid #DCDCDC' }} className="sticky top-0 z-50">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <Link href="/" style={{ textDecoration: 'none', fontSize: 24, fontWeight: 800 }}>
          <span style={{ color: '#C0183F' }}>ලක්</span>
          <span style={{ color: '#1E5C4B' }}> Seva</span>
        </Link>

        <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500 }}>
          {['Home', 'Services', 'Providers', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
              style={{ color: '#03110D', textDecoration: 'none' }}
            >
              {item}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link href="/login" style={{ color: '#03110D', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
            Login
          </Link>
          <Link
            href="/register"
            style={{ backgroundColor: '#C0183F', color: '#fff', padding: '8px 20px', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
