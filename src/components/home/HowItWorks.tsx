const steps = [
  {
    step: '01',
    title: 'Search a Service',
    description: 'Browse categories or search for the exact service you need in your area.',
    color: '#C0183F',
  },
  {
    step: '02',
    title: 'Choose a Provider',
    description: 'Compare profiles, ratings, and reviews to find the best local provider.',
    color: '#1E5C4B',
  },
  {
    step: '03',
    title: 'Book & Relax',
    description: 'Confirm your booking in seconds and let the provider handle the rest.',
    color: '#A38560',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '72px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#03110D', margin: 0 }}>How It Works</h2>
          <p style={{ marginTop: 8, fontSize: 15, color: '#5a5a5a' }}>Get started in three simple steps</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {steps.map((s) => (
            <div key={s.step} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: s.color,
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
