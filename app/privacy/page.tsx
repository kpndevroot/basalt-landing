import type { Metadata } from 'next';

import { DownloadIcon, GithubIcon, Logo } from '@/components/icons';

const REPO = 'https://github.com/kpndevroot/basalt';
const RELEASE = 'https://github.com/kpndevroot/basalt/releases/latest';
const ISSUES = 'https://github.com/kpndevroot/basalt/issues';

/**
 * Play requires a *stable, publicly reachable* policy URL on the listing, and reviewers check that
 * the page's claims match the APK's manifest and its actual network behaviour. So every statement
 * here is one that can be checked against the source: the permission list is
 * `android/app/src/main/AndroidManifest.xml` verbatim, and "on by default, no note content, one tap
 * to turn off" is a claim about `src/crash/index.ts` and the settings toggle guarding it — both
 * readable in the repo, not taken on trust.
 */
const UPDATED = '19 August 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy — Basalt',
  description:
    'Basalt has no servers and no accounts. Your vault and your GitHub credentials stay on your device. Crash reports are on by default, never include note content, and can be turned off in one tap.',
  alternates: { canonical: '/privacy/' },
};

/** The claim the whole page rests on, stated once, up front, in the language Play's form uses. */
const SUMMARY = [
  {
    title: 'No data is collected',
    body: 'Basalt has no backend. There is no Basalt account, no server that receives your notes, and no operator-side copy of anything you write.',
  },
  {
    title: 'No ads, no tracking, no accounts',
    body: 'No advertising identifier, no third-party analytics, no user accounts. Basalt ships a crash reporter, on by default and detailed below \u2014 turn it off any time in Settings.',
  },
  {
    title: 'GitHub, plus crash reports unless you turn them off',
    body: 'The app talks to GitHub to read your repo, push your commits, and check for a new release. It also talks to Google\u2019s Crashlytics service to report crashes, by default \u2014 turned off in one tap in Settings, and never with your notes either way.',
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
            Basalt is a free app published by <strong>kpndevroot</strong>. It is developed privately, so the claims
            below are commitments about how the app behaves rather than something you can verify by reading the
            source. Everything they describe is observable from the outside: the app talks to the two hosts named
            above and to nothing else.
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
            By default the app contacts exactly two hosts, both of them GitHub: <code>api.github.com</code> and{' '}
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

          <h3>Crash reports</h3>
          <p>
            Basalt sends crash reports to Google&rsquo;s Crashlytics service, so problems can be found and fixed. This
            is <strong>on by default</strong>, and you can turn it off at any time in{' '}
            <strong>Settings &rarr; Privacy</strong> &mdash; the app stops reporting the moment you do.
          </p>
          <p>
            When it is on, a report contains the app version, the device model and OS version, and where in the code
            the problem happened. It never contains a note&rsquo;s content, a file path, a repository or owner name,
            or a GitHub token &mdash; the code that builds each report only accepts a fixed set of non-identifying
            values, so there is no path by which those could leak into one. Turning the setting back off stops
            reporting immediately. Reports already sent can be deleted by request; see Contact below.
          </p>
          <p>
            This is the one exception to &ldquo;GitHub and nothing else&rdquo; above. It is on by default so problems
            are caught without asking anything of you first, and it is one tap to switch off if you would rather it
            were not.
          </p>

          <h3>What Basalt does not do</h3>
          <ul>
            <li>No analytics, telemetry, or usage statistics.</li>
            <li>No advertising, ad identifiers, or ad networks.</li>
            <li>No selling or sharing of personal data — there is none to sell.</li>
            <li>No location, contacts, camera, microphone, or call-log access. The app never requests them.</li>
            <li>No user accounts, profiles, or sign-up.</li>
            <li>No note content, file path, repository or owner name in a crash report, ever \u2014 that holds whether reporting is on or off.</li>
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
            The date is the record: a policy that has not moved is one whose behaviour has not moved either.
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
