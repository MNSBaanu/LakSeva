import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#EFEFEF', borderTop: '1px solid #DCDCDC' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <span style={{ fontSize: 24, fontWeight: 800 }}>
              <span style={{ color: '#C0183F' }}>ලක්</span>
              <span style={{ color: '#1E5C4B' }}> Seva</span>
            </span>
            <p style={{ marginTop: 12, fontSize: 14, color: '#5a5a5a', maxWidth: 280, lineHeight: 1.75 }}>
              Connecting Sri Lankan communities with trusted local service providers across the island.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#03110D', marginBottom: 16 }}>Platform</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Browse Services', '/services'], ['Find Providers', '/providers'], ['Join as Provider', '/register']].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontSize: 14, color: '#5a5a5a', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#03110D', marginBottom: 16 }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['About Us', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy']].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontSize: 14, color: '#5a5a5a', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #DCDCDC', textAlign: 'center', fontSize: 13, color: '#5a5a5a' }}>
          © {new Date().getFullYear()} LakSeva. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
