import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - AuthFlow',
  description: 'Sign in to your AuthFlow account.',
};

export default function LoginPage() {
  return <LoginForm />;
}
