import { SignUpForm } from "@/components/auth/SignUpForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - AuthFlow',
  description: 'Create a new AuthFlow account.',
};

export default function SignUpPage() {
  return <SignUpForm />;
}
