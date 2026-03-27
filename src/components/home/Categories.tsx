const categories = [
  { label: 'Electrical', count: '120+ providers' },
  { label: 'Beauty & Salon', count: '200+ providers' },
  { label: 'Tutoring', count: '350+ providers' },
  { label: 'Catering', count: '90+ providers' },
  { label: 'Photography', count: '150+ providers' },
  { label: 'Cleaning', count: '180+ providers' },
  { label: 'Vehicle Repair', count: '110+ providers' },
  { label: 'Tailoring', count: '140+ providers' },
];

export default function Categories() {
  return (
    <section style={{ backgroundColor: '#EFEFEF', padding: '72px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#03110D', margin: 0 }}>Browse by Category</h2>
          <p style={{ marginTop: 8, fontSize: 15, color: '#5a5a5a' }}>Find the right service for every need</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {categories.map((cat) => (
            <div
              key={cat.label}
              style={{
                backgroundColor: '#fff',
                borderRadius: 14,
                padding: '28px 24px',
                border: '1px solid #E0E0E0',
                cursor: 'pointer',
              }}
            >
              <p style={{ fontWeight: 700, fontSize: 16, color: '#03110D' }}>{cat.label}</p>
              <p style={{ marginTop: 6, fontSize: 13, color: '#A38560' }}>{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
