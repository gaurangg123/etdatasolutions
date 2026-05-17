import { redirect } from 'next/navigation';

// Legacy dynamic route — redirect deep service URLs to the new services page.
export default function LegacyServiceSlug({ params }: { params: { slug: string } }) {
  redirect(`/services#${params.slug}`);
}
