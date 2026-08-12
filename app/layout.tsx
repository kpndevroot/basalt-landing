import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

import './globals.css';

// The app's exact faces: Plus Jakarta Sans for display, JetBrains Mono for code/metadata.
// next/font self-hosts them at build time, so the static export ships no external requests.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// "Reader" is gone from every string here on purpose: Basalt writes, and the project's own
// conventions forbid shipping copy that calls it a reader. The description leads with the write
// path for the same reason — it is the half a search result would otherwise never learn about.
const TITLE = 'Basalt — your markdown repo, on your phone';
const DESCRIPTION =
  'Basalt puts the Obsidian vault you keep in a GitHub repo on your phone — fully offline, and writable. Edits queue on the device and push as real commits when you are back online.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Obsidian',
    'Obsidian mobile',
    'Obsidian sync alternative',
    'offline-first notes',
    'GitHub',
    'markdown notes app',
    'git notes',
    'Android',
  ],
  applicationName: 'Basalt',
  authors: [{ name: 'kpndevroot', url: 'https://github.com/kpndevroot' }],
  openGraph: {
    title: TITLE,
    description:
      'Obsidian at the desk, Basalt in your pocket. One GitHub repo underneath — offline search, backlinks, the connection graph, and edits that commit themselves when the signal returns.',
    type: 'website',
    siteName: 'Basalt',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
    { media: '(prefers-color-scheme: light)', color: '#f7f7f5' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
