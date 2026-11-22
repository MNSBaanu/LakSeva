'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormShell, { Field, fieldStyle } from '@/components/FormShell';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function RegisterPage() {
  const { language } = useLanguage();
  const t = getPageText(language).register;
  const [status, setStatus] = useState<'idle' | 'required' | 'short' | 'soon'>('idle');

  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <FormShell
        submitLabel={t.submit}
        error={status === 'required' ? t.required : status === 'short' ? t.short : undefined}
        success={status === 'soon' ? t.soon : undefined}
        onSubmit={(e) => {
          e.preventDefault();
          const d = new FormData(e.currentTarget);
          const val = (k: string) => String(d.get(k) ?? '').trim();
          if (!val('name') || !val('email') || !val('password')) setStatus('required');
          else if (val('password').length < 8) setStatus('short');
          else setStatus('soon');
        }}
        footer={<>{t.haveAccount} <Link href="/login" style={{ color: '#C0183F', fontWeight: 600 }}>{t.logIn}</Link></>}
      >
        <Field label={t.name}><input name="name" autoComplete="name" style={fieldStyle} /></Field>
        <Field label={t.email}><input name="email" type="email" autoComplete="email" style={fieldStyle} /></Field>
        <Field label={t.password}><input name="password" type="password" autoComplete="new-password" style={fieldStyle} /></Field>
      </FormShell>
    </main>
  );
}
