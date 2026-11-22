import { Suspense } from 'react';
import ProvidersList from './ProvidersList';

export default function ProvidersPage() {
  return (
    <Suspense fallback={null}>
      <ProvidersList />
    </Suspense>
  );
}
