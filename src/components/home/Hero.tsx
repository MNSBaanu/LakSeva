export default function Hero() {
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
          Sri Lanka&apos;s Local Service Marketplace
        </span>

        <h1 style={{ fontSize: 58, fontWeight: 800, color: '#03110D', lineHeight: 1.15, margin: 0 }}>
          Find Trusted Local Services{' '}
          <span style={{ color: '#C0183F' }}>Near You</span>
        </h1>

        <p style={{ marginTop: 20, fontSize: 18, color: '#5a5a5a', lineHeight: 1.75, maxWidth: 600, margin: '20px auto 0' }}>
          From home repairs to personal care — discover and book reliable service providers
          in your community across Sri Lanka.
        </p>

        <div style={{ marginTop: 36, display: 'flex', gap: 12, maxWidth: 680, margin: '36px auto 0' }}>
          <input
            type="text"
            placeholder="What service are you looking for?"
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
            placeholder="Location"
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
            Search
          </button>
        </div>

        <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, fontSize: 13, color: '#5a5a5a' }}>
          <span>Popular:</span>
          {['Tutoring', 'Electrical', 'Beauty', 'Catering', 'Photography'].map((tag) => (
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
