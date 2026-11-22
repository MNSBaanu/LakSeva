import type { Provider } from '@/data/providers';

export default function ProviderCard({
  p,
  reviewsLabel,
}: {
  p: Provider;
  reviewsLabel: string;
}) {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: 14, padding: '24px 20px', border: '1px solid #E0E0E0' }}>
      <div
        style={{
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
        }}
      >
        {p.name.charAt(0)}
      </div>
      <h3 style={{ marginTop: 14, fontWeight: 700, fontSize: 16, color: '#03110D' }}>{p.name}</h3>
      <p style={{ fontSize: 13, color: '#5a5a5a', marginTop: 2 }}>{p.service}</p>
      <p style={{ fontSize: 13, color: '#5a5a5a', marginTop: 2 }}>{p.location}</p>
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 4, fontSize: 14 }}>
        <span style={{ color: '#A38560', fontWeight: 700 }}>★</span>
        <span style={{ fontWeight: 700, color: '#03110D' }}>{p.rating}</span>
        <span style={{ fontSize: 12, color: '#5a5a5a' }}>
          ({p.reviews} {reviewsLabel})
        </span>
      </div>
    </div>
  );
}
