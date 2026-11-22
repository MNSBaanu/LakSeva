import type { ReactNode, FormEvent } from 'react';

export const fieldStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 10,
  border: '1px solid #D0D0D0',
  backgroundColor: '#fff',
  fontSize: 14,
  color: '#03110D',
  outline: 'none',
} as const;

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label style={{ display: 'block', marginBottom: 16, fontSize: 13, fontWeight: 600, color: '#03110D' }}>
      <span style={{ display: 'block', marginBottom: 6 }}>{label}</span>
      {children}
    </label>
  );
}

export default function FormShell({
  onSubmit,
  error,
  success,
  submitLabel,
  children,
  footer,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  error?: string;
  success?: string;
  submitLabel: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section style={{ padding: '8px 24px 72px' }}>
      <form
        onSubmit={onSubmit}
        noValidate
        style={{ maxWidth: 460, margin: '0 auto', backgroundColor: '#fff', border: '1px solid #E0E0E0', borderRadius: 14, padding: 28 }}
      >
        {children}
        {error && <p role="alert" style={{ color: '#C0183F', fontSize: 13, marginBottom: 12 }}>{error}</p>}
        {success && <p role="status" style={{ color: '#1E5C4B', fontSize: 13, marginBottom: 12 }}>{success}</p>}
        <button type="submit" style={{ width: '100%', backgroundColor: '#C0183F', color: '#fff', padding: '12px 0', borderRadius: 10, border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          {submitLabel}
        </button>
        {footer && <p style={{ marginTop: 16, textAlign: 'center', fontSize: 13, color: '#5a5a5a' }}>{footer}</p>}
      </form>
    </section>
  );
}
