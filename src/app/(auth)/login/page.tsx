
import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - STAR-LORD', // Updated title
  description: 'Log in to your STAR-LORD account.', // Updated description
};

export default function LoginPage() {
  return <LoginForm />;
}
