'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  // useState para que no se cree un nuevo cliente en cada render
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
