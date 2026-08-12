import type { Metadata } from 'next';

import { DownloadIcon, GithubIcon, Logo } from '@/components/icons';

const REPO = 'https://github.com/kpndevroot/basalt';
const RELEASE = 'https://github.com/kpndevroot/basalt/releases/latest';
const ISSUES = 'https://github.com/kpndevroot/basalt/issues';

/**
 * Play requires a *stable, publicly reachable* policy URL on the listing, and reviewers check that
 * the page's claims match the APK's manifest and its actual network behaviour. So every statement
 * here is one that can be checked against the source: the two hosts come from the only `https://`
 * literals in `src/`, the permission list is `android/app/src/main/AndroidManifest.xml` verbatim,
 * and "no analytics" is a claim about a dependency set anyone can grep.
 */
const UPDATED = '12 August 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy — Basalt',
  description:
    'Basalt has no servers, no accounts and no analytics. Your vault and your GitHub credentials stay on your device; the only host the app ever contacts is GitHub.',
  alternates: { canonical: '/privacy/' },
};

/** The claim the whole page rests on, stated once, up front, in the language Play's form uses. */
const SUMMARY = [
  {
    title: 'No data is collected',
    body: 'Basalt has no backend. There is no Basalt account, no server that receives your notes, and no operator-side copy of anything you write.',
  },
  {
    title: 'No analytics or tracking',
    body: 'No telemetry SDK, no crash reporter, no advertising identifier, no third-party analytics of any kind is compiled into the app.',
  },
  {
    title: 'One network destination',
    body: 'The app talks to GitHub and nothing else — to read your repo, to push your commits, and to check for a new release.',
  },
  {
    title: 'Your credentials never leave the device',
    body: 'Your GitHub token is held in the Android Keystore-backed secure store and is sent only to GitHub, as the authorization header on your own requests.',
  },
];

/** Straight from AndroidManifest.xml — each row names why the app asks. */
const PERMISSIONS = [
  ['INTERNET', 'Contact GitHub to download your repo, push commits, and check for updates.'],
  ['USE_BIOMETRIC / USE_FINGERPRINT', 'Optional biometric app lock. Verification is performed by Android; Basalt receives only a pass/fail result and never sees a fingerprint or face.'],
  ['POST_NOTIFICATIONS', 'Optional local notification telling you a background sync finished. Scheduled on the device — there is no push service and no device token.'],
  ['VIBRATE', 'Haptic feedback on gestures and sync events.'],
  ['SYSTEM_ALERT_WINDOW', 'Used by the React Native development overlay. It is not used to display anything over other apps in normal use.'],
  ['READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE', 'Declared with maxSdkVersion="32" for legacy Android only. On Android 13+ these are not requested; the app writes solely to its own private storage.'],
];

export default function PrivacyPage() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="/">
            <Logo />
            Basalt
          </a>
          <nav className="nav-links">
            <a className="nav-hide" href="/">
              Home
            </a>
            <a className="nav-hide" href={REPO} target="_blank" rel="noreferrer">
              Source
            </a>
            <a className="btn btn-primary btn-sm" href={RELEASE} target="_blank" rel="noreferrer">
              <DownloadIcon size={15} />
              Download
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wrap section" style={{ paddingBottom: 0 }}>
          <div className="section-head">
            <div className="section-label">Privacy</div>
            <h2>Privacy Policy</h2>
            <p>
              Basalt is an offline-first notes app backed by a GitHub repository you own. It keeps no server, so there
              is no place for your data to go except your device and your repo.
            </p>
          </div>
          <p className="legal-meta">
            Last updated {UPDATED} · Applies to the Basalt Android app (<code>com.vishnuv.basalt</code>) and this site.
          </p>
        </section>

        <section className="wrap section" style={{ paddingTop: 48 }}>
          <div className="habits">
            {SUMMARY.map((s) => (
              <div className="habit" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap section legal" style={{ paddingTop: 0 }}>
          <h3>Who is responsible</h3>
          <p>
            Basalt is a free, open-source project published by <strong>kpndevroot</strong>. The complete source is at{' '}
            <a href={REPO} target="_blank" rel="noreferrer">
              github.com/kpndevroot/basalt
            </a>
            , so nothing in this policy has to be taken on trust — it can be read in the code.
          </p>

          <h3>What Basalt stores, and where</h3>
          <p>
            Everything below is stored <strong>locally on your device</strong>, in the app&rsquo;s private storage. None
            of it is transmitted to the developer or to any third party.
          </p>
          <ul>
            <li>
              <strong>Your notes.</strong> Markdown files and attachments from your repository, unpacked to app-private
              storage so they can be read and searched with the network off.
            </li>
            <li>
              <strong>A local index.</strong> A SQLite database holding file paths, a full-text search index, the
              link graph, tags and highlights — the minimum needed to find things quickly offline.
            </li>
            <li>
              <strong>Queued edits.</strong> Notes you write or change while offline, held on the device until they can
              be pushed to your repository as commits.
            </li>
            <li>
              <strong>Your settings.</strong> Theme, appearance, sync preferences and which vaults you have connected.
            </li>
            <li>
              <strong>Your GitHub credentials.</strong> A personal access token, or an OAuth token and refresh token,
              held in <code>expo-secure-store</code> — backed by the Android Keystore — and never in plain
              preferences. Public repositories store no credential at all.
            </li>
          </ul>

          <h3>What Basalt sends, and to whom</h3>
          <p>
            The app contacts exactly two hosts, both of them GitHub: <code>api.github.com</code> and{' '}
            <code>github.com</code>. It does so to:
          </p>
          <ul>
            <li>read the repository you connected, and download it at a specific commit;</li>
            <li>sign you in, if you choose GitHub&rsquo;s OAuth device flow instead of pasting a token;</li>
            <li>push the commits you have written; and</li>
            <li>check whether a newer release of Basalt exists.</li>
          </ul>
          <p>
            These are <em>your</em> requests to <em>your</em> account, authenticated with <em>your</em> token. Your use
            of GitHub is governed by{' '}
            <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">
              GitHub&rsquo;s Privacy Statement
            </a>
            . Like any service you connect to, GitHub can see the requests your device makes to it.
          </p>
          <div className="aside">
            <strong>There is no Basalt server.</strong> No copy of your notes, your token, your repository names or your
            usage ever reaches the developer, because there is nowhere for it to be sent. Removing the app removes the
            data.
          </div>

          <h3>What Basalt does not do</h3>
          <ul>
            <li>No analytics, telemetry, or usage statistics.</li>
            <li>No crash or error reporting to any third party.</li>
            <li>No advertising, ad identifiers, or ad networks.</li>
            <li>No selling or sharing of personal data — there is none to sell.</li>
            <li>No location, contacts, camera, microphone, or call-log access. The app never requests them.</li>
            <li>No user accounts, profiles, or sign-up.</li>
          </ul>

          <h3>Permissions, and why each one exists</h3>
          <div className="legal-table">
            {PERMISSIONS.map(([name, why]) => (
              <div className="legal-row" key={name}>
                <code>{name}</code>
                <span>{why}</span>
              </div>
            ))}
          </div>

          <h3>Sensitive data and device security</h3>
          <p>
            Your notes may contain anything you choose to write, so Basalt treats the whole vault as sensitive. Note
            content is held in app-private storage, which other apps on a non-rooted device cannot read, and your
            GitHub token is kept in hardware-backed secure storage rather than alongside ordinary settings. You can
            additionally require a biometric or device-credential unlock before Basalt will open.
          </p>
          <p>
            No security measure is absolute: a rooted or compromised device, or a device unlocked by someone else, can
            expose data that the operating system would otherwise protect.
          </p>

          <h3>Deleting your data</h3>
          <p>
            Because nothing is stored off-device, deletion is entirely in your hands. In{' '}
            <strong>Settings</strong> you can disconnect a vault — which erases its downloaded files, its index and its
            stored token — or reset the app completely. Uninstalling Basalt removes all of it.
          </p>
          <p>
            Data already pushed to your GitHub repository is yours and remains there; delete it through GitHub, and
            revoke Basalt&rsquo;s token at any time from your GitHub developer settings.
          </p>

          <h3>Children</h3>
          <p>
            Basalt is a general-purpose notes tool and is not directed at children. It collects no personal data from
            anyone, of any age.
          </p>

          <h3>This website</h3>
          <p>
            This page is a static site with no cookies, no analytics and no third-party scripts. Fonts are self-hosted
            at build time, so viewing it makes no request to any other company.
          </p>

          <h3>Changes to this policy</h3>
          <p>
            If the app&rsquo;s data handling changes, this page changes with it and the date at the top is updated.
            Because the policy tracks the source, the commit history of the repository is itself a record of what
            changed and when.
          </p>

          <h3>Contact</h3>
          <p>
            Questions about privacy, or a suspected problem with it, are best raised as an issue at{' '}
            <a href={ISSUES} target="_blank" rel="noreferrer">
              github.com/kpndevroot/basalt/issues
            </a>
            . For security reports, please follow the disclosure process in the repository&rsquo;s{' '}
            <a href={`${REPO}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer">
              SECURITY.md
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="brand" style={{ fontSize: 15 }}>
            <Logo size={20} />
            Basalt
          </span>
          <span>Your markdown repo, on your phone. Works with Obsidian vaults.</span>
          <a href={REPO} target="_blank" rel="noreferrer">
            <GithubIcon size={14} /> github.com/kpndevroot/basalt
          </a>
        </div>
      </footer>
    </>
  );
}
