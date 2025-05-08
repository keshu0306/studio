
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/login');
  // return null; // redirect will handle this
}
