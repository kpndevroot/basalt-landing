/**
 * The canonical origin, in one place because three separate files need it to agree: `metadataBase`
 * resolves the share-card image against it, and the sitemap and robots files must emit absolute
 * URLs. A mismatch here does not fail the build — it silently publishes a card that renders blank
 * and a sitemap search engines ignore. Change it here when the domain changes, and nowhere else.
 */
export const SITE = 'https://basalt-landing-smoky.vercel.app';
