/**
 * Icons transcribed 1:1 from the app's own set (basalt/src/ui/icons.tsx) — same paths, same
 * stroke weights, same viewBoxes — retargeted to the web by using `currentColor` in place of the
 * app's `color` prop. Keeping the geometry identical is what makes the site read as the same app.
 */
type IconProps = { size?: number };

export function FolderIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size * (16 / 20)} viewBox="0 0 20 16" aria-hidden="true">
      <path d="M0 2a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" fill="currentColor" />
    </svg>
  );
}

export function FileIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size * (20 / 16)} viewBox="0 0 16 20" aria-hidden="true">
      <path d="M2 0h8l6 6v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth={1.8} />
    </svg>
  );
}

export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <circle cx={8} cy={8} r={6.5} fill="none" stroke="currentColor" strokeWidth={2} />
      <line x1={13} y1={13} x2={17} y2={17} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

/** Quick switcher: a key you press to jump between linked notes. */
export function JumpIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <rect x={1} y={1} width={16} height={16} rx={4.5} fill="none" stroke="currentColor" strokeWidth={1.8} />
      <path d="M5.5 9h6M9 5.5L12.5 9 9 12.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function OfflineIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size * (16 / 20)} viewBox="0 0 20 16" aria-hidden="true">
      <path d="M2 6a14 14 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity={0.4} />
      <path d="M5.5 9.5a9 9 0 0 1 9 0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" opacity={0.7} />
      <circle cx={10} cy={13.5} r={1.6} fill="currentColor" />
    </svg>
  );
}

export function RefreshIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M14 8a6 6 0 1 1-1.8-4.3" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M14 1v3.5h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/** Note outline: indented rules, one per heading depth. Reused here for the SQLite index. */
export function OutlineIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M2 3h14M5 8h11M8 13h8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

/** Tag browsing: a luggage tag, punched. */
export function TagIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M8.4 1.5H2.5a1 1 0 0 0-1 1v5.9a1 1 0 0 0 .3.7l7 7a1 1 0 0 0 1.4 0l5.9-5.9a1 1 0 0 0 0-1.4l-7-7a1 1 0 0 0-.7-.3z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <circle cx={5.2} cy={5.2} r={1.3} fill="currentColor" />
    </svg>
  );
}

/** A note/callout glyph — a marker pen over a line. Stands in for rendered markdown. */
export function NoteIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 13.5l.8-3 7.4-7.4 2.2 2.2-7.4 7.4-3 .8z" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M9.6 4.3l2.2 2.2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

/** Push — an arrow up inside a ring. The browse header's "push to GitHub" affordance. */
export function UploadIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <circle cx={9} cy={9} r={7.1} fill="none" stroke="currentColor" strokeWidth={1.6} />
      <line x1={9} y1={12.6} x2={9} y2={5.6} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M5.9 8.7L9 5.5l3.1 3.2" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A pencil — the reader's entry into the editor. Basalt writes; this is the glyph that says so. */
export function PencilIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M11.6 2.1a1.6 1.6 0 0 1 2.3 0l1.5 1.5a1.6 1.6 0 0 1 0 2.3L6.6 15l-3.6.9.9-3.6 7.7-7.7z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path d="M10.6 3.4l2.8 2.8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

/** Three linked nodes — the connection graph, as drawn in the browse header. */
export function GraphIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <line x1={4.2} y1={5} x2={14} y2={7.4} stroke="currentColor" strokeWidth={1.8} />
      <line x1={4.2} y1={5} x2={8.2} y2={14.4} stroke="currentColor" strokeWidth={1.8} />
      <line x1={14} y1={7.4} x2={8.2} y2={14.4} stroke="currentColor" strokeWidth={1.8} />
      <circle cx={4.2} cy={5} r={2.2} fill="currentColor" />
      <circle cx={14} cy={7.4} r={2.2} fill="currentColor" />
      <circle cx={8.2} cy={14.4} r={2.2} fill="currentColor" />
    </svg>
  );
}

/** A padlock — biometric app-lock and the screen-capture guard. Shackle stroked, body filled. */
export function LockIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size * (26 / 22)} viewBox="0 0 22 26" aria-hidden="true">
      <path d="M6 10V7a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
      <rect x={3} y={10} width={16} height={13} rx={3} fill="currentColor" />
    </svg>
  );
}

/** A marker over its underline — `==highlights==`, which survive a re-sync. */
export function HighlightIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M11.6 1.9a1.6 1.6 0 0 1 2.3 0l2.2 2.2a1.6 1.6 0 0 1 0 2.3l-7 7-4.5.9.9-4.5 6.1-7.9z"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <line x1={2} y1={16.6} x2={16} y2={16.6} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

/** A ticked box — tappable task lists, and the habit calendar built on them. */
export function CheckboxIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
      <rect x={1} y={1} width={18} height={18} rx={5} fill="none" stroke="currentColor" strokeWidth={2} />
      <path d="M5.5 10.2l3 3 6-6.4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Stacked sheets — several vaults side by side. */
export function LayersIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 1.6l7 3.7-7 3.7-7-3.7 7-3.7z" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M2 9.3l7 3.7 7-3.7M2 13l7 3.7L16 13" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" opacity={0.55} />
    </svg>
  );
}

/** An arrow into a tray — the APK download. */
export function DownloadIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 1.8v9.4M5.4 8l3.6 3.6L12.6 8" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.4 13.2v1.4a1.6 1.6 0 0 0 1.6 1.6h10a1.6 1.6 0 0 0 1.6-1.6v-1.4" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" />
    </svg>
  );
}

/** Points right — carries the eye along the desk → repo → pocket loop. */
export function ArrowRight({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 9h11M10 4.5L14.5 9 10 13.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The Obsidian mark — a cut gemstone. A third-party logo, used only where Obsidian is named. */
export function ObsidianIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.4 1.8L6.2 6.9 4 15.3l5.6 6.9 8.9-2.5 1.5-8.6-6.6-9.3z" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M13.4 1.8l-1.1 7.6 6.2 2.2M12.3 9.4L9.6 22.2M12.3 9.4L4 15.3" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" opacity={0.6} />
    </svg>
  );
}

export function ChevronDown({ size = 12 }: IconProps) {
  return (
    <svg width={size} height={size * (8 / 14)} viewBox="0 0 14 8" aria-hidden="true">
      <path d="M1 1l6 6 6-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** GitHub wordmark — a brand icon (no in-app equivalent), used only on the repo links. */
export function GithubIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function Logo({ size = 26 }: IconProps) {
  // A basalt column — hexagonal prism, the accent-filled brand mark (no in-app equivalent).
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M12 2l8 4.6v9.2L12 22l-8-4.6V6.6z"
        fill="var(--accent)"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 2v20M4 6.6l8 4.6 8-4.6" stroke="var(--on-accent)" strokeWidth="1.4" strokeLinejoin="round" opacity="0.55" />
    </svg>
  );
}
