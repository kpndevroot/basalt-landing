import {
  ArrowRight,
  CheckboxIcon,
  DownloadIcon,
  FolderIcon,
  GithubIcon,
  GraphIcon,
  HighlightIcon,
  JumpIcon,
  LayersIcon,
  LockIcon,
  Logo,
  NoteIcon,
  ObsidianIcon,
  OfflineIcon,
  OutlineIcon,
  PencilIcon,
  RefreshIcon,
  SearchIcon,
  TagIcon,
  UploadIcon,
} from '@/components/icons';

const REPO = 'https://github.com/kpndevroot/basalt';
const RELEASE = 'https://github.com/kpndevroot/basalt/releases/latest';
const PLUGIN = 'https://github.com/kpndevroot/obsidian-basalt-causeway';
const PLUGIN_RELEASE = 'https://github.com/kpndevroot/obsidian-basalt-causeway/releases';

/** Real captures from a release build on a Pixel 8, not renders. Files live in `public/shots`. */
const SHOTS = [
  {
    src: '/shots/01-browse.png',
    alt: 'Browsing a vault: folders, favourites and recent notes',
    title: 'Browse.',
    body: 'Folders, favourites and recents, straight off the disk.',
  },
  {
    src: '/shots/02-note.png',
    alt: 'A note rendered with a callout and wikilinks',
    title: 'Read.',
    body: 'Callouts, wikilinks and frontmatter, rendered natively.',
  },
  {
    src: '/shots/03-search.png',
    alt: 'Full-text search results with matches highlighted',
    title: 'Search.',
    body: 'Full-text across every note, with the match highlighted.',
  },
  {
    src: '/shots/04-graph.png',
    alt: 'The note connection graph with a minimap',
    title: 'Graph.',
    body: 'Every wikilink is an edge. Filters, search and a minimap.',
  },
  {
    src: '/shots/05-tags.png',
    alt: 'The tag index, showing nested tags and counts',
    title: 'Tags.',
    body: 'Nested tags with counts, indexed at sync time.',
  },
  {
    src: '/shots/06-diagram.png',
    alt: 'A Mermaid diagram rendered inside a note',
    title: 'Diagrams.',
    body: 'Mermaid renders from the bundled library — offline too.',
  },
];

/**
 * The positioning, in four lines. Deliberately written as a *standard someone can meet* rather
 * than as a claim about how many people meet it — see the note rendered under this grid. Each
 * habit names the thing Basalt actually does for it, so the pitch stays checkable against the
 * feature list further down.
 */
const HABITS = [
  {
    title: 'The files stay yours',
    body: 'Plain markdown in a repo you own. No proprietary store, no account with us, no export step to dread later — Basalt keeps no server and no copy of your vault anywhere but your device.',
  },
  {
    title: 'One vault, not five apps',
    body: 'The same folder on the desk and in your pocket. Obsidian writes it, Basalt writes it, and the repo underneath keeps them honest — so there is never a second place your notes half-live.',
  },
  {
    title: 'Capture where the thought happens',
    body: 'Which is almost never at the desk. Basalt edits offline on the phone and queues the commit; it lands the moment you have a connection again. No connection, no lost thought.',
  },
  {
    title: 'Nothing is ever quietly lost',
    body: (
      <>
        Every save is a real commit to your repo. The whole history is one <code>git log</code> away, on something you
        can clone onto any machine you will ever own.
      </>
    ),
  },
];

/** The round trip, as four steps. Two in, two out — the write path is half the product. */
const STEPS = [
  {
    icon: <RefreshIcon />,
    title: 'Pull',
    body: 'Basalt fetches your repo as a zipball pinned to an exact commit SHA — the whole vault in one request.',
  },
  {
    icon: <OutlineIcon />,
    title: 'Index',
    body: 'The snapshot is swapped in atomically, then files, an FTS5 full-text index, the link graph and tags go into SQLite.',
  },
  {
    icon: <PencilIcon />,
    title: 'Read and write',
    body: 'Note bodies stay on disk and render natively. Edit any of them with the network off — the queue holds your changes.',
  },
  {
    icon: <UploadIcon />,
    title: 'Push',
    body: 'Queued edits go up as real commits to your branch. Review them first, and resolve it yourself if the remote moved on.',
  },
];

/**
 * The desktop half of the loop. Obsidian has no git, which is the whole reason this exists — so
 * the copy leads with the gap rather than with the plugin's name, and every claim here maps to a
 * documented behaviour in the plugin's README (one commit per sync, the exclude list, the
 * conflict sidecar). Nothing aspirational belongs in this list.
 */
const CAUSEWAY = [
  {
    icon: <UploadIcon />,
    title: 'One commit per sync, not one per note',
    body: 'It writes through GitHub’s Trees API rather than shelling out to git, so a session that touched thirty notes lands as a single new HEAD — which is exactly one pull on the phone.',
  },
  {
    icon: <RefreshIcon />,
    title: 'The loop closes both ways',
    body: 'Notes you write in Obsidian reach the phone; the commits Basalt pushed from your pocket come back down into the vault. Sync manually, or let it publish after a five-second settle.',
  },
  {
    icon: <LayersIcon />,
    title: 'Attachments too — and never your config',
    body: 'Every file in the vault ships, because images are half of what makes a note render right on a phone. .obsidian/, .trash/ and .git/ are excluded before anything reaches the tree builder.',
  },
  {
    icon: <GraphIcon />,
    title: 'Dataview queries arrive as answers',
    body: 'A dataview block holds a query, not a result, so it would reach the phone empty. The plugin bakes the rendered table into the published copy and leaves the live query in your note.',
  },
];

const FEATURES = [
  {
    icon: <OfflineIcon />,
    title: 'Offline-first, not offline-tolerant',
    body: 'After the first sync the network is optional. Browsing, search, wikilinks, tags and the graph all work on a plane, on the tube, or on no signal at all.',
  },
  {
    icon: <PencilIcon />,
    title: 'Edit offline — commits when you are back',
    body: 'A full markdown editor with an insertion toolbar for the symbols that hurt to type on a phone. Edits queue locally and push as real commits later.',
  },
  {
    icon: <UploadIcon />,
    title: 'Review before you push',
    body: 'A pending-changes screen shows exactly what will be committed. If GitHub moved on first, resolve it your way — overwrite, discard, or keep both copies.',
  },
  {
    icon: <SearchIcon size={22} />,
    title: 'Search that answers instantly',
    body: 'SQLite FTS5 indexes every note at sync time, ranked with the matching snippet highlighted — plus a fuzzy quick switcher for jumping straight by name.',
  },
  {
    icon: <JumpIcon />,
    title: 'Backlinks and linked mentions',
    body: '[[wikilinks]] resolve on-device the way you expect, the reverse edges are indexed, and every note ends with a list of what points back at it.',
  },
  {
    icon: <GraphIcon />,
    title: 'The connection graph',
    body: 'The whole vault as a graph, with filters, search and a minimap — or scoped to the neighbourhood of the single note you are reading.',
  },
  {
    icon: <NoteIcon />,
    title: 'Real Obsidian markdown',
    body: 'Callouts, transclusion, footnotes, ==highlights==, frontmatter, tags, tables, fenced code and Mermaid diagrams — rendered, not printed as raw syntax.',
  },
  {
    icon: <CheckboxIcon />,
    title: 'Tick a box without opening the editor',
    body: 'Task lists are tappable straight from the page, and a dated checklist draws itself as a month calendar — which is all a habit tracker ever needed to be.',
  },
  {
    icon: <HighlightIcon />,
    title: 'Highlights that survive a re-sync',
    body: 'Mark a passage, export the set, and find your marks still on the right words after the note has been edited somewhere else and pulled back down.',
  },
];

/** The rest of the shipped surface. Real features, but not ones that need a paragraph each. */
const ALSO = [
  { icon: <LayersIcon size={18} />, text: 'Several vaults side by side' },
  { icon: <GithubIcon size={18} />, text: 'Public repos work without signing in' },
  { icon: <LockIcon size={16} />, text: 'Biometric app-lock and a capture guard' },
  { icon: <RefreshIcon size={17} />, text: 'Background sync when the repo moves ahead' },
  { icon: <TagIcon size={18} />, text: 'Tags as first-class navigation' },
  { icon: <FolderIcon size={18} />, text: 'Eight themes, light and dark, reduce-motion aware' },
];

const STACK = ['Expo SDK 57', 'React Native 0.86', 'React 19', 'SQLite · FTS5', 'expo-router', 'TypeScript strict', 'MIT licensed'];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <Logo />
            Basalt
          </a>
          <nav className="nav-links">
            <a className="nav-hide" href="#the-1">
              The 1%
            </a>
            <a className="nav-hide" href="#setup">
              Your setup
            </a>
            <a className="nav-hide" href="#plugin">
              Plugin
            </a>
            <a className="nav-hide" href="#features">
              Features
            </a>
            <a className="btn btn-primary btn-sm" href={RELEASE} target="_blank" rel="noreferrer">
              <DownloadIcon size={15} />
              Download
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="wrap hero">
          <span className="eyebrow">Obsidian at the desk · Basalt in your pocket</span>
          <h1>
            The 1% don&rsquo;t take better notes.
            <br />
            <span className="accent">They just never lose them.</span>
          </h1>
          <p className="lede">
            Basalt puts the Obsidian vault you keep in a GitHub repo on your phone — fully offline, and{' '}
            <strong>writable</strong>. Capture the thought on the bus, and it lands in your repo as a real commit when
            the signal comes back. One vault, plain markdown, yours forever.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={RELEASE} target="_blank" rel="noreferrer">
              <DownloadIcon />
              Download for Android
            </a>
            <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
              <GithubIcon size={18} />
              Source on GitHub
            </a>
          </div>
          <p className="hero-note">
            Free and MIT-licensed · No account with us, ever · Try the bundled sample vault with no repo at all
          </p>

          {/* The real browse screen, captured from a release build. This was a hand-drawn CSS mock
              until there were screenshots to use; an invented vault next to six genuine captures
              read as decoration, so the illustration is gone rather than duplicated. */}
          <div className="hero-shot">
            <img
              src="/shots/01-browse.png"
              alt="Basalt browsing a vault: folders, favourites and notes, rendered offline"
              width={540}
              height={1080}
            />
          </div>
        </section>

        {/* screenshots — real captures, not renders. The device mock above is an illustration;
            this is the app. Scrolls horizontally rather than shrinking to six unreadable thumbs. */}
        <section id="screens" className="wrap section" style={{ paddingBottom: 0 }}>
          <div className="section-head">
            <span className="section-label">The app</span>
            <h2>Six screens, all of them offline.</h2>
            <p>
              Captured on the bundled sample vault with the network off — the same thing you get before connecting a
              repo.
            </p>
          </div>
          <div className="shots">
            {SHOTS.map((s) => (
              <figure className="shot" key={s.src}>
                <img src={s.src} alt={s.alt} width={540} height={1080} loading="lazy" />
                <figcaption>
                  <strong>{s.title}</strong> {s.body}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* the 1% — the positioning, made checkable */}
        <section id="the-1" className="wrap section">
          <div className="section-head">
            <span className="section-label">The 1%</span>
            <h2>It is four habits, not a personality type.</h2>
            <p>
              Nobody keeps their notes for a decade because they found a cleverer app. They keep them because of what
              the notes are made of, and where they live.
            </p>
          </div>
          <div className="habits">
            {HABITS.map((h, i) => (
              <div className="habit" key={h.title}>
                <span className="habit-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="aside">
            <strong>&ldquo;The 1%&rdquo; is a standard, not a statistic.</strong> We have not counted anyone — those four
            lines are the whole of it, and the first two are just Obsidian and git doing their job. Basalt exists
            because the last two are the ones that break on a phone.
          </p>
        </section>

        {/* the setup — where Basalt sits */}
        <section id="setup" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">Your setup</span>
            <h2>Basalt is the pocket half. Obsidian keeps the desk.</h2>
            <p>
              This is not a replacement for Obsidian and it is not trying to be. It is the missing third of a loop you
              probably already run — the part that works when you are nowhere near a laptop.
            </p>
          </div>
          <div className="loop">
            <div className="loop-node">
              <div className="icon-box">
                <ObsidianIcon />
              </div>
              <h3>Obsidian</h3>
              <p>The long sessions. Plugins, canvases, the heavy restructuring you only do sitting down.</p>
            </div>
            <span className="loop-arrow" aria-hidden="true">
              <ArrowRight />
            </span>
            <div className="loop-node loop-spine">
              <div className="icon-box">
                <GithubIcon size={22} />
              </div>
              <h3>Your GitHub repo</h3>
              <p>The spine. Plain markdown, full history, one clone away from any machine — and no third party in it.</p>
            </div>
            <span className="loop-arrow" aria-hidden="true">
              <ArrowRight />
            </span>
            <div className="loop-node">
              <div className="icon-box">
                <Logo size={22} />
              </div>
              <h3>Basalt</h3>
              <p>The other twenty-three hours. Read, search, link and write from the phone, online or not.</p>
            </div>
          </div>
        </section>

        {/* the plugin — the desk→repo arrow, which Obsidian cannot draw on its own */}
        <section id="plugin" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="panel">
            <div className="panel-head">
              <div>
                <span className="section-label">The companion plugin</span>
                <h2>Obsidian has no git. Basalt Causeway is the arrow.</h2>
                <p>
                  Basalt already owns the right-hand side of that diagram — it watches HEAD and pulls when the SHA
                  moves. The missing piece was a desktop publisher, because Obsidian cannot push a vault to a repo by
                  itself. <strong>Basalt Causeway</strong> is our plugin for exactly that, and nothing else.
                </p>
              </div>
              <div className="panel-actions">
                <a className="btn btn-primary" href={PLUGIN_RELEASE} target="_blank" rel="noreferrer">
                  <DownloadIcon />
                  Get the plugin
                </a>
                <a className="btn btn-secondary" href={PLUGIN} target="_blank" rel="noreferrer">
                  <GithubIcon size={18} />
                  Plugin source
                </a>
              </div>
            </div>

            <div className="pipe" aria-hidden="true">
              <span className="pipe-node">
                <ObsidianIcon size={18} />
                Obsidian
              </span>
              <span className="pipe-link">
                <span className="pipe-label">Causeway</span>
                <ArrowRight size={16} />
              </span>
              <span className="pipe-node">
                <GithubIcon size={17} />
                Your repo
              </span>
              <span className="pipe-link">
                <ArrowRight size={16} />
              </span>
              <span className="pipe-node">
                <Logo size={18} />
                Basalt
              </span>
            </div>

            <div className="causeway">
              {CAUSEWAY.map((c) => (
                <article className="card" key={c.title}>
                  <div className="icon-box">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>

            <p className="aside">
              <strong>Divergence is reported, never guessed at.</strong> There is no merge machinery: if both sides
              edited the same note, your local file is left untouched and the remote copy lands beside it as a{' '}
              <code>.conflict-&lt;sha&gt;.md</code> sidecar for you to settle. Your token stays on your machine and goes
              nowhere but GitHub — no server of ours sits in this loop either.
            </p>

            <p className="cta-note" style={{ textAlign: 'left' }}>
              Desktop and Obsidian mobile · Install via BRAT from{' '}
              <code>kpndevroot/obsidian-basalt-causeway</code> · Needs a fine-grained token with Contents: read and
              write
            </p>
          </div>
        </section>

        {/* how it works */}
        <section className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">How it works</span>
            <h2>A repo in. Commits back out.</h2>
            <p>
              Every sync is the same round trip — and note bodies never leave your disk. Only what Basalt needs to{' '}
              <em>find</em> things lives in the database.
            </p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.title}>
                <div className="step-num" />
                <div className="icon-box icon-box-sm">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section id="features" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">Features</span>
            <h2>Everything the desk version taught you to expect.</h2>
            <p>Rendered natively, indexed on-device, and none of it waiting on a network round trip.</p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <article className="card" key={f.title}>
                <div className="icon-box">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
          <ul className="more">
            {ALSO.map((a) => (
              <li key={a.text}>
                <span className="more-icon">{a.icon}</span>
                {a.text}
              </li>
            ))}
          </ul>
        </section>

        {/* stack */}
        <section className="wrap section" style={{ paddingTop: 0, textAlign: 'center' }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            Built on
          </div>
          <div className="stack">
            {STACK.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="wrap section" style={{ paddingTop: 0 }}>
          <div className="cta">
            <h2>Your notes are just a repo. Keep them that way.</h2>
            <p>
              Point Basalt at the vault you already have, sync once, and carry all of it — readable, searchable and
              writable — with the network off.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={RELEASE} target="_blank" rel="noreferrer">
                <DownloadIcon />
                Download the APK
              </a>
              <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
                <GithubIcon size={18} />
                Read the source
              </a>
            </div>
            <p className="cta-note">Android arm64, signed and attached to every release. iOS builds from source.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="brand" style={{ fontSize: 15 }}>
            <Logo size={20} />
            Basalt
          </span>
          <span>Your markdown repo, on your phone. Works with Obsidian vaults.</span>
          <span className="footer-links">
            {/* Play requires this URL to be reachable from the listing, and to stay reachable. */}
            <a href="/privacy/">Privacy</a>
            <a href={REPO} target="_blank" rel="noreferrer">
              github.com/kpndevroot/basalt
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
