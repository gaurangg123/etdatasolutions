import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '404 — Page Not Found' };

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <div className="text-7xl font-bold grad-text">404</div>
      <h1 className="mt-4 text-2xl font-semibold">We couldn’t find that page.</h1>
      <p className="mt-2 text-ink-600 max-w-md mx-auto">
        The link may be broken, or the page may have moved. Try heading back to the homepage.
      </p>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
