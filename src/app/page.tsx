
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard'); // Redirect to dashboard to show the new layout
  // return null; // redirect will handle this
}
