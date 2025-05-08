import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=4')" }}
      data-ai-hint="vibrant cosmos"
    >
      {children}
    </main>
  );
}
