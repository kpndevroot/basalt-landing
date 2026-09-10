import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { ImageResponse } from 'next/og';

/**
 * The share card, generated at build time rather than shipped as a binary. A `summary_large_image`
 * card was already declared in the metadata with no image behind it, so every share of this link —
 * X, Reddit, Discord, WhatsApp — rendered as grey text for a product whose entire proof is what it
 * looks like. Drawn rather than photographed because the six screenshots are 540×1080 portraits,
 * and a portrait crushed into a 1200×630 card shows nothing legible.
 *
 * The mark is inlined as a data URI rather than referenced by URL: this renders at build time, when
 * no server is listening on the site's own origin yet, so an <img src="/brand/mark.png"> would
 * resolve to nothing and the card would ship with a hole where the logo goes.
 */
const MARK = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public/brand/mark.png')).toString('base64')}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Basalt — your markdown repo, on your phone';

export const dynamic = 'force-static';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0b0b0c',
          padding: '0 88px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK} alt="" width={40} height={60} />
          <div style={{ color: '#ecebe8', fontSize: 40, fontWeight: 700, letterSpacing: -0.5 }}>Basalt</div>
        </div>
        <div style={{ color: '#ecebe8', fontSize: 68, fontWeight: 800, lineHeight: 1.12, letterSpacing: -2 }}>
          Your markdown repo,
        </div>
        <div style={{ color: '#e0964a', fontSize: 68, fontWeight: 800, lineHeight: 1.12, letterSpacing: -2 }}>
          on your phone.
        </div>
        <div style={{ color: '#8f8a84', fontSize: 30, marginTop: 32, lineHeight: 1.4, maxWidth: 920 }}>
          Works with Obsidian vaults. Fully offline, and writable — edits queue on the device and push as real
          commits when you are back online.
        </div>
      </div>
    ),
    size,
  );
}
