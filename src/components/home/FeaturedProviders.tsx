const providers = [
  { name: 'Kamal Perera', service: 'Electrical', location: 'Colombo', rating: 4.9, reviews: 84 },
  { name: 'Nimal Silva', service: 'Vehicle Repair', location: 'Kandy', rating: 4.8, reviews: 61 },
  { name: 'Sanduni Fernando', service: 'Beauty & Salon', location: 'Galle', rating: 5.0, reviews: 112 },
  { name: 'Ruwan Jayasinghe', service: 'Photography', location: 'Colombo', rating: 4.7, reviews: 47 },
];

export default function FeaturedProviders() {
  return (
    <section style={{ backgroundColor: '#EFEFEF', padding: '72px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#03110D', margin: 0 }}>Featured Providers</h2>
          <p style={{ marginTop: 8, fontSize: 15, color: '#5a5a5a' }}>Top-rated professionals in your area</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {providers.map((p) => (
            <div
              key={p.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: 14,
                padding: '24px 20px',
                border: '1px solid #E0E0E0',
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: '#1E5C4B',
                color: '#fff',
                fontWeight: 700,
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {p.name.charAt(0)}
              </div>
              <h3 style={{ marginTop: 14, fontWeight: 700, fontSize: 16, color: '#03110D' }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: '#5a5a5a', marginTop: 2 }}>{p.service}</p>
              <p style={{ fontSize: 13, color: '#5a5a5a', marginTop: 2 }}>{p.location}</p>
              <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
                <span style={{ color: '#A38560', fontWeight: 700 }}>★</span>
                <span style={{ fontWeight: 700, color: '#03110D' }}>{p.rating}</span>
                <span style={{ fontSize: 12, color: '#5a5a5a' }}>({p.reviews} reviews)</span>
              </div>
              <button style={{
                marginTop: 16,
                width: '100%',
                padding: '10px 0',
                borderRadius: 8,
                backgroundColor: '#C0183F',
                color: '#fff',
                border: 'none',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
