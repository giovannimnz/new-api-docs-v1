import { i18n } from '@/lib/i18n';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

/**
 * Fallback redirect for `/`.
 *
 * Uses the Host header from the request to build an external-facing redirect
 * URL, so Apache-proxied requests don't redirect to localhost:3003.
 */
export default async function RootPage() {
  const hdrs = await headers();
  const host = hdrs.get('host') || 'router.atius.com.br';
  redirect(`https://${host}/${i18n.defaultLanguage}`);
}
