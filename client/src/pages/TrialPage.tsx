import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

/**
 * /trial — a single-purpose, shareable landing "poster" built for WhatsApp
 * forwarding. Standalone (no site header/footer) so the whole card reads in one
 * screen on a phone. Buttons deep-link to the trial booking form, the site, and
 * a pre-filled email. Light-only by design, matching the site's light theme.
 *
 * All styles are scoped under `.tp-root` so they never leak into global CSS.
 */
const CSS = `
.tp-root {
  --ground: #EAF1FB;
  --card: #FFFFFF;
  --ink: #0F2350;
  --ink-soft: #5A6B8C;
  --line: #DCE6F3;
  --blue: #1E40AF;
  --blue-deep: #17307E;
  --blue-bright: #3B82F6;
  --cyan: #22D3EE;
  --gold: #FBBF24;
  --gold-soft: #FEF4DA;
  --gold-line: #F3D391;
  --shadow: 24px 26px 60px rgba(15,35,80,.14);
  background: var(--ground);
  color: var(--ink);
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 28px 16px 44px;
  box-sizing: border-box;
}
.tp-root *, .tp-root *::before, .tp-root *::after { box-sizing: border-box; }

.tp-root .poster {
  width: 100%;
  max-width: 500px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
  overflow: hidden;
  align-self: flex-start;
}

.tp-root .brandbar { display: flex; align-items: center; gap: 12px; padding: 20px 30px 18px; }
.tp-root .brandbar img { width: 46px; height: 46px; object-fit: contain; }
.tp-root .wordmark {
  font-weight: 800; font-size: 24px; letter-spacing: -.02em; line-height: 1;
  background: linear-gradient(90deg, var(--blue-bright), var(--cyan));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: var(--blue-bright);
}
.tp-root .slogan {
  font-size: 12.5px; font-weight: 600; font-style: italic;
  letter-spacing: .01em; margin-top: 4px;
  background: linear-gradient(90deg, var(--blue-bright), var(--cyan));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: var(--blue-bright);
}

.tp-root .top {
  background:
    radial-gradient(130% 120% at 92% -20%, rgba(34,211,238,.30), transparent 55%),
    linear-gradient(150deg, var(--blue-deep), var(--blue));
  color: #fff;
  padding: 26px 30px 28px;
}
.tp-root .eyebrow {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.30);
  color: #fff; font-weight: 700; font-size: 11px; letter-spacing: .04em;
  text-transform: uppercase; padding: 6px 13px; border-radius: 999px;
  margin-bottom: 15px;
}
.tp-root h1 {
  font-weight: 800; font-size: clamp(25px, 6.6vw, 31px);
  letter-spacing: -.02em; line-height: 1.14; text-wrap: balance; margin: 0 0 10px;
}
.tp-root h1 em { font-style: normal; color: #FDE9BB; }
.tp-root .sub { font-size: 14.5px; color: rgba(255,255,255,.92); margin: 0; max-width: 42ch; }
.tp-root .creds { display: flex; border-top: 1px solid rgba(255,255,255,.18); margin-top: 20px; }
.tp-root .creds div { flex: 1; padding: 15px 6px 0; text-align: center; }
.tp-root .creds div + div { border-left: 1px solid rgba(255,255,255,.18); }
.tp-root .creds b { display: block; font-size: 21px; font-weight: 800; color: #fff; letter-spacing: -.01em; }
.tp-root .creds span { font-size: 10.5px; letter-spacing: .05em; color: rgba(255,255,255,.8); text-transform: uppercase; }

.tp-root .body { padding: 24px 30px 12px; }
.tp-root .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.tp-root .chip {
  font-weight: 700; font-size: 13px; padding: 7px 15px; border-radius: 999px;
  background: rgba(30,64,175,.10); color: var(--blue); border: 1px solid rgba(30,64,175,.20);
}
.tp-root .chip.grade { background: transparent; color: var(--ink-soft); font-weight: 600; border-color: var(--line); }

.tp-root ul.feats { list-style: none; margin: 0 0 22px; padding: 0; }
.tp-root ul.feats li {
  display: flex; align-items: flex-start; gap: 11px; padding: 9px 0;
  border-bottom: 1px dashed var(--line); font-size: 14.5px; color: var(--ink);
}
.tp-root ul.feats li:last-child { border-bottom: 0; }
.tp-root ul.feats svg { flex: none; margin-top: 1px; }
.tp-root ul.feats b { font-weight: 700; }

.tp-root .trial {
  display: flex; align-items: center; gap: 14px;
  background: var(--gold-soft); border: 1px solid var(--gold-line);
  border-radius: 16px; padding: 15px 18px; margin-bottom: 18px;
}
.tp-root .trial .gift {
  flex: none; width: 42px; height: 42px; border-radius: 12px;
  background: var(--gold); color: #4A2F00; display: grid; place-items: center; font-size: 22px;
}
.tp-root .trial b { font-size: 16px; font-weight: 800; display: block; color: var(--ink); }
.tp-root .trial span { font-size: 12.5px; color: var(--ink-soft); }

.tp-root .proof { text-align: center; font-size: 13.5px; color: var(--ink-soft); margin: 0 0 22px; }
.tp-root .proof b { color: var(--ink); }
.tp-root .stars { color: var(--gold); letter-spacing: 2px; font-size: 15px; }

.tp-root .cta { display: flex; flex-direction: column; gap: 10px; }
.tp-root .btn {
  display: flex; align-items: center; justify-content: center; gap: 9px;
  text-decoration: none; font-weight: 700; font-size: 16px; cursor: pointer;
  padding: 15px 20px; border-radius: 14px; border: 1.5px solid transparent;
  transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
}
.tp-root .btn:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }
.tp-root .btn-primary { background: var(--blue); color: #fff; box-shadow: 0 8px 20px rgba(30,64,175,.34); }
.tp-root .btn-primary:hover { background: var(--blue-deep); transform: translateY(-1px); }
.tp-root .row2 { display: flex; gap: 10px; }
.tp-root .row2 .btn { flex: 1; font-size: 14.5px; padding: 13px 12px; }
.tp-root .btn-ghost { background: transparent; color: var(--blue); border-color: var(--line); }
.tp-root .btn-ghost:hover { border-color: var(--blue); transform: translateY(-1px); }

.tp-root .foot {
  text-align: center; padding: 18px 20px 24px; font-size: 12.5px;
  color: var(--ink-soft); border-top: 1px solid var(--line); margin-top: 6px;
}
.tp-root .foot a { color: var(--blue); font-weight: 700; text-decoration: none; }

@media (prefers-reduced-motion: reduce) { .tp-root .btn { transition: none; } }
`;

const CHECK = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#15803D" />
    <path d="M6 10.5l2.5 2.5L14.5 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EMAIL_HREF =
  "mailto:info@eduversejr.com?subject=" +
  encodeURIComponent("Free trial class — EduVerseJr") +
  "&body=" +
  encodeURIComponent(
    "Hi EduVerseJr,\n\nI'd like to book a free trial class.\n\nChild's grade: \nSubject: \nState: \nPreferred timing: \n\nThank you!"
  );

export default function TrialPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tp-root">
      <Helmet>
        <title>Free Trial Class — EduVerseJr Female Expert Teachers</title>
        <meta
          name="description"
          content="Book a free trial class with an experienced female online teacher — live 1-on-1 Maths, Science & Coding for US students, Grades 5–10. No payment, no credit card."
        />
        <link rel="canonical" href="https://eduversejr.com/trial" />
        <meta property="og:image" content="https://eduversejr.com/trial-og.jpg?v=1" />
        <meta name="twitter:image" content="https://eduversejr.com/trial-og.jpg?v=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="poster">
        <div className="brandbar">
          <img src="/logo.jpg" alt="EduVerseJr logo" width={46} height={46} />
          <div>
            <div className="wordmark">EduVerseJr</div>
            <div className="slogan">Explore Your Learning Universe</div>
          </div>
        </div>

        <div className="top">
          <span className="eyebrow">👩‍🏫 Female Expert Online Teacher · US · Grade 5–10</span>
          <h1>
            A real teacher who knows your child <em>by name</em>.
          </h1>
          <p className="sub">
            Live 1-on-1 online classes with experienced, caring female teachers — taught to your
            child's US school curriculum.
          </p>

          <div className="creds">
            <div>
              <b>10+</b>
              <span>Years each</span>
            </div>
            <div>
              <b>1&nbsp;:&nbsp;1</b>
              <span>Private</span>
            </div>
            <div>
              <b>5–10</b>
              <span>Grades</span>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="chips">
            <span className="chip">Mathematics</span>
            <span className="chip">Science</span>
            <span className="chip">Coding</span>
            <span className="chip grade">Grades 5–10</span>
          </div>

          <ul className="feats">
            <li>
              {CHECK}
              <span>
                <b>The same teacher every session</b> — real rapport, never a random pool.
              </span>
            </li>
            <li>
              {CHECK}
              <span>
                Post-graduate qualified &amp; background-verified, trained in <b>US curriculum</b>.
              </span>
            </li>
            <li>
              {CHECK}
              <span>
                Direct WhatsApp with the teacher + a <b>progress report</b> for you.
              </span>
            </li>
            <li>
              {CHECK}
              <span>
                Flexible timings — <b>you pick the slot</b>, we adjust around it.
              </span>
            </li>
          </ul>

          <div className="trial">
            <span className="gift">🎁</span>
            <div>
              <b>Free trial class</b>
              <span>No payment · no credit card · no commitment</span>
            </div>
          </div>

          <p className="proof">
            <span className="stars">★★★★★</span>
            <br />
            Trusted by <b>families across multiple US states</b>
          </p>

          <div className="cta">
            <a className="btn btn-primary" href="https://eduversejr.com/teachers">
              📅&nbsp; Book a Free Trial
            </a>
            <div className="row2">
              <a className="btn btn-ghost" href="https://eduversejr.com">
                🌐 Website
              </a>
              <a className="btn btn-ghost" href={EMAIL_HREF}>
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="foot">
          <a href="https://eduversejr.com">eduversejr.com</a> &nbsp;·&nbsp; Live online tutoring ·
          Grades 5–10
        </div>
      </div>
    </div>
  );
}
