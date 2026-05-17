import { redirect } from 'next/navigation';

// /work has been retired in v2 — testimonials live on /testimonials now.
export default function WorkRedirect() {
  redirect('/testimonials');
}
