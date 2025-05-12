import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center p-4"
    >
      <div className="absolute top-4 left-4">
        <Link href="/dashboard">
          <Button variant="outline" size="sm">
            start
          </Button>
        </Link>
      </div>
      {children}
    </main>
  );
}
