import Link from 'next/link';

export default function CallToAction() {
  return (
    <section style={{ backgroundColor: '#1E5C4B', padding: '80px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', margin: 0 }}>
          Are you a service provider?
        </h2>
        <p style={{ marginTop: 16, fontSize: 16, color: '#A8D5C2', lineHeight: 1.75 }}>
          Join LakSeva and reach thousands of customers in your community. It&apos;s free to get started.
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
            Join as Provider
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
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
