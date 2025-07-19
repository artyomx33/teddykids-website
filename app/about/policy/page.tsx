// ---------------------------------------------------------------------------
// NOTE: Phase-1 SSR migration - FINAL CONVERSION (4/4)
// This page was previously a client component with interactive features:
// - Accordion state management (open/close sections)
// - Language context integration for translations
// - Dynamic document links
//
// Now it's a server component that statically renders the shell with proper
// SEO metadata, while delegating all interactive features to PolicyPageClient.
// ---------------------------------------------------------------------------

export const dynamic = 'force-static';

import type { Metadata } from 'next';
import PolicyPageClient from './PolicyPageClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Policies & Documents | Teddy Kids',
  description: 'Access Teddy Kids policies, GGD inspection reports, and important documents. Our transparent approach to childcare keeps you informed and confident.',
  keywords: 'teddy kids policies, childcare documents, GGD reports, daycare regulations, preschool policy documents',
};

export default function PolicyPage() {
  return <PolicyPageClient />;
}
