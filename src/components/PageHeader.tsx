export default function PageHeader({ title, subtext }: { title: string; subtext?: string }) {
  return (
    <section style={{ backgroundColor: '#F5F5F5', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, color: '#03110D', margin: 0 }}>{title}</h1>
        {subtext && (
          <p style={{ marginTop: 12, fontSize: 17, color: '#5a5a5a', lineHeight: 1.75 }}>{subtext}</p>
        )}
      </div>
    </section>
  );
}
