# Phase 1 – Quick-Win Static Conversion Plan  
Target pages → **`/about`, `/apie`, `/accepted`, `/about/policy`**  
Branch → **`droid/ssr-infrastructure-fix`**  

---

## 0 · Overview

| Page | Current rendering | Target rendering | Key action | Est. time |
|------|-------------------|------------------|------------|-----------|
| /about (`app/about/page.tsx`) | CSR wrapper, no `"use client"` but imports client component | SSG (`dynamic='force-static'`) | Drop wrapper; keep tiny client section | 0.5 h |
| /apie (`app/apie/page.tsx`) | **Huge** component flagged `"use client"` (state, audio, confetti) | SSG shell + `ApiePlaygroundClient` | Extract interactive bits | 1.5 h |
| /accepted (`app/accepted/page.tsx`) | `"use client"` + Suspense, hooks, confetti | SSG shell + `AcceptedPageClient` | Move logic to client component | 1.5 h |
| /about/policy (`app/about/policy/page.tsx`) | `"use client"` + accordion state | SSG shell + `PolicyContentClient` | Extract accordion | 1 h |

_Total ≈ **4.5 h** (buffer included)._

---

### Global Checklist

1. Remove `"use client"` from each `page.tsx`.  
2. Add `export const dynamic = 'force-static';` (SSG flag).  
3. Extract any React hooks / browser API code into `*Client.tsx` with `"use client"`.  
4. Ensure default export is a **Server Component**.  
5. Verify rendered HTML (`curl`) contains meaningful `<h1>` text.  
6. Commit **one page per commit** for painless rollback.

---

## 1 · Page-by-Page Guide

### 1.1  `/about`  (`app/about/page.tsx`)

• Current structure (abridged):

```tsx
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = { /* ✓ already present */ };

export default function AboutPage() {
  return <AboutPageClient />;
}
```

• Target structure:

```tsx
// server component
export const dynamic = 'force-static';
import type { Metadata } from 'next';
import AboutSectionClient from './AboutSectionClient';  // ← renamed, still client
import AboutCopy from './AboutCopy';                    // ← new server comp

export const metadata: Metadata = { /* unchanged */ };

export default function AboutPage() {
  return (
    <main>
      <AboutCopy />          {/* static text, no hooks */}
      <AboutSectionClient /> {/* animations / scroll effects */}
    </main>
  );
}
```

• Steps  
1. `mv AboutPageClient.tsx AboutSectionClient.tsx` and insert `"use client";` at the top.  
2. Inside `AboutSectionClient` **keep** animations, counters, etc.  
3. Create `AboutCopy.tsx` (server component) containing static markup.  
4. Update `page.tsx` per target above.

• Client vs Server  
– Server: `AboutCopy`, metadata export  
– Client: `AboutSectionClient` (animations)

• Risks  
- Minimal (no browser APIs in server part).  
- Watch for mistakenly leaving hooks in `AboutCopy`.

---

### 1.2  `/apie`  (`app/apie/page.tsx`)

• Current start:

```tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
…
export default function ApiePlayground() { … }
```

• Target split:

`app/apie/page.tsx` (SERVER)

```tsx
export const dynamic = 'force-static';

import ApiePlaygroundClient from './ApiePlaygroundClient';

export default function ApiePage() {
  return (
    <main>
      {/* Any static intro / SEO copy can live here later */}
      <ApiePlaygroundClient />   {/* all interactive logic */}
    </main>
  );
}
```

`app/apie/ApiePlaygroundClient.tsx` (CLIENT)

```tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
… // ⭐ paste entire existing component body here
export default function ApiePlaygroundClient() { … }
```

• Steps  
1. Copy full component body into new `ApiePlaygroundClient.tsx`; prepend `"use client";`.  
2. Replace old file with server shell (above).  
3. Add `dynamic='force-static'` to new `page.tsx`.

• Client vs Server  
– Client: everything with state (audio, confetti, coloring).  
– Server: empty shell + static heading if desired.

• Risks  
- Bundle size remains large (acceptable Phase 1).  
- Ensure imports like `next/image`, `Button` still work in client component.

---

### 1.3  `/accepted`  (`app/accepted/page.tsx`)

• Current top:

```tsx
'use client';
import React, { useState, useEffect, Suspense } from 'react';
…
export default function AcceptedPage() { … }
```

• Target split:

`app/accepted/AcceptedPageClient.tsx` (CLIENT)

```tsx
'use client';

import React, { Suspense, useState, useEffect } from 'react';
… // ⭐ move existing AcceptedPageContent + wrapper here
export default function AcceptedPageClient() { … }
```

`app/accepted/page.tsx` (SERVER)

```tsx
export const dynamic = 'force-static';

import AcceptedPageClient from './AcceptedPageClient';

export default function AcceptedPage() {
  return <AcceptedPageClient />;     // keep Suspense inside client file
}
```

• Steps  
1. Move **entire** current file to `AcceptedPageClient.tsx`; keep `"use client";`.  
2. Create slim server `page.tsx` with flag.  
3. Verify `next/navigation` hooks stay in client component only.

• Client vs Server  
– Client: searchParams, confetti, audio, window resize, share links.  
– Server: wrapper only (0 hooks).

• Risks  
- Large client bundle but fine for Phase 1.  
- Remember to keep `Suspense` inside client component, not server.

---

### 1.4  `/about/policy`  (`app/about/policy/page.tsx`)

• Current start:

```tsx
'use client';

import React, { useState } from 'react';
…
export default function PolicyPage() { … }
```

• Target split:

`app/about/policy/PolicyContentClient.tsx` (CLIENT)

```tsx
'use client';

import React, { useState } from 'react';
… // ⭐ move accordion + button logic here
export default function PolicyContentClient() { … }
```

`app/about/policy/page.tsx` (SERVER)

```tsx
export const dynamic = 'force-static';

import type { Metadata } from 'next';
import PolicyContentClient from './PolicyContentClient';

export const metadata: Metadata = {
  title: 'Policies | Teddy Kids',
  description: 'All childcare policies & GGD reports in one place.'
};

export default function PolicyPage() {
  return <PolicyContentClient />;
}
```

• Client vs Server  
– Client: accordion state (`useState`), language context consumer.  
– Server: metadata & wrapper.

• Risks  
- Language context (`useLanguage`) lives in client file already → keep there.  
- Ensure images used with `next/image` get `priority` removed if unnecessary.

---

## 2 · What to Watch For

| Gotcha | Mitigation |
|--------|------------|
| Hooks left in server file | Grep for `useState`, `useEffect` before commit |
| `next/navigation` in server | Keep inside client component |
| Hydration mismatch | Run `next build && next start`, check console |
| Bundle size spike | Acceptable for Phase 1; tackle Phase 4 perf pass |

---

## 3 · Testing Matrix

| Layer | Tool/Command | Pass criteria |
|-------|--------------|---------------|
| HTML snapshot | `curl localhost:3000/<page>` | Contains real heading text |
| Build | `npm run build` | No `RSC` / hook errors |
| Lighthouse CLI | `lhci autorun` | SEO ≥ 95, Perf +5 vs baseline |
| A11y | `axe` | 0 new violations |

---

## 4 · Rollback

1 `git revert <sha-of-page>`  
2 Remove `dynamic='force-static'` & restore `"use client"` line.  
3 Push → preview auto rebuild.

Time ≤ 5 min.

---

## 5 · Timeline (Day 1-2)

| Slot | Task |
|------|------|
| Day 1 AM | `/about` conversion + tests |
| Day 1 PM | `/apie` conversion + tests |
| Day 2 AM | `/accepted` conversion + tests |
| Day 2 PM | `/about/policy` conversion + full LHCI + PR |

All four commits go into PR **“Phase 1 – static flags”**. CI + preview screenshots must be green before merge.

---

### ✅ Ready for your approval  
Give the 👍 and we’ll start Phase 1 exactly as laid out above.  
