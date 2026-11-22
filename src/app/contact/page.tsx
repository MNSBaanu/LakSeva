'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import FormShell, { Field, fieldStyle } from '@/components/FormShell';
import { useLanguage } from '@/context/LanguageContext';
import { getPageText } from '@/translations/pages';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = getPageText(language).contact;
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle');

  return (
    <main>
      <PageHeader title={t.title} subtext={t.subtext} />
      <FormShell
        submitLabel={t.send}
        error={status === 'error' ? t.required : undefined}
        success={status === 'sent' ? t.thanks : undefined}
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const d = new FormData(form);
          const ok = ['name', 'email', 'message'].every((k) => String(d.get(k) ?? '').trim());
          setStatus(ok ? 'sent' : 'error');
          if (ok) form.reset();
        }}
      >
        <Field label={t.name}><input name="name" style={fieldStyle} /></Field>
        <Field label={t.email}><input name="email" type="email" style={fieldStyle} /></Field>
        <Field label={t.message}><textarea name="message" rows={5} style={{ ...fieldStyle, resize: 'vertical' }} /></Field>
      </FormShell>
    </main>
  );
}
