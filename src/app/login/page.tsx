'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormShell, { Field, fieldStyle } from '@/components/FormShell';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function LoginPage() {
  const { language } = useLanguage();
  const t = getPageText(language).login;
  const [status, setStatus] = useState<'idle' | 'error' | 'soon'>('idle');

  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <FormShell
        submitLabel={t.submit}
        error={status === 'error' ? t.required : undefined}
        success={status === 'soon' ? t.soon : undefined}
        onSubmit={(e) => {
          e.preventDefault();
          const d = new FormData(e.currentTarget);
          const ok = ['email', 'password'].every((k) => String(d.get(k) ?? '').trim());
          setStatus(ok ? 'soon' : 'error');
        }}
        footer={<>{t.noAccount} <Link href="/register" style={{ color: '#C0183F', fontWeight: 600 }}>{t.signUp}</Link></>}
      >
        <Field label={t.email}><input name="email" type="email" autoComplete="email" style={fieldStyle} /></Field>
        <Field label={t.password}><input name="password" type="password" autoComplete="current-password" style={fieldStyle} /></Field>
      </FormShell>
    </main>
  );
}
