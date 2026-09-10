import {
  ArrowRight,
  CheckboxIcon,
  CoffeeIcon,
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

/**
 * Basalt's own repository is private, so nothing on this page may link into it: every such link
 * 404s for the visitor, which is worse than no link at all. That is also why no licence is claimed
 * anywhere here — an MIT badge over source nobody can read is a promise this page cannot keep.
 *
 * The plugin is a genuinely public repo and keeps its links.
 */
const PLUGIN = 'https://github.com/kpndevroot/obsidian-basalt-causeway';
const PLUGIN_RELEASE = 'https://github.com/kpndevroot/obsidian-basalt-causeway/releases';
const SUPPORT = 'https://buymeacoffee.com/kpndevroot';

/**
 * The Play listing for `com.vishnuv.basalt`. This URL is deterministic from the application id and
 * goes live the moment the listing does — unlike a private-repo release link, which never resolves
 * for anyone. If distribution changes, this is the one line to edit.
 */
const DOWNLOAD = 'https://play.google.com/store/apps/details?id=com.vishnuv.basalt';

/**
 * Held back for now, not deleted — the section, its copy and every link into it stay in this file
 * so bringing it back is one word. Flipping this to `true` restores the plugin section, its nav
 * entry, the closing CTA's secondary button and the footer link together; they are gated on the
 * same flag precisely so the page can never ship a nav item pointing at a section that is not
 * rendered.
 */
const SHOW_PLUGIN: boolean = false;

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
 * than as a boast about who meets it — see the note rendered under this grid. Each
 * habit names the thing Basalt actually does for it, so the pitch stays checkable against the
 * feature list further down.
 */
const HABITS = [
  {
    title: 'The files stay yours',
    body: 'Plain markdown, in a repo you own. No proprietary format, no account with us, and no export to dread later. There is no server holding a copy of your notes.',
  },
  {
    title: 'One vault, not five apps',
    body: 'The same folder at your desk and in your pocket. Obsidian writes to it, Basalt writes to it, and the repo keeps them in step. Your notes never half-live in two places.',
  },
  {
    title: 'Capture where the thought happens',
    body: 'Which is hardly ever at your desk. Write it on your phone with no signal at all, and it commits itself the moment you are back online.',
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
    body: 'Basalt downloads your whole repo in one request, pinned to an exact commit.',
  },
  {
    icon: <OutlineIcon />,
    title: 'Index',
    body: 'The new copy is swapped in cleanly, then the search index, the link graph and your tags are built.',
  },
  {
    icon: <PencilIcon />,
    title: 'Read and write',
    body: 'Your notes sit on the phone and render properly. Edit any of them with no signal — the changes wait in a queue.',
  },
  {
    icon: <UploadIcon />,
    title: 'Push',
    body: 'Those changes go up as real commits. You see them before they leave, and you decide what happens if the repo moved on.',
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
    body: 'After the first sync you do not need the internet. Browsing, search, links, tags and the graph all work on a plane, on the tube, or with no signal at all.',
  },
  {
    icon: <PencilIcon />,
    title: 'Edit offline — commits when you are back',
    body: 'A proper markdown editor, with a toolbar for the characters that are painful to type on a phone. Write now, and it commits itself later.',
  },
  {
    icon: <UploadIcon />,
    title: 'Review before you push',
    body: 'You see exactly what is about to be committed. If GitHub changed while you were away, you choose what happens: overwrite, discard, or keep both.',
  },
  {
    icon: <SearchIcon size={22} />,
    title: 'Search that answers instantly',
    body: 'Every note is indexed as it syncs, so results come back instantly with the matching line highlighted. There is a quick switcher too, if you just want to jump by name.',
  },
  {
    icon: <JumpIcon />,
    title: 'Backlinks and linked mentions',
    body: '[[wikilinks]] work the way you expect, and every note ends with a list of the notes pointing back at it.',
  },
  {
    icon: <GraphIcon />,
    title: 'The connection graph',
    body: 'See the whole vault as a graph, with filters, search and a minimap. Or zoom into just the note you are reading and what surrounds it.',
  },
  {
    icon: <NoteIcon />,
    title: 'Real Obsidian markdown',
    body: 'Callouts, footnotes, ==highlights==, frontmatter, tags, tables, code blocks and Mermaid diagrams all render properly, instead of showing you the raw syntax.',
  },
  {
    icon: <CheckboxIcon />,
    title: 'Tick a box without opening the editor',
    body: 'Tap a task straight from the page, no editor needed. A dated checklist draws itself as a calendar, which is all a habit tracker really has to be.',
  },
  {
    icon: <HighlightIcon />,
    title: 'Highlights that survive a re-sync',
    body: 'Mark a passage and it stays on the right words, even after the note has been edited on your laptop and synced back down.',
  },
];

/** The rest of the shipped surface. Real features, but not ones that need a paragraph each. */
const ALSO = [
  { icon: <LayersIcon size={18} />, text: 'Several vaults side by side' },
  { icon: <GithubIcon size={18} />, text: 'Public repos work without signing in' },
  { icon: <LockIcon size={16} />, text: 'Lock it with your fingerprint or face' },
  { icon: <RefreshIcon size={17} />, text: 'Syncs in the background when the repo changes' },
  { icon: <TagIcon size={18} />, text: 'Browse by tag, the way you browse folders' },
  { icon: <FolderIcon size={18} />, text: 'Eight themes, light and dark' },
];

/**
 * The objections a visitor forms while scrolling, answered before the closing ask. Every answer
 * here is a behaviour the app actually ships — nothing aspirational, and nothing that would have to
 * be walked back in a support thread later.
 */
const FAQ = [
  {
    q: 'Do I have to keep my vault in a GitHub repo?',
    a: 'Yes — the repo is how the syncing happens. If your vault is just a folder today, pushing it to GitHub once is the whole setup. You can also try Basalt on the sample vault it comes with, without a repo or an account.',
  },
  {
    q: 'Does it work with private repos?',
    a: 'Yes, and most vaults are private. Sign in with GitHub and they work exactly like public ones. Public repos do not need you to sign in at all.',
  },
  {
    q: 'Where does my GitHub token live?',
    a: 'In your phone keystore, and nowhere else. There is no Basalt server to send it to. The app only ever talks to GitHub, and nothing leaves your phone except the commits you push.',
  },
  {
    q: 'What happens if the repo moved on while I was offline?',
    a: 'You get told before anything is written. You see what is about to be committed, and if the repo changed first, you pick what happens: overwrite, discard, or keep both.',
  },
  {
    q: 'Does it download my whole vault?',
    a: 'Once, in a single download. After that your notes live on the phone, and only what is needed to find them is kept in the database. Later syncs fetch the newest commit, not the whole history.',
  },
  {
    q: 'Is there an iPhone version?',
    a: 'Not yet — Basalt is Android for now. Nothing about it is tied to Android, so it is a matter of time rather than a rewrite.',
  },
];

const STACK = ['Expo SDK 57', 'React Native 0.86', 'React 19', 'SQLite · FTS5', 'expo-router', 'TypeScript strict'];

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
            <a className="nav-hide" href="#why">
              Why Basalt
            </a>
            <a className="nav-hide" href="#setup">
              Your setup
            </a>
            {SHOW_PLUGIN && (
              <a className="nav-hide" href="#plugin">
                Plugin
              </a>
            )}
            <a className="nav-hide" href="#features">
              Features
            </a>
            <a className="nav-hide" href="#faq">
              FAQ
            </a>
            <a className="btn btn-primary btn-sm" href={DOWNLOAD} target="_blank" rel="noreferrer">
              <DownloadIcon size={15} />
              Download
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="wrap hero">
          <span className="eyebrow">Offline-first · Backed by your own GitHub repo</span>
          <h1>
            Your entire vault, in your pocket.
            <br />
            <span className="accent">Offline. Writable. Free.</span>
          </h1>
          <p className="lede">
            Search, backlinks and the graph all work with the network off — and every edit commits to your own GitHub
            repo the moment it comes back. <strong>No subscription. No account with us.</strong>
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={DOWNLOAD} target="_blank" rel="noreferrer">
              <DownloadIcon />
              Download for Android
            </a>
            <a className="btn btn-secondary" href="#setup">
              <ArrowRight size={16} />
              How it works
            </a>
          </div>
          {/* Platform reality belongs beside the button, not in the closing note four screens down:
              an iPhone visitor should learn it before investing the whole scroll, not after. */}
          <p className="hero-note">
            Free · Android · No account with us, ever · Try the bundled sample vault with no repo at all
          </p>
          {/* The quiet disqualifier. Most Obsidian users do not keep their vault in git, and the page
              assumed they did — this names the gap immediately and points at the thing that closes it. */}
          <p className="hero-note">
            Vault not in a repo yet? <a href="#setup">That is the one piece of setup</a> — push the folder you already
            have to GitHub once, and Basalt takes it from there.
          </p>

        </section>

        {/* Screenshots, doubling as the hero's visual — which is why this sits tight under the CTAs
            and is centred to match them, rather than opening with a left-aligned section head. A
            single hero screenshot lived here first and was cut: it was the same browse capture the
            strip already opens with, so the page showed one image twice before saying anything. */}
        <section id="screens" className="wrap" style={{ paddingTop: 8, paddingBottom: 0 }}>
          <div className="section-head section-head-center">
            <span className="section-label">The app</span>
            <h2>Six screens, all of them offline.</h2>
            <p>
              Real screenshots, not mockups. Taken on the sample vault with the network switched off, which is exactly
              what you get before you connect anything.
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

        {/* why it lasts — the positioning, made checkable */}
        <section id="why" className="wrap section">
          <div className="section-head">
            <span className="section-label">Why it lasts</span>
            <h2>What makes notes survive is not the app.</h2>
            <p>
              Nobody still has their notes ten years on because they found a cleverer app. They have them because of
              what the notes are made of, and where they live.
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
            <strong>Those four lines are a standard, not a boast.</strong> The first two are just Obsidian and git
            doing their job. Basalt exists because the last two are the ones that break the moment you are away from
            the desk.
          </p>
        </section>

        {/* the setup — where Basalt sits */}
        <section id="setup" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">Your setup</span>
            <h2>Basalt is the pocket half. Obsidian keeps the desk.</h2>
            <p>
              This is not trying to replace Obsidian. It is the missing piece of something you probably already do —
              the part that works when your laptop is nowhere near you.
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

        {SHOW_PLUGIN && (
          <>
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
          </>
        )}

        {/* features */}
        <section id="features" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">Features</span>
            <h2>Everything the desk version taught you to expect.</h2>
            <p>All of it runs on the phone, and none of it waits on the network.</p>
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

        {/* faq — the objections, answered before the ask */}
        <section id="faq" className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <span className="section-label">Questions</span>
            <h2>Things you are probably wondering.</h2>
            <p>Short answers, and all of them about what the app does today.</p>
          </div>
          <div className="features">
            {FAQ.map((f) => (
              <article className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </article>
            ))}
          </div>
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
              Point it at the vault you already have, sync once, and carry the whole thing around with you. Readable,
              searchable and writable, with the network off.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={DOWNLOAD} target="_blank" rel="noreferrer">
                <DownloadIcon />
                Download the APK
              </a>
              <a className="btn btn-secondary" href="#faq">
                Read the FAQ
              </a>
            </div>
            <p className="cta-note">Android, arm64. No iOS build yet.</p>
          </div>
        </section>
        {/* support — deliberately after the download CTA, and deliberately small */}
        <section className="wrap section" style={{ paddingTop: 0 }}>
          <div className="section-head section-head-center">
            <div className="section-label">Support</div>
            <h2>Free, and staying that way.</h2>
            <p>
              No subscription, no account, no server of mine. Nothing is locked behind paying, and nothing changes if
              you never do. But if Basalt has earned a place on your phone, you can buy me a coffee. It covers the
              developer accounts and the late evenings, and buys you nothing but my thanks.
            </p>
          </div>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-secondary" href={SUPPORT} target="_blank" rel="noreferrer">
              <CoffeeIcon size={17} />
              Buy me a coffee
            </a>
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
            <a href={SUPPORT} target="_blank" rel="noreferrer">
              Support
            </a>
            {SHOW_PLUGIN && (
              <a href={PLUGIN} target="_blank" rel="noreferrer">
                Obsidian plugin
              </a>
            )}
          </span>
        </div>
      </footer>
    </>
  );
}
