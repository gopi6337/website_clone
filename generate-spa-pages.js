import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html (shared template)
const indexHtmlPath = path.join(__dirname, 'dist', 'public', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// ─────────────────────────────────────────────────────────────────────
// SEO body-content template — builds a visible <section> block that is
// injected INSIDE <div id="root"> in the static HTML. Googlebot reads it
// from raw HTML (no JS execution needed). When React mounts via
// createRoot().render(), this content is replaced by the actual app UI,
// so real users only see it for the brief pre-hydration paint.
// ─────────────────────────────────────────────────────────────────────
function renderSeoBlock({ h1, intro, sections = [], faqs = [], links = [] }) {
  const sectionsHtml = sections
    .map((s) => `<section><h2>${s.h2}</h2><p>${s.p}</p></section>`)
    .join('\n      ');
  const faqsHtml = faqs.length
    ? `<section aria-labelledby="faq-heading"><h2 id="faq-heading">Frequently Asked Questions</h2>${faqs
        .map((f) => `<div><h3>${f.q}</h3><p>${f.a}</p></div>`)
        .join('')}</section>`
    : '';
  const linksHtml = links.length
    ? `<nav aria-label="Related pages"><h2>Explore more</h2><ul>${links
        .map((l) => `<li><a href="${l.href}">${l.label}</a></li>`)
        .join('')}</ul></nav>`
    : '';
  return `<div id="seo-prerender" style="max-width:900px;margin:0 auto;padding:24px;font-family:system-ui,-apple-system,sans-serif;color:#1f2937;line-height:1.65">
      <h1 style="font-size:28px;margin:0 0 16px">${h1}</h1>
      ${intro.map((p) => `<p>${p}</p>`).join('\n      ')}
      ${sectionsHtml}
      ${faqsHtml}
      ${linksHtml}
    </div>`;
}

// ─────────────────────────────────────────────────────────────────────
// Top-level pages — one entry per app route (relative to site root)
// ─────────────────────────────────────────────────────────────────────
const topLevelMeta = {
  'reva': {
    title: 'Reva AI Teacher — 24/7 AI Maths Tutor for Grades 5–12 | EduVerseJr',
    description: 'Meet Reva, your child\'s 24/7 AI maths teacher. Chat, voice, whiteboard, smart practice and progress tracking for Grades 5–12 + PSAT/SAT. Currently in private beta — join the waitlist.',
    ogTitle: 'Reva AI Teacher — 24/7 AI Maths Tutor | EduVerseJr',
    ogDesc: 'AI maths teacher for Grades 5–12. Chat, voice, interactive whiteboard, smart practice, progress tracking. Private beta — join the waitlist.',
    bodyContent: renderSeoBlock({
      h1: 'Reva AI Teacher — 24/7 AI Maths Tutor for Grades 5–12',
      intro: [
        'Reva is EduVerseJr\'s AI maths teacher, available around the clock for students in Grades 5–12 as well as PSAT and SAT preparation. Built specifically for school-age learners, Reva explains concepts step-by-step, shows working on an interactive whiteboard, listens to spoken questions, and adapts each lesson to the country curriculum your child follows.',
        'Unlike a generic chatbot, Reva is grounded in textbook-aligned content for the United States (Common Core), United Kingdom (GCSE / National Curriculum), Canada, Australia (ACARA), Singapore (MOE) and the United Arab Emirates (MOE UAE). Students can ask questions in plain English, sketch their attempts on the whiteboard, or upload a photo of a maths problem and Reva will work through it with them.',
      ],
      sections: [
        {
          h2: 'What can Reva do?',
          p: 'Reva supports five core modes: Learn (proactive teaching with 5-card lessons), Whiteboard (sketch + visual explanations with AI voice), Practice (graded problems with hints), Revision (sessionless slide-flipper to review any topic) and Ask Reva (free-text or voice Q&A). All modes work across maths topics from arithmetic and fractions through to algebra, geometry, trigonometry, calculus foundations and SAT-style word problems.',
        },
        {
          h2: 'How is Reva different from ChatGPT?',
          p: 'Reva is restricted to age-appropriate, curriculum-aligned maths content. It does not free-roam across general internet topics. Every Learn lesson is reviewed against the student\'s country textbook before being shown. Parents receive content moderation alerts. Reva also remembers the student\'s past topics, struggles and recent practice across sessions — a generic chatbot cannot.',
        },
        {
          h2: 'Pricing & access',
          p: 'Reva AI is currently in private beta. A free tier (10 messages/day, Chapter 1 of each course) is planned at public launch, along with paid tiers that unlock unlimited messages, full chapters, whiteboard interactive mode and voice practice. Join the waitlist on this page to be notified.',
        },
      ],
      faqs: [
        { q: 'What grades does Reva AI support?', a: 'Grades 5 through 12, plus PSAT and SAT preparation. Science and Coding subjects are on the roadmap.' },
        { q: 'Which curricula does Reva follow?', a: 'US Common Core, UK GCSE / National Curriculum, Canadian provincial curricula, Australian ACARA, Singapore MOE and UAE MOE.' },
        { q: 'Is Reva safe for children?', a: 'Yes. Reva runs through a content moderation pipeline, has parent-visible violation alerts, and is restricted to maths topics. Under-18 students must use a parent-supervised account.' },
        { q: 'Does Reva replace a human teacher?', a: 'No. Reva is an always-on AI maths tutor for daily practice, homework help and revision. For exam-prep coaching, doubt-solving over video, and personalised pedagogy, EduVerseJr also offers live 1-to-1 expert human teachers.' },
        { q: 'How much does it cost?', a: 'Reva is in private beta — no public pricing yet. The plan is a free tier (10 messages/day, limited chapters) plus paid tiers for unlimited use and premium features.' },
      ],
      links: [
        { href: '/teachers', label: 'Book a free trial class with an expert human teacher' },
        { href: '/courses', label: 'See all Maths, Science & Coding courses' },
        { href: '/curriculum/united-states', label: 'US Math curriculum guide' },
        { href: '/curriculum/united-kingdom', label: 'UK Maths curriculum guide' },
        { href: '/about', label: 'About EduVerseJr' },
      ],
    }),
  },
  'psat': {
    title: 'PSAT Prep — PSAT 8/9 & NMSQT for Grades 8–11 | EduVerseJr',
    description: 'Digital PSAT 8/9 (Grades 8–9) and PSAT/NMSQT (Grades 10–11) prep by Reva AI. Adaptive practice tests, per-skill weakness map, and a state-by-state National Merit Scholarship cutoff calculator. Standalone $49/yr or bundled with SAT Prep. Coming soon — join the waitlist.',
    ogTitle: 'PSAT Prep — Reva AI by EduVerseJr | PSAT 8/9 & NMSQT',
    ogDesc: 'Adaptive digital PSAT 8/9 and PSAT/NMSQT prep with a state-by-state National Merit cutoff calculator. Standalone $49/yr or bundled with SAT Prep. Coming soon — join the waitlist.',
    bodyContent: renderSeoBlock({
      h1: 'PSAT Prep by Reva AI — PSAT 8/9 & PSAT/NMSQT for Grades 8–11',
      intro: [
        'EduVerseJr\'s Reva AI now extends to PSAT preparation. We offer two products: PSAT 8/9 for Grades 8–9 (the low-stakes intro to the digital SAT format) and PSAT/NMSQT for Grades 10–11 (the scholarship-qualifying test). Both are built on the same Reva AI tutor engine that powers our SAT Math preparation.',
        'What sets us apart: a state-by-state National Merit Scholarship cutoff calculator. National Merit Selectivity Index cutoffs vary by approximately 14 points across U.S. states — a 219 in West Virginia qualifies for Semifinalist while the same score falls short in California or New Jersey. Most prep platforms quote a single national number; Reva tells you exactly what you need for YOUR state.',
      ],
      sections: [
        {
          h2: 'PSAT 8/9 — Grades 8–9 ($49/year standalone, or included with G8/G9 annual plan)',
          p: 'PSAT 8/9 is the low-stakes introductory test that familiarises students with the digital SAT format before high school. Reva includes two full digital PSAT 8/9 practice tests (44 Reading & Writing items + 44 Math items across two adaptive modules each), per-skill score reports, and Reva AI explanations on every wrong answer via interactive whiteboard.',
        },
        {
          h2: 'PSAT/NMSQT — Grades 10–11 (bundled with every SAT Prep plan)',
          p: 'PSAT/NMSQT is the test that qualifies students for the National Merit Scholarship. Reva PSAT/NMSQT prep includes the full digital simulation, a Selectivity Index score predictor tuned to your state, and the National Merit cutoff calculator (Commended / Semifinalist / Finalist thresholds). PSAT/NMSQT skills map directly to SAT skills — students who continue to SAT prep keep all their weakness data and tutor history.',
        },
        {
          h2: 'National Merit Scholarship cutoff calculator',
          p: 'Our state-by-state National Merit calculator takes your state of residence, current practice score, and target percentile (Commended / Semifinalist / Finalist) and tells you exactly how many points you need to add. Cutoffs are refreshed annually from College Board public releases. This is the unique wedge — no AI prep platform currently offers state-specific National Merit guidance.',
        },
        {
          h2: 'What\'s included in every PSAT plan',
          p: 'Full digital simulation (two 35-minute R&W modules + two 35-minute Math modules, adaptive); Reva AI tutor on every question with live whiteboard explanations; per-skill weakness map (Algebra, Advanced Math, Information & Ideas, Standard English Conventions); score predictor with ±30 point accuracy after 2 practice tests; clear upgrade path to full SAT prep; original AI-generated items modelled on College Board\'s published specification (no Bluebook scrapes, public-domain passages only).',
        },
        {
          h2: 'Pricing & access',
          p: 'PSAT 8/9 standalone plans are $49/year (single yearly plan — no monthly to keep it sticky). Students on G8 or G9 annual plans get PSAT 8/9 included at no extra cost. PSAT/NMSQT is bundled with every SAT Prep plan alongside the National Merit cutoff calculator. If you start with the $49/yr standalone and upgrade to a full G8 or G9 annual plan within 90 days, the PSAT fee is credited toward the upgrade. Both products are coming soon — no specific launch date is being promised in advance; join the waitlist for notification.',
        },
      ],
      faqs: [
        { q: 'What\'s the difference between PSAT 8/9 and PSAT/NMSQT?', a: 'PSAT 8/9 is the introductory test for Grades 8–9; it familiarises students with the digital SAT format before high school. PSAT/NMSQT is the Grade 10–11 test that also qualifies students for the National Merit Scholarship. Both are digital, adaptive, and structured exactly like the SAT (two modules each for Reading & Writing and Math).' },
        { q: 'Is PSAT prep included with my Reva subscription?', a: 'PSAT 8/9 prep is included for students on the Grade 8 or Grade 9 annual plan. PSAT/NMSQT prep is bundled with every SAT Prep plan (Grades 10–11). Standalone PSAT 8/9 is $49/year for parents who want a low-commitment intro.' },
        { q: 'When does PSAT prep launch?', a: 'PSAT 8/9 and PSAT/NMSQT (with the National Merit Scholarship state cutoff calculator) are both coming soon. Join the waitlist to be notified the moment your child\'s tier opens — no specific date is being promised in advance.' },
        { q: 'What is the National Merit Scholarship cutoff calculator?', a: 'National Merit cutoffs differ by state, ranging from approximately 208 (Wyoming, West Virginia) to 222 (California, New Jersey). Our calculator takes your state, target percentile, and current practice scores and tells you exactly how many more points you need for Commended, Semifinalist, or Finalist status in YOUR state.' },
        { q: 'Does Reva use real College Board PSAT questions?', a: 'No — Reva uses original AI-generated practice items modelled on the official PSAT specification, plus a curated set of public-domain reading passages. We do not scrape Bluebook or use any copyrighted College Board content. Our items follow the same difficulty bands and skill taxonomy that College Board publishes.' },
        { q: 'Can my child upgrade from PSAT 8/9 to a full G8–G10 plan?', a: 'Yes. If you start with the $49/yr PSAT 8/9 plan and upgrade to the full G8 or G9 annual plan within the first 90 days, the PSAT 8/9 fee is credited toward your upgrade. After 90 days the plan continues as standalone PSAT prep.' },
      ],
      links: [
        { href: '/reva', label: 'Meet Reva — the AI tutor behind PSAT prep' },
        { href: '/teachers', label: 'Live human PSAT coaching (coming soon)' },
        { href: '/#pricing', label: 'See full EduVerseJr pricing' },
        { href: '/curriculum/united-states', label: 'US Math curriculum guide' },
      ],
    }),
  },
  'about': {
    title: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    description: 'EduVerseJr is a hybrid learning platform combining Reva AI Teacher (24/7) with expert human teachers for live 1-to-1 Maths, Science and Coding classes for Grades 5–12.',
    ogTitle: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    ogDesc: 'Hybrid AI + human teaching for Grades 5–12 in Maths, Science and Coding. Aligned with US, UK, Canadian, Australian, Singapore and UAE curricula.',
    bodyContent: renderSeoBlock({
      h1: 'About EduVerseJr — AI Teacher + Human Teacher, Always There',
      intro: [
        'EduVerseJr is a hybrid education platform built around a simple idea: every child should have unlimited access to a patient, curriculum-aligned teacher — at any hour, in any timezone. We deliver that through two complementary products. Reva AI Teacher is available 24/7 for daily homework help, practice, revision and concept explanation. Expert human teachers run live 1-to-1 online classes for deeper coaching, exam preparation and pedagogical guidance.',
        'EduVerseJr was founded in 2026 by Revathi Gopinath (MSc, BEd), an experienced classroom teacher with over 10 years of experience teaching Mathematics and Coding to international students online. EduVerseJr is operated by an India-registered MSME based at D. No. 78, Gem Enclave, Maniyakarampalayam, Idikarai, Annoor Taluk, Coimbatore – 641022, Tamil Nadu, India. We serve students worldwide and our content is aligned with six national curricula: US Common Core, UK National Curriculum / GCSE, Canadian provincial standards, Australian ACARA, Singapore MOE and UAE MOE. Subjects currently cover Mathematics, Science and Coding for Grades 5 through 12, including PSAT and SAT preparation.',
      ],
      sections: [
        {
          h2: 'Founder & CEO',
          p: 'EduVerseJr is founded and led by Revathi Gopinath (MSc, BEd) — Founder & CEO. Revathi has over 10 years of experience teaching Mathematics and Coding to international students online, having taught on multiple online learning platforms before founding EduVerseJr in 2026 to combine her teaching expertise with AI. Contact: revathi.ceo@eduversejr.com · LinkedIn: https://www.linkedin.com/in/revathi-gopinath-3b598b412',
        },
        {
          h2: 'Company information',
          p: 'EduVerseJr is a registered India MSME based in Coimbatore, Tamil Nadu, India. Registered office: D. No. 78, Gem Enclave, Maniyakarampalayam, Idikarai, Annoor Taluk, Coimbatore – 641022. Phone: +91 422 4924192. Customer support: support@eduversejr.com. Business inquiries: info@eduversejr.com. Governing law: India.',
        },
        {
          h2: 'Our mission',
          p: 'To make high-quality 1-to-1 teaching affordable and accessible by combining the best of AI (always available, instant, personalised practice) with the best of human teachers (deep subject expertise, motivation, and pedagogical judgement). Reva handles the daily grind; humans handle the breakthroughs.',
        },
        {
          h2: 'How we build content',
          p: 'Every lesson Reva delivers is generated from textbook-aligned source material, reviewed by an AI review pipeline using strict confidence thresholds, and where needed escalated to human review. Real-world examples, whiteboard drawings and practice questions are all curated per country and per grade. This is why Reva sounds different from a general chatbot — it knows what your child is studying right now.',
        },
        {
          h2: 'Privacy & safety',
          p: 'EduVerseJr is COPPA-compliant for US users and GDPR-aware for UK/EU users. Under-18 accounts require parent supervision. All Reva conversations pass through a content moderation system with parent-visible violation alerts. Governing law is India.',
        },
      ],
      faqs: [
        { q: 'Who founded EduVerseJr?', a: 'EduVerseJr was founded in 2026 by Revathi Gopinath (MSc, BEd), an experienced classroom teacher with over 10 years of online teaching experience in Mathematics and Coding for international students.' },
        { q: 'Where is EduVerseJr based?', a: 'EduVerseJr is an India-registered MSME based at D. No. 78, Gem Enclave, Maniyakarampalayam, Idikarai, Annoor Taluk, Coimbatore – 641022, Tamil Nadu, India. Phone: +91 422 4924192. Governing law for all services is India. We serve students globally.' },
        { q: 'How do I contact EduVerseJr?', a: 'Customer support: support@eduversejr.com. Business and partnership inquiries: info@eduversejr.com. Founder & CEO Revathi Gopinath: revathi.ceo@eduversejr.com. Phone: +91 422 4924192.' },
        { q: 'Do you replace school teachers?', a: 'No. EduVerseJr supplements school learning — Reva for daily help, our human teachers for focused 1-to-1 coaching. We align with the same curriculum your child follows at school.' },
        { q: 'What grades and subjects do you cover?', a: 'Grades 5–12 for Reva AI Teacher (with PSAT/SAT prep). Grades 5–10 + PSAT/SAT for our live human teachers. Subjects: Mathematics, Science, Coding.' },
      ],
      links: [
        { href: '/reva', label: 'Meet Reva — your child\'s 24/7 AI maths teacher' },
        { href: '/teachers', label: 'Book a free trial with an expert human teacher' },
        { href: '/courses', label: 'See all courses' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-use', label: 'Terms of Use' },
      ],
    }),
  },
  'courses': {
    title: 'Courses — Maths, Science & Coding for Grades 5–12 | EduVerseJr',
    description: 'Live 1-to-1 online courses in Mathematics, Science and Coding for Grades 5–12. Curriculum aligned with US Common Core, UK National Curriculum, Canadian, Australian, Singapore MOE and UAE MOE standards.',
    ogTitle: 'Courses — Maths, Science & Coding | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes for Grades 5–12 in Maths, Science and Coding — aligned with six international curricula.',
    bodyContent: renderSeoBlock({
      h1: 'EduVerseJr Courses — Mathematics, Science & Coding for Grades 5–12',
      intro: [
        'EduVerseJr offers live 1-to-1 online courses with certified human teachers in Mathematics, Science and Coding for Grades 5 through 12. Every course is aligned with the curriculum your child follows at school — choose your country during signup and we map each topic to the relevant standards. Reva AI Teacher is included with every course so your child has 24/7 support between live sessions.',
        'Lessons run over a video call with a real teacher, an interactive whiteboard, and recorded session playback. Parents receive a topic-by-topic progress report after every session. We currently support students in the United States, United Kingdom, Canada, Australia, Singapore and the United Arab Emirates, with first-class scheduling across timezones.',
      ],
      sections: [
        {
          h2: 'Mathematics — Grades 5 to 12',
          p: 'Arithmetic, fractions, decimals, ratios and percentages (Grades 5–6); pre-algebra, basic geometry, integers (Grades 6–7); algebra I, linear functions, statistics (Grades 7–9); geometry, algebra II, trigonometry (Grades 9–10); pre-calculus and calculus foundations (Grades 11–12). PSAT and SAT Math preparation also available.',
        },
        {
          h2: 'Science — Grades 5 to 10',
          p: 'Earth & Space science, life science, basic physical science (Grades 5–6); chemistry, physics and biology basics (Grades 7–8); cell biology, mechanics, chemical reactions, ecology (Grades 9–10). NGSS (US), KS2–KS4 (UK), ACARA (Australia), MOE (Singapore, UAE) and Canadian provincial standards.',
        },
        {
          h2: 'Coding — Grades 5 to 10',
          p: 'Block-based programming (Scratch) for younger students; HTML/CSS and JavaScript for web foundations; Python for problem solving and beginner data analysis; introductory game and web app development projects. Each course produces a portfolio of real projects.',
        },
        {
          h2: 'Pricing & free trial',
          p: 'New students are eligible for a free trial class with a human teacher — book on the Teachers page. Reva AI Teacher offers a free tier (10 messages/day, Chapter 1 of each course) at launch with paid tiers for unlimited use. Full subscription pricing is confirmed at checkout.',
        },
      ],
      faqs: [
        { q: 'Can my child take Maths and Science together?', a: 'Yes. Many of our students take Maths + Science, or Maths + Coding, with the same teacher (where possible) for continuity.' },
        { q: 'Do you offer PSAT and SAT preparation?', a: 'Yes. Dedicated PSAT and SAT Math preparation courses are available for Grades 9–12 students. Practice tests, timing strategies and concept gap-filling.' },
        { q: 'How do I book a free trial?', a: 'Visit the Teachers page, choose your country and grade, and submit the form. We will email you within 24 hours to schedule your trial class.' },
        { q: 'What if my child needs to reschedule a class?', a: 'Classes can be rescheduled up to 12 hours in advance at no charge. Recordings are available for missed sessions.' },
      ],
      links: [
        { href: '/teachers', label: 'Book a free trial class with an expert human teacher' },
        { href: '/reva', label: 'Meet Reva — 24/7 AI maths teacher' },
        { href: '/curriculum/united-states', label: 'US Math Curriculum guide' },
        { href: '/curriculum/united-kingdom', label: 'UK Maths Curriculum guide' },
        { href: '/curriculum/singapore', label: 'Singapore Maths Curriculum guide' },
        { href: '/curriculum/uae', label: 'UAE Maths Curriculum guide' },
      ],
    }),
  },
  'teachers': {
    title: 'Expert Human Teachers — Live 1-to-1 Classes | EduVerseJr',
    description: 'Book a free trial class with our expert human teachers. Live 1-to-1 online Maths, Science and Coding lessons for Grades 5–10 + PSAT/SAT preparation. Curriculum aligned with six countries.',
    ogTitle: 'Expert Human Teachers — Book a Free Trial Class | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes with certified human teachers for Maths, Science, Coding (Grades 5–10) + PSAT/SAT prep. Book a free trial.',
    bodyContent: renderSeoBlock({
      h1: 'Expert Human Teachers — Live 1-to-1 Maths, Science & Coding Classes',
      intro: [
        'Book a free trial class with one of EduVerseJr\'s expert human teachers. We offer live 1-to-1 online classes in Mathematics, Science and Coding for students in Grades 5 through 10, plus dedicated PSAT and SAT Math preparation for Grades 9 through 12. All teachers are subject-certified, classroom-experienced, and trained in 1-to-1 online pedagogy.',
        'Classes run over video with an interactive whiteboard, real-time problem solving, and full session recording for parents to review. Every student also gets Reva AI Teacher for daily homework and practice between sessions. We support six curricula — US Common Core, UK National Curriculum / GCSE, Canadian provincial, Australian ACARA, Singapore MOE and UAE MOE — and schedule classes across timezones.',
      ],
      sections: [
        {
          h2: 'How the free trial works',
          p: 'Submit the form on this page with your child\'s grade, country and preferred subject. We will email back within 24 hours to confirm a 30–45 minute trial class slot. No payment required. After the trial you decide whether to continue with a regular schedule.',
        },
        {
          h2: 'Subjects & exam preparation',
          p: 'Mathematics (Grades 5–10) — full curriculum coverage from arithmetic through to algebra II, geometry and trigonometry. Science (Grades 5–10) — biology, chemistry, physics and earth science. Coding (Grades 5–10) — Scratch, HTML/CSS, JavaScript and Python. PSAT and SAT Math preparation for Grades 9–12 with timed practice tests.',
        },
        {
          h2: 'What parents get',
          p: 'After every session: a topic-by-topic progress report, homework recommendations, and the session recording. Parents can also see Reva AI usage between sessions — what topics the student asked about, what they got stuck on, and what they mastered.',
        },
      ],
      faqs: [
        { q: 'How much does a class cost?', a: 'The first trial class is free. Regular pricing is confirmed at signup and varies by country and class frequency. Discounts are available for multi-subject and weekly packages.' },
        { q: 'Can I choose my teacher?', a: 'After the trial class we recommend a teacher match based on subject, learning style and timezone. You can request a different teacher at any time.' },
        { q: 'What software do you use?', a: 'Classes run in our own video-and-whiteboard platform — no downloads needed. Works on Chrome, Edge, Safari and any modern browser. iPad with stylus also supported.' },
        { q: 'Do you teach PSAT and SAT?', a: 'Yes — dedicated SAT Math and PSAT prep courses. Includes timed practice tests, score reports, and personalised concept-gap closure.' },
      ],
      links: [
        { href: '/reva', label: 'Try Reva — your child\'s 24/7 AI maths teacher' },
        { href: '/courses', label: 'See all subjects and grade levels' },
        { href: '/curriculum/united-states', label: 'US curriculum guide' },
        { href: '/curriculum/united-kingdom', label: 'UK curriculum guide' },
        { href: '/about', label: 'About EduVerseJr' },
      ],
    }),
  },
  'privacy-policy': {
    title: 'Privacy Policy | EduVerseJr',
    description: 'How EduVerseJr collects, uses and protects student and parent data. COPPA-compliant, GDPR-aware. Governed under Indian law.',
    ogTitle: 'Privacy Policy — EduVerseJr',
    ogDesc: 'Our privacy practices for students, parents and Reva AI users. COPPA + GDPR aligned.',
    bodyContent: renderSeoBlock({
      h1: 'EduVerseJr Privacy Policy',
      intro: [
        'This Privacy Policy explains how EduVerseJr (an India-registered MSME based in Coimbatore, Tamil Nadu) collects, uses, stores and protects personal data when you use our website, the Reva AI Teacher service, or our live 1-to-1 teaching classes. We are designed to be COPPA-compliant for US users under 13 and GDPR-aware for users in the United Kingdom and European Union.',
        'The full, current Privacy Policy is rendered by our web application below. The summary below highlights the most important points. If you have specific privacy questions, please contact us through the form on our Teachers page.',
      ],
      sections: [
        {
          h2: 'What we collect',
          p: 'Account data (name, email, country, grade, parent contact for under-18 accounts), learning activity (lessons viewed, topics asked, practice attempts), and chat transcripts with Reva AI. We do not collect biometric data, precise location, or payment card data (payments are processed by third-party processors).',
        },
        {
          h2: 'Children\'s privacy (COPPA & GDPR-K)',
          p: 'Under-18 accounts must be created and supervised by a parent. We do not knowingly collect data from children under 13 without verifiable parent consent. Parents have the right to review, export and delete their child\'s data at any time.',
        },
        {
          h2: 'AI processing',
          p: 'Reva AI Teacher uses third-party large language model providers to generate explanations. Chat content may be processed by these providers to deliver responses, subject to their data-handling terms. We do not sell or share student data for advertising.',
        },
        {
          h2: 'Your rights',
          p: 'You can request access, correction, export or deletion of your data at any time. Governing law is India. For EU/UK users we honour applicable GDPR rights including the right to object to processing and to lodge a complaint with your local supervisory authority.',
        },
      ],
      faqs: [
        { q: 'Do you sell student data?', a: 'No. We never sell student data and we do not use student data to target advertising.' },
        { q: 'How long do you keep data?', a: 'Account and learning data are kept while the account is active. After account deletion we retain only what is required by law (e.g. tax records) for the legally mandated period.' },
        { q: 'How do I delete my child\'s account?', a: 'A parent can request full deletion from the account settings page or by contacting us. We will confirm and complete deletion within 30 days.' },
      ],
      links: [
        { href: '/terms-of-use', label: 'Terms of Use' },
        { href: '/disclaimer', label: 'Disclaimer' },
        { href: '/about', label: 'About EduVerseJr' },
      ],
    }),
  },
  'terms-of-use': {
    title: 'Terms of Use | EduVerseJr',
    description: 'Terms governing the use of EduVerseJr services, Reva AI Teacher and live human teaching classes. India-governed jurisdiction.',
    ogTitle: 'Terms of Use — EduVerseJr',
    ogDesc: 'Terms governing use of EduVerseJr and Reva AI Teacher. India jurisdiction.',
    bodyContent: renderSeoBlock({
      h1: 'EduVerseJr Terms of Use',
      intro: [
        'These Terms of Use govern your use of EduVerseJr\'s website, the Reva AI Teacher service, and our live 1-to-1 online teaching classes. EduVerseJr is operated by an India-registered MSME based in Coimbatore, Tamil Nadu. By creating an account or using any service you accept these terms.',
        'The complete legal text is rendered by our web application below. The summary on this page covers the key points: account rules, payment, refunds, intellectual property, AI content disclaimers and jurisdiction.',
      ],
      sections: [
        {
          h2: 'Who can use EduVerseJr',
          p: 'Students of any age may use the platform under direct parent supervision. All accounts for users under 18 must be created and managed by a parent or legal guardian. The parent is responsible for the child\'s use of the service.',
        },
        {
          h2: 'Reva AI Teacher — content disclaimer',
          p: 'Reva is an AI teacher. While we ground responses in curriculum-aligned content and run a content review pipeline, AI-generated explanations may occasionally contain errors. Parents and students should verify critical exam-prep material against official school resources.',
        },
        {
          h2: 'Payments, subscriptions & refunds',
          p: 'Subscription terms (including refunds) are disclosed at checkout. Live class packages are billed in advance. Cancellations are accepted up to 12 hours before each class. Refund eligibility is shown clearly during purchase.',
        },
        {
          h2: 'Jurisdiction',
          p: 'These terms are governed by the laws of India. Any disputes are subject to the courts of Coimbatore, Tamil Nadu. For EU/UK users, applicable consumer protection laws are preserved.',
        },
      ],
      faqs: [
        { q: 'Is there a money-back guarantee?', a: 'Refund eligibility for each plan is shown at checkout. Trial classes are free; live class packages have a defined cancellation window.' },
        { q: 'Who owns lesson content?', a: 'EduVerseJr retains ownership of lesson materials. Students may use materials for their personal learning only.' },
      ],
      links: [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/disclaimer', label: 'Disclaimer' },
        { href: '/about', label: 'About EduVerseJr' },
      ],
    }),
  },
  'disclaimer': {
    title: 'Disclaimer | EduVerseJr',
    description: 'Important disclosures on AI-generated content, parent supervision, generic AI naming and platform limitations.',
    ogTitle: 'Disclaimer — EduVerseJr',
    ogDesc: 'Disclosures on AI-generated content and parent supervision for EduVerseJr and Reva AI Teacher.',
    bodyContent: renderSeoBlock({
      h1: 'EduVerseJr Disclaimer',
      intro: [
        'This page covers important disclosures about EduVerseJr — particularly around our Reva AI Teacher service, parent supervision expectations, and the limits of AI-generated educational content.',
        'EduVerseJr provides supplementary learning support. We do not replace your child\'s school, official examinations, or formal accreditation. Use our services in conjunction with — not instead of — your school curriculum.',
      ],
      sections: [
        {
          h2: 'AI-generated content',
          p: 'Reva AI Teacher generates explanations, worked examples, practice problems and visual aids using large language models. Even with strict content review, AI may occasionally produce incorrect, outdated or context-inappropriate content. Always cross-check critical exam-prep material against official school resources, textbooks or your teacher.',
        },
        {
          h2: 'Parent supervision',
          p: 'For all users under 18, EduVerseJr expects a parent or legal guardian to set up the account and supervise use. Reva conversations pass through a content moderation system with parent-visible violation alerts, but adult supervision remains essential.',
        },
        {
          h2: 'Naming and branding',
          p: 'The Reva AI Teacher product name and persona are EduVerseJr trademarks. Our AI is powered by third-party large language model providers; specific providers may change over time. We do not represent that any single LLM brand powers Reva exclusively.',
        },
      ],
      faqs: [
        { q: 'Can I rely on Reva for school exams?', a: 'Use Reva as a study aid, not the sole source of truth. Always check key facts against your official textbook or teacher.' },
        { q: 'Why does Reva sometimes get answers wrong?', a: 'Reva is an AI. Even with review pipelines, occasional errors occur — particularly on edge cases, niche curriculum variants, or new content areas. Report errors via the in-app feedback so we can fix them.' },
      ],
      links: [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-use', label: 'Terms of Use' },
        { href: '/about', label: 'About EduVerseJr' },
      ],
    }),
  },
};

// ─────────────────────────────────────────────────────────────────────
// Math curriculum pages — one entry per country slug
// ─────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────
// Country-specific curriculum content helper. Produces a consistent
// structure across all 6 math (and 6 science) country pages — H1, intro,
// grade-by-grade topic list, FAQ and cross-links — driven by per-country
// content data.
// ─────────────────────────────────────────────────────────────────────
function renderCurriculumBlock({ country, standard, slugMath, grades, examPrep, faqs, isScience = false }) {
  const subjectLabel = isScience ? 'Science' : 'Maths';
  const subjectLower = isScience ? 'science' : 'maths';
  const slugBase = isScience ? '/science-curriculum/' : '/curriculum/';
  const otherSection = isScience ? '/curriculum/' : '/science-curriculum/';
  const otherSubject = isScience ? 'Maths' : 'Science';
  return renderSeoBlock({
    h1: `${country} ${subjectLabel} Curriculum Grades 5–10 — Grade-by-Grade Guide for Parents`,
    intro: [
      `EduVerseJr's ${country} ${subjectLabel} curriculum guide is built for parents who want to know exactly what their child should be learning each year. Every topic on this page is aligned with ${standard} — the official ${country.toLowerCase().includes('united') || country.toLowerCase().includes('australia') ? 'national' : country.toLowerCase().includes('canad') ? 'provincial' : 'national'} standard followed in ${country} schools. We have mapped Grade 5 through Grade 10 ${subjectLower} topic by topic, so you can see what your child has covered, what is coming next, and where you might want extra 1-to-1 help.`,
      `Every student on our platform also gets Reva AI Teacher — a 24/7 AI ${subjectLower} tutor that explains any topic on this page step-by-step, with worked examples and practice questions. For deeper coaching, our expert human teachers run live 1-to-1 online classes for ${country} students with built-in timezone scheduling.`,
    ],
    sections: [
      ...grades.map((g) => ({
        h2: `Grade ${g.grade} ${subjectLabel} — ${country}`,
        p: g.topics,
      })),
      ...(examPrep ? [{ h2: examPrep.h2, p: examPrep.p }] : []),
    ],
    faqs,
    links: [
      { href: '/reva', label: `Try Reva — your child's 24/7 AI ${subjectLower} teacher` },
      { href: '/teachers', label: 'Book a free trial class with an expert human teacher' },
      { href: `${otherSection}${slugMath}`, label: `${country} ${otherSubject} curriculum guide` },
      { href: '/courses', label: 'See all courses (Maths, Science, Coding)' },
      { href: '/about', label: 'About EduVerseJr' },
    ],
  });
}

const curriculumMeta = {
  'united-states': {
    title: 'US Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s US Math Curriculum guide for Grades 5–10. Covers Common Core Algebra, Geometry, Statistics and more. Expert 1-on-1 online Math teaching aligned with US standards.',
    ogTitle: 'US Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade US Common Core Math curriculum guide for parents. Algebra, Geometry, Statistics and more for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'United States',
      standard: 'the Common Core State Standards for Mathematics (CCSS-M)',
      slugMath: 'united-states',
      grades: [
        { grade: 5, topics: 'Place value of decimals; multi-digit multiplication and division; adding, subtracting, multiplying and dividing fractions; volume of rectangular prisms; coordinate plane (Quadrant I); converting between units of measurement; line plots; understanding patterns and the coordinate plane.' },
        { grade: 6, topics: 'Ratios and unit rates; dividing fractions by fractions; understanding negative numbers and absolute value; arithmetic with positive and negative numbers; expressions and one-variable equations; introduction to statistics — mean, median, range; surface area and volume.' },
        { grade: 7, topics: 'Proportional relationships; operations with rational numbers (including negatives); simplifying linear expressions; two-step equations and inequalities; scale drawings; circumference and area of circles; probability of simple and compound events; sampling and populations.' },
        { grade: 8, topics: 'Linear equations in one and two variables; systems of two linear equations; introduction to functions; transformations and congruence; similarity; Pythagorean theorem; volume of cones, cylinders and spheres; bivariate data and scatter plots; introduction to irrational numbers.' },
        { grade: 9, topics: 'Algebra I — linear and exponential functions; quadratic functions; factoring; systems of equations and inequalities; absolute value; introduction to polynomial operations; descriptive statistics; analyzing categorical data.' },
        { grade: 10, topics: 'Geometry — congruence and similarity proofs; right-triangle trigonometry (sin, cos, tan); circle theorems; coordinate geometry; transformations; volume and surface area of 3D figures; geometric probability. Some students start Algebra II concurrently.' },
      ],
      examPrep: {
        h2: 'PSAT & SAT Math preparation',
        p: 'For Grade 9 onwards, EduVerseJr offers dedicated PSAT (8/9, 10) and SAT Math preparation aligned with the digital SAT format. Includes heart of algebra, problem-solving and data analysis, passport to advanced math, and additional topics in math (geometry/trigonometry).',
      },
      faqs: [
        { q: 'Is this aligned with Common Core?', a: 'Yes. Every topic is mapped to Common Core State Standards for Mathematics (CCSS-M). State-specific variants (e.g. California, Texas TEKS) are also supported on request.' },
        { q: 'Does this match what my child does at school?', a: 'In most US public and private schools that follow Common Core, yes. If your school uses a different scope (e.g. accelerated math, integrated math, IB) we can adjust the lesson order during signup.' },
        { q: 'When do students start Algebra I?', a: 'Most US students take Algebra I in Grade 8 or 9. Accelerated students may take it earlier. Our human teachers can help bridge gaps if your child is moving in early.' },
      ],
    }),
  },
  'united-kingdom': {
    title: 'UK Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UK Maths Curriculum guide for Grades 5–10. Covers GCSE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UK students.',
    ogTitle: 'UK Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK Maths curriculum guide for parents. GCSE-aligned Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'United Kingdom',
      standard: 'the National Curriculum for England (Key Stage 2, Key Stage 3 and GCSE)',
      slugMath: 'united-kingdom',
      grades: [
        { grade: 5, topics: 'Year 6 / KS2 maths: place value to 10 million; long multiplication and division; fractions, decimals and percentages; ratio and proportion; algebra introductions; perimeter, area and volume; basic statistics including the mean.' },
        { grade: 6, topics: 'Year 7 / KS3 Year 1: extending number skills to negatives; introducing letters as variables; solving linear equations; angles, parallel lines and triangle properties; bar charts, pie charts and probability basics.' },
        { grade: 7, topics: 'Year 8 / KS3 Year 2: prime factorisation and HCF/LCM; expanding and factorising linear expressions; ratio and proportion; transformations and tessellations; statistics — frequency tables, scatter graphs.' },
        { grade: 8, topics: 'Year 9 / KS3 Year 3: solving simultaneous equations; powers and surds; circle theorems introduction; Pythagoras\' theorem; trigonometry in right-angled triangles; probability trees; introduction to GCSE topics.' },
        { grade: 9, topics: 'Year 10 / GCSE Year 1: quadratics — factorising and completing the square; sequences (arithmetic and geometric); algebraic fractions; volumes and surface areas; sine and cosine rules; vectors; cumulative frequency.' },
        { grade: 10, topics: 'Year 11 / GCSE Year 2: GCSE revision and exam technique; iterative methods; functions and inverse functions; conditional probability; circle theorems (full); proof by counterexample; preparation for higher GCSE papers.' },
      ],
      examPrep: {
        h2: 'GCSE Maths preparation',
        p: 'For Year 10 and Year 11 students, EduVerseJr offers focused GCSE Maths preparation aligned with AQA, Edexcel and OCR exam boards. Includes past-paper practice, exam timing strategy and full coverage of Higher Tier topics. Foundation Tier prep also available.',
      },
      faqs: [
        { q: 'Is this aligned with GCSE?', a: 'Yes. Years 10 and 11 follow the GCSE specification. We support AQA, Edexcel and OCR exam boards. Tell us your school\'s board during signup.' },
        { q: 'Do you teach Welsh and Scottish curricula?', a: 'Our default is the English National Curriculum. We can adjust for Welsh (Curriculum for Wales) and Scottish (Curriculum for Excellence / National 5) on request.' },
        { q: 'When do students start GCSE topics?', a: 'GCSE content typically begins in Year 9 or 10 depending on the school. Our human teachers can also help with KS3 preparation and Year 11 catch-up.' },
      ],
    }),
  },
  'canada': {
    title: 'Canadian Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s Canadian Math Curriculum guide for Grades 5–10. Covers provincial Algebra, Geometry, Data Management and more. Expert 1-on-1 online Math teaching for Canadian students.',
    ogTitle: 'Canadian Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian Math curriculum guide for parents. Provincial Algebra, Geometry, Data Management for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'Canada',
      standard: 'Canadian provincial curricula (Ontario, BC, Alberta and equivalents)',
      slugMath: 'canada',
      grades: [
        { grade: 5, topics: 'Whole numbers and decimals to thousandths; equivalent fractions; addition and subtraction of fractions with like and unlike denominators; perimeter and area; data management — bar graphs, pictographs, mean; introduction to coordinate grids.' },
        { grade: 6, topics: 'Integers introduction; ratios and rates; percent of a whole; multiplication and division of decimals; area of triangles and parallelograms; surface area of rectangular prisms; understanding histograms and bias in data collection.' },
        { grade: 7, topics: 'Operations with all integers; powers, exponents and laws of exponents (intro); linear relations; circumference and area of circles; constructing 3D models; experimental and theoretical probability.' },
        { grade: 8, topics: 'Square roots and Pythagorean theorem; solving multi-step linear equations; introduction to functions and slope; surface area and volume of cylinders, cones and spheres; analysing scatter plots and trend lines.' },
        { grade: 9, topics: 'Polynomials — expanding, factoring; linear relations and equations of lines; analytic geometry; congruence and similarity; trigonometric ratios in right triangles; statistical investigation.' },
        { grade: 10, topics: 'Quadratic functions — graphing, factoring, completing the square, quadratic formula; trigonometry in non-right triangles (sine and cosine laws — academic stream); financial mathematics — simple and compound interest, annuities.' },
      ],
      examPrep: {
        h2: 'Provincial assessments & SAT for Canadian students',
        p: 'EduVerseJr supports preparation for the Ontario EQAO Grade 9 math assessment, BC provincial numeracy assessment, and other provincial exit assessments. Canadian students aiming at US universities can also enrol in our PSAT/SAT Math preparation.',
      },
      faqs: [
        { q: 'Which province do you align to by default?', a: 'Ontario by default, but we adapt to BC, Alberta, Quebec (with French support on request), Manitoba and other provincial curricula during signup.' },
        { q: 'Do you cover Academic vs Applied (Grade 9–10)?', a: 'Yes. We default to Academic stream content but can also support Applied / Locally Developed streams for Ontario Grade 9–10.' },
        { q: 'Are your teachers Canadian-certified?', a: 'Some teachers are Canadian-certified; all teachers are subject-certified internationally. Tell us if you require a Canadian-certified teacher and we will match you.' },
      ],
    }),
  },
  'australia': {
    title: 'Australian Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Australian Maths Curriculum guide for Grades 5–10. Covers ACARA-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Australian students.',
    ogTitle: 'Australian Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'Australia',
      standard: 'the ACARA Australian Curriculum: Mathematics',
      slugMath: 'australia',
      grades: [
        { grade: 5, topics: 'Year 5 ACARA: multiplication and division strategies; fractions on a number line; decimal place value to thousandths; angle estimation; transformations on a coordinate plane; collecting and displaying categorical data.' },
        { grade: 6, topics: 'Year 6 ACARA: prime and composite numbers; integers — addition and subtraction; ratio and rate introduction; understanding percentages; nets and 3D objects; mean as an average; chance experiments.' },
        { grade: 7, topics: 'Year 7 ACARA: index notation and order of operations; algebraic expressions; equivalent fractions and percentages; angles in triangles and quadrilaterals; volume of rectangular prisms; data displays — stem-and-leaf plots.' },
        { grade: 8, topics: 'Year 8 ACARA: solving linear equations; rates and proportional reasoning; congruence in geometric figures; volume of prisms; surface area; probability with two events; analysing data with mean and median.' },
        { grade: 9, topics: 'Year 9 ACARA: expanding and factorising linear and quadratic expressions; similarity and Pythagoras\' theorem; right-angled trigonometry (sin, cos, tan); financial maths — simple interest; bivariate scatter plots.' },
        { grade: 10, topics: 'Year 10 ACARA: solving quadratics; the unit circle and trigonometric functions (10A); polynomial division (10A); volume and surface area of pyramids, cones and spheres; statistical analysis with box plots and quartiles; compound interest.' },
      ],
      examPrep: {
        h2: 'NAPLAN & senior maths transitions',
        p: 'EduVerseJr supports NAPLAN Year 5, 7 and 9 numeracy preparation. For students moving into senior years, we offer transition courses for Mathematics Standard, Mathematics Methods and Specialist Mathematics (or state equivalents). Australian students preparing for US universities can also take our SAT Math course.',
      },
      faqs: [
        { q: 'Which state curriculum do you follow?', a: 'ACARA national by default. We adapt to NSW, Victorian (VCAA), Queensland, WA, SA and other state curricula on request during signup.' },
        { q: 'Do you cover 10A?', a: 'Yes. Year 10 Advanced (10A) topics — including non-linear relationships, the unit circle, polynomial division — are included in our Year 10 plan when appropriate for your child.' },
        { q: 'Can you help with NAPLAN?', a: 'Yes. Our human teachers offer focused NAPLAN numeracy practice for Year 5, 7 and 9 students.' },
      ],
    }),
  },
  'singapore': {
    title: 'Singapore Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Singapore Maths Curriculum guide for Grades 5–10. Covers MOE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Singapore students.',
    ogTitle: 'Singapore Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'Singapore',
      standard: 'the Singapore Ministry of Education (MOE) Mathematics syllabus',
      slugMath: 'singapore',
      grades: [
        { grade: 5, topics: 'Primary 5: whole numbers up to 10 million; multiplication and division by 2-digit numbers; fractions — four operations including improper and mixed; decimals — four operations; percentage; ratio; angles; triangles and quadrilaterals; average; pie charts.' },
        { grade: 6, topics: 'Primary 6: algebra introduction (letters for numbers, simple equations); fractions and ratios in word problems (bar model approach); percent change; speed; circles — radius, diameter, circumference, area; pie chart interpretation; PSLE preparation.' },
        { grade: 7, topics: 'Secondary 1 (Express): primes and indices; approximation and estimation; basic algebra — expansion and factorisation; linear equations and inequalities; coordinates and linear graphs; ratio, rate, speed; basic geometry.' },
        { grade: 8, topics: 'Secondary 2 (Express): expansion and factorisation (quadratics); algebraic fractions; solving simultaneous linear equations; congruence and similarity; Pythagoras\' theorem; trigonometry of right-angled triangles; introduction to mensuration.' },
        { grade: 9, topics: 'Secondary 3 (Express, O-Level prep): quadratic equations and functions; indices and standard form; coordinate geometry; further trigonometry; arc length and sector area; vectors in two dimensions; basic statistics; probability.' },
        { grade: 10, topics: 'Secondary 4 (Express, O-Level): O-Level syllabus completion — sets, matrices (if applicable), more vectors, more probability, more statistics; full revision and intensive O-Level paper practice for Elementary and Additional Mathematics.' },
      ],
      examPrep: {
        h2: 'PSLE & O-Level Maths preparation',
        p: 'EduVerseJr offers focused preparation for the Primary School Leaving Examination (PSLE) for Primary 6 students, and for the Singapore-Cambridge GCE O-Level Mathematics (4048) and Additional Mathematics (4049) examinations for Secondary 4 students. Includes intensive paper practice and bar-model technique reinforcement.',
      },
      faqs: [
        { q: 'Do you teach the bar model method?', a: 'Yes. The Singapore bar model approach is taught from Primary 5 upwards in our lessons, mirroring how it is used in MOE classrooms.' },
        { q: 'Do you cover Additional Mathematics (A-Math)?', a: 'Yes. A-Math (4049 syllabus) is offered alongside Elementary Math (E-Math, 4048) for Secondary 3 and 4 students.' },
        { q: 'Is this aligned with Express, Normal Academic or Normal Technical?', a: 'Default is Express. We adapt to Normal Academic and Normal Technical streams during signup based on your child\'s school placement.' },
      ],
    }),
  },
  'uae': {
    title: 'UAE Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UAE Math Curriculum guide for Grades 5–10. Covers MOE UAE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UAE and Dubai students.',
    ogTitle: 'UAE Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Math curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
    bodyContent: renderCurriculumBlock({
      country: 'United Arab Emirates',
      standard: 'the UAE Ministry of Education (MOE) Mathematics framework — also serving Dubai (KHDA) and Abu Dhabi (ADEK) schools',
      slugMath: 'uae',
      grades: [
        { grade: 5, topics: 'Grade 5 (UAE MOE): place value to millions; decimal operations to thousandths; equivalent fractions and mixed numbers; volume of rectangular prisms; coordinate plane; units of measurement (metric and imperial); data displays and probability basics.' },
        { grade: 6, topics: 'Grade 6: ratios and rates; multi-digit division; fractions division; integers introduction; algebraic expressions; one-step equations; area and surface area; statistical questions and distributions; measures of variability.' },
        { grade: 7, topics: 'Grade 7: proportional relationships; rational numbers and the number line; two-step equations and inequalities; scale drawings; circumference and area of circles; angle pair relationships; probability of simple and compound events.' },
        { grade: 8, topics: 'Grade 8: linear equations and functions; systems of equations; congruence and similarity transformations; Pythagoras\' theorem; volume of cones, cylinders and spheres; bivariate data and lines of best fit; real numbers vs irrational.' },
        { grade: 9, topics: 'Grade 9: Algebra I content — linear and exponential functions; quadratics — factoring and the quadratic formula; sequences and series introduction; polynomial operations; descriptive statistics; right-triangle trigonometry.' },
        { grade: 10, topics: 'Grade 10: Geometry — congruence and similarity proofs; circle theorems; coordinate geometry; transformations; right-triangle trigonometry deepened; 3D solids — volume and surface area; introduction to statistics and probability for further study.' },
      ],
      examPrep: {
        h2: 'EmSAT, MAP & international school exam prep',
        p: 'For Grade 10–12 UAE students, EduVerseJr offers EmSAT Mathematics preparation, MAP Growth math testing prep (common in Dubai private schools), and SAT/PSAT Math for students aiming at US universities. We also support British and American curriculum students attending private schools in Dubai and Abu Dhabi.',
      },
      faqs: [
        { q: 'Do you support British curriculum schools in Dubai?', a: 'Yes. Many Dubai private schools follow English National Curriculum / GCSE. We support both UAE MOE and British curriculum students — choose your school type during signup.' },
        { q: 'Are lessons available in Arabic?', a: 'Lessons are taught in English by default. Arabic explanations can be provided on request for specific concepts.' },
        { q: 'What about EmSAT?', a: 'We offer dedicated EmSAT Mathematics preparation for Grade 11 and 12 students aiming at UAE university admission.' },
      ],
    }),
  },
};

// ─────────────────────────────────────────────────────────────────────
// Science curriculum pages — one entry per country slug
// ─────────────────────────────────────────────────────────────────────
const scienceCurriculumMeta = {
  'united-states': {
    title: 'US Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s US Science Curriculum guide for Grades 5–10. Covers NGSS-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for US students.',
    ogTitle: 'US Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade US NGSS Science curriculum guide for parents. Biology, Chemistry, Physics and Earth Science for Grades 5–10.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'United States',
      standard: 'the Next Generation Science Standards (NGSS) — three dimensions: disciplinary core ideas, science practices, and crosscutting concepts',
      slugMath: 'united-states',
      grades: [
        { grade: 5, topics: 'Earth & Space: Earth\'s systems, water cycle, our solar system. Physical Science: structure and properties of matter, mixtures and solutions. Life Science: ecosystem interactions, energy flow in food webs. Engineering Design: defining problems and developing solutions.' },
        { grade: 6, topics: 'Middle School NGSS begins: cells as the basic unit of life; weather and climate; energy transfer; introduction to chemical reactions; structure and function in organisms; rock cycle; Earth\'s history.' },
        { grade: 7, topics: 'Photosynthesis and cellular respiration; genetics and heredity; chemical interactions; forces and motion (Newton\'s laws); waves and electromagnetic radiation; human body systems; natural selection introduction.' },
        { grade: 8, topics: 'Evolution and natural selection (full); plate tectonics; electromagnetic waves and information transfer; chemical reactions and conservation of mass; the universe and stars; ecosystem dynamics and human impact; introduction to engineering design challenges.' },
        { grade: 9, topics: 'High school NGSS begins. Biology focus year for many schools: structure and function of biological molecules; cellular processes; DNA, RNA and protein synthesis; Mendelian and modern genetics; ecology; evolution.' },
        { grade: 10, topics: 'Chemistry focus year for many schools: atomic structure; periodic trends; chemical bonding (ionic and covalent); chemical reactions and stoichiometry; gases, liquids and solutions; thermochemistry; acids and bases. Some schools integrate Physics.' },
      ],
      examPrep: {
        h2: 'AP Science & SAT Subject readiness',
        p: 'EduVerseJr supports preparation for AP Biology, AP Chemistry and AP Physics 1 (taken in Grades 10-12). For students aiming at US universities, we also help build the science foundations needed for SAT-related testing and university admission.',
      },
      faqs: [
        { q: 'Is this aligned with NGSS?', a: 'Yes. Every grade follows the Next Generation Science Standards. We can also adapt to state-specific variants like California NGSS or Texas TEKS Science on request.' },
        { q: 'When does my child take Biology vs Chemistry vs Physics?', a: 'Common US pattern: Biology in Grade 9, Chemistry in Grade 10, Physics in Grade 11. Some schools use integrated science across all years. Tell us your school\'s pattern during signup.' },
        { q: 'Do you support AP Science?', a: 'Yes. AP Biology, AP Chemistry and AP Physics 1 are available for advanced students typically in Grades 10-12.' },
      ],
    }),
  },
  'united-kingdom': {
    title: 'UK Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UK Science Curriculum guide for Grades 5–10. Covers KS2–KS4 Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UK students.',
    ogTitle: 'UK Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK National Curriculum Science guide for parents. Biology, Chemistry, Physics for KS2–KS4.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'United Kingdom',
      standard: 'the National Curriculum for England Science programmes of study (KS2, KS3 and GCSE)',
      slugMath: 'united-kingdom',
      grades: [
        { grade: 5, topics: 'Year 6 / KS2 Science: living things and habitats; animals including humans (circulation, exercise, lifestyle); evolution and inheritance; light; electricity (circuits and switches); scientific enquiry.' },
        { grade: 6, topics: 'Year 7 / KS3 Year 1: cells, body systems and reproduction; particle model of matter; chemical reactions; energy stores and transfers; forces; the solar system; scientific working — variables, observation and measurement.' },
        { grade: 7, topics: 'Year 8 / KS3 Year 2: respiration, photosynthesis and gas exchange; ecosystems; the periodic table; acids and alkalis; electricity and magnetism; sound and light waves; Earth structure and resources.' },
        { grade: 8, topics: 'Year 9 / KS3 Year 3: genetics and inheritance; chemical reactions and rates; energy in chemistry; pressure; electromagnetism; introduction to GCSE topics in Biology, Chemistry and Physics.' },
        { grade: 9, topics: 'Year 10 / GCSE Year 1: Biology — cell biology, organisation, infection and response. Chemistry — atomic structure and periodic table, bonding, quantitative chemistry. Physics — energy, electricity, particle model.' },
        { grade: 10, topics: 'Year 11 / GCSE Year 2: Biology — homeostasis, inheritance, ecology. Chemistry — chemical changes, energy changes, organic chemistry. Physics — atomic structure, forces, waves, magnetism. Combined Science (Trilogy) or Triple Science variants supported.' },
      ],
      examPrep: {
        h2: 'GCSE Science preparation (AQA, Edexcel, OCR)',
        p: 'For Years 10 and 11, EduVerseJr offers full GCSE Science preparation — Combined Science (Trilogy, Synergy) and Triple Science (separate Biology, Chemistry, Physics) — aligned with AQA, Edexcel and OCR specifications. Past-paper practice and required-practical knowledge included.',
      },
      faqs: [
        { q: 'Combined or Triple Science?', a: 'Both. Combined Science (Trilogy) gives two GCSEs; Triple Science (separate B/C/P) gives three. We support both — tell us your school\'s route during signup.' },
        { q: 'Which exam board?', a: 'AQA, Edexcel and OCR all supported. Tell us your board so we align worked examples and practical content correctly.' },
        { q: 'Required practicals — do you cover them?', a: 'Yes. We walk through the 21 required practicals (or your board\'s equivalent) including method, expected results and exam-style questions.' },
      ],
    }),
  },
  'canada': {
    title: 'Canadian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Canadian Science Curriculum guide for Grades 5–10. Provincial-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Canadian students.',
    ogTitle: 'Canadian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian provincial Science curriculum guide for parents. Biology, Chemistry, Physics for Grades 5–10.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'Canada',
      standard: 'Canadian provincial science curricula (Ontario, BC, Alberta and equivalents) — typically organised around Life Systems, Matter and Energy, Structures and Mechanisms, and Earth and Space',
      slugMath: 'canada',
      grades: [
        { grade: 5, topics: 'Human organ systems; properties and changes of matter; forces acting on structures and mechanisms; conservation of energy and resources; weather and climate.' },
        { grade: 6, topics: 'Biodiversity and classification; air and flight; electricity and electrical devices; space — the universe and our place in it; investigating environmental and resource issues.' },
        { grade: 7, topics: 'Interactions in the environment and ecosystems; pure substances and mixtures; form and function of structures; heat in the environment; introducing scientific inquiry.' },
        { grade: 8, topics: 'Cells, tissues, organs and systems; fluids and viscosity; systems in action (mechanical advantage); water systems on Earth; optics — light and vision.' },
        { grade: 9, topics: 'Grade 9 Science (Academic): biology — cell biology and reproduction; chemistry — atoms, elements and compounds; physics — characteristics of electricity; Earth and space — astronomy and the universe.' },
        { grade: 10, topics: 'Grade 10 Science (Academic): biology — tissues, organs and systems of living things; chemistry — chemical reactions; physics — light and geometric optics; climate change — Earth\'s climate and human activity.' },
      ],
      examPrep: {
        h2: 'Provincial science assessments & senior science prep',
        p: 'For Ontario students we support OSSLT-style scientific literacy and prepare for Grade 11/12 Biology, Chemistry and Physics streams. BC, Alberta and other provinces also covered. International-bound students can take AP Biology, AP Chemistry or AP Physics with our help.',
      },
      faqs: [
        { q: 'Which province by default?', a: 'Ontario by default; BC, Alberta, Quebec, Manitoba and others supported on request.' },
        { q: 'Academic vs Applied stream?', a: 'We default to Academic. Applied Science streams for Grade 9/10 are supported on request.' },
        { q: 'Do you support French immersion?', a: 'Our lessons are primarily in English. Limited French-language support is available on request — please ask before enrolling.' },
      ],
    }),
  },
  'australia': {
    title: 'Australian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Australian Science Curriculum guide for Grades 5–10. ACARA-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Australian students.',
    ogTitle: 'Australian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Science curriculum guide for parents. Biology, Chemistry, Physics for Years 5–10.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'Australia',
      standard: 'the ACARA Australian Curriculum: Science — three strands: Science Understanding, Science as a Human Endeavour, and Science Inquiry Skills',
      slugMath: 'australia',
      grades: [
        { grade: 5, topics: 'Year 5 ACARA Science: living things have structural features and adaptations; solids, liquids and gases; light from sources can be seen and reflected; sudden geological changes and extreme weather; everyday materials.' },
        { grade: 6, topics: 'Year 6 ACARA Science: growth and survival of living things; reversible and irreversible changes; electrical circuits; sudden geological changes; energy from a variety of sources.' },
        { grade: 7, topics: 'Year 7 ACARA Science: classification helps us identify and group; mixtures and separation techniques; predictable phenomena on Earth — moon and seasons; forces acting at a distance; renewable and non-renewable resources.' },
        { grade: 8, topics: 'Year 8 ACARA Science: cells as basic units of life; energy in chemical reactions; rock cycle; properties of light; sustainability and ecosystems; introducing scientific argumentation.' },
        { grade: 9, topics: 'Year 9 ACARA Science: body systems and homeostasis; atomic structure and the periodic table; chemical reactions including combustion; plate tectonics and Earth\'s history; energy transfer through different mediums.' },
        { grade: 10, topics: 'Year 10 ACARA Science: DNA, genes and evolution; chemical reactions and bonding; motion and forces (Newton\'s laws); global systems including the carbon cycle and climate change; preparing for senior science streams.' },
      ],
      examPrep: {
        h2: 'Senior science transitions & NAPLAN',
        p: 'For students moving into senior years, EduVerseJr offers transition courses for Biology, Chemistry, Physics and Earth & Environmental Science (or state equivalents). NAPLAN Year 5, 7 and 9 scientific literacy practice also available.',
      },
      faqs: [
        { q: 'Which state curriculum do you default to?', a: 'ACARA national by default. NSW, Victorian (VCAA), Queensland, WA and SA supported on request.' },
        { q: 'When do students choose Biology vs Chemistry vs Physics?', a: 'In most states, students choose senior science subjects from Year 11. EduVerseJr can help with Year 10 readiness across all three streams.' },
        { q: 'Do you cover practical investigations?', a: 'Yes. We walk through key practical investigations including method, expected results, and how to write scientific reports for assessment.' },
      ],
    }),
  },
  'singapore': {
    title: 'Singapore Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Singapore Science Curriculum guide for Grades 5–10. MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for Singapore students.',
    ogTitle: 'Singapore Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Primary 5 to Secondary 4.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'Singapore',
      standard: 'the Singapore Ministry of Education (MOE) Science syllabus — Primary Science (5–6) and Lower / Upper Secondary Science (7–10), with O-Level Pure Sciences in Secondary 3 and 4',
      slugMath: 'singapore',
      grades: [
        { grade: 5, topics: 'Primary 5 Science: cells as building blocks of living things; energy from food; electrical systems; reproduction in plants and humans; force and pressure introduction.' },
        { grade: 6, topics: 'Primary 6 Science: forces (gravity, magnetism, friction, spring force); energy conversion; interaction within environments; adaptations; PSLE science skills and exam technique.' },
        { grade: 7, topics: 'Secondary 1 Lower Secondary Science: scientific method and measurement; cells, organs and systems; matter — states, separation and atomic theory; energy and energy resources; light reflection and refraction.' },
        { grade: 8, topics: 'Secondary 2 Lower Secondary Science: photosynthesis and respiration; transport in plants and humans; chemical changes; electricity — current and circuits; magnetism; environmental science.' },
        { grade: 9, topics: 'Secondary 3 O-Level Pure Sciences (Biology, Chemistry, Physics): cellular biology, nutrition, transport; atomic structure, bonding, periodic table, acids and bases; kinematics, dynamics, energy, thermal physics.' },
        { grade: 10, topics: 'Secondary 4 O-Level Pure Sciences: homeostasis, reproduction, inheritance, evolution; redox, electrolysis, organic chemistry, rates of reaction; waves, electricity and magnetism, atomic physics. Combined Science (Phy/Chem, Bio/Chem, Phy/Bio) also supported.' },
      ],
      examPrep: {
        h2: 'PSLE Science & O-Level Sciences preparation',
        p: 'EduVerseJr offers focused PSLE Science preparation for Primary 6 students, and full preparation for Singapore-Cambridge GCE O-Level Pure Biology (6093), Pure Chemistry (6092), Pure Physics (6091) and Combined Science syllabuses (5076, 5077, 5078) for Secondary 4 students.',
      },
      faqs: [
        { q: 'Pure Sciences or Combined Science?', a: 'Both. Pure Sciences (three separate O-Level subjects) for students taking Triple Science; Combined Science (two-subject combinations) for students taking the Combined route. Tell us your school\'s offering.' },
        { q: 'Do you cover Express, Normal Academic and Normal Technical?', a: 'Default is Express. Normal Academic and Normal Technical streams supported on request based on your child\'s school placement.' },
        { q: 'Can you help with PSLE Science?', a: 'Yes. Dedicated PSLE Science preparation for Primary 6 with focus on experimental design questions and open-ended response writing.' },
      ],
    }),
  },
  'uae': {
    title: 'UAE Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UAE Science Curriculum guide for Grades 5–10. UAE MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UAE and Dubai students.',
    ogTitle: 'UAE Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Cycle 2 & 3.',
    bodyContent: renderCurriculumBlock({
      isScience: true,
      country: 'United Arab Emirates',
      standard: 'the UAE Ministry of Education (MOE) Science framework — also serving Dubai (KHDA), Abu Dhabi (ADEK), British curriculum, American curriculum and IB schools in the Emirates',
      slugMath: 'uae',
      grades: [
        { grade: 5, topics: 'Grade 5 (UAE MOE): structure and properties of matter; Earth\'s systems; ecosystems and food webs; the solar system; engineering design challenges; scientific investigation skills.' },
        { grade: 6, topics: 'Grade 6: cells and cell theory; energy transformations; weather and climate; geology basics; introduction to chemistry — elements and compounds; ecosystem dynamics.' },
        { grade: 7, topics: 'Grade 7: photosynthesis and respiration; the periodic table introduction; forces and motion; waves; human body systems; sustainability and environmental science.' },
        { grade: 8, topics: 'Grade 8: genetics and heredity; chemical reactions and conservation of mass; electricity and circuits; Earth\'s history and plate tectonics; energy and engineering design.' },
        { grade: 9, topics: 'Grade 9: biology — cell biology, organisation and disease; chemistry — atomic structure, bonding, the mole concept; physics — energy, forces and motion, electricity.' },
        { grade: 10, topics: 'Grade 10: biology — homeostasis, inheritance, ecology; chemistry — chemical changes, energy changes, rates of reaction; physics — waves, electricity and magnetism, atomic structure. EmSAT and university-prep foundations introduced.' },
      ],
      examPrep: {
        h2: 'EmSAT, MAP, IGCSE & IB readiness',
        p: 'EduVerseJr supports EmSAT Biology, Chemistry and Physics preparation for Grade 11 and 12 UAE students. We also support IGCSE and IB Middle Years Programme (MYP) science students attending British and international schools in Dubai and Abu Dhabi.',
      },
      faqs: [
        { q: 'Do you support British curriculum schools in Dubai?', a: 'Yes. Many Dubai private schools follow the English National Curriculum / IGCSE. We support UAE MOE, British, American and IB curricula — choose your school type during signup.' },
        { q: 'Are lessons in Arabic available?', a: 'Lessons are in English by default. Arabic explanations available on request for specific concepts.' },
        { q: 'EmSAT preparation?', a: 'Yes — focused EmSAT Biology, Chemistry and Physics prep for Grade 11 and 12 students aiming at UAE university admission.' },
      ],
    }),
  },
};

// ─────────────────────────────────────────────────────────────────────
// Meta-injection helper — replaces title, description, og:* and adds canonical
// ─────────────────────────────────────────────────────────────────────
function injectMeta(html, meta, canonicalUrl) {
  if (!meta) return html;

  // <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.ogDesc}" />`
  );

  // og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // twitter:url
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.ogDesc}" />`
  );

  // <link rel="canonical"> — insert after </title> or replace existing
  if (!html.includes(`rel="canonical"`)) {
    html = html.replace(
      '</title>',
      `</title>\n    <link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  }

  return html;
}

// ─────────────────────────────────────────────────────────────────────
// Body-content injection — replaces the empty <div id="root"></div>
// with <div id="root">{splash + bodyContent}</div>. React's createRoot()
// wipes children on mount, so both the splash and the prerender content
// are replaced by the actual app UI for real users.
//
// 2026-05-24: added the branded splash overlay because users were seeing
// the raw SEO prerender text flash for ~1–2s on slow connections before
// React hydrated. The splash is position:fixed on top — crawlers don't
// render CSS so they still see the prerender text in the raw HTML below.
// The splash auto-hides if React hasn't booted within 8s (fail-safe so a
// JS error doesn't leave users stuck on a spinner forever).
// ─────────────────────────────────────────────────────────────────────
const SPLASH_HTML = `<div id="boot-splash" style="position:fixed;inset:0;background:#ffffff;z-index:2147483647;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;transition:opacity .25s ease">
      <img src="/logo.jpg" alt="EduVerseJr" style="width:72px;height:72px;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,.08)" />
      <div style="margin-top:18px;font-size:15px;font-weight:600;color:#1f2937;letter-spacing:.2px">EduVerseJr</div>
      <div style="margin-top:18px;width:28px;height:28px;border:3px solid #e5e7eb;border-top-color:#4f46e5;border-radius:50%;animation:eduspin 1s linear infinite"></div>
      <style>@keyframes eduspin{to{transform:rotate(360deg)}}</style>
    </div>
    <script>(function(){setTimeout(function(){var s=document.getElementById('boot-splash');if(s){s.style.opacity='0';setTimeout(function(){s.parentNode&&s.parentNode.removeChild(s)},300)}},8000)})();</script>`;

function injectBodyContent(html, bodyContent) {
  if (!bodyContent) return html;
  return html.replace(
    /<div\s+id="root">\s*<\/div>/,
    `<div id="root">${SPLASH_HTML}${bodyContent}</div>`
  );
}

// ─────────────────────────────────────────────────────────────────────
// Generate flat HTML files
// ─────────────────────────────────────────────────────────────────────
const publicDir = path.join(__dirname, 'dist', 'public');

// Top-level pages → /dist/public/<page>.html
Object.entries(topLevelMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/${page}`;
  let pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  pageHtml = injectBodyContent(pageHtml, meta.bodyContent);
  const flatHtmlPath = path.join(publicDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created ${page}.html (unique meta${meta.bodyContent ? ' + SEO body' : ''})`);
});

// Math curriculum pages → /dist/public/curriculum/<country>.html
const curriculumDir = path.join(publicDir, 'curriculum');
if (!fs.existsSync(curriculumDir)) {
  fs.mkdirSync(curriculumDir, { recursive: true });
}
Object.entries(curriculumMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/curriculum/${page}`;
  let pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  pageHtml = injectBodyContent(pageHtml, meta.bodyContent);
  const flatHtmlPath = path.join(curriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}.html (unique meta${meta.bodyContent ? ' + SEO body' : ''})`);
});

// Science curriculum pages → /dist/public/science-curriculum/<country>.html
const scienceCurriculumDir = path.join(publicDir, 'science-curriculum');
if (!fs.existsSync(scienceCurriculumDir)) {
  fs.mkdirSync(scienceCurriculumDir, { recursive: true });
}
Object.entries(scienceCurriculumMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/science-curriculum/${page}`;
  let pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  pageHtml = injectBodyContent(pageHtml, meta.bodyContent);
  const flatHtmlPath = path.join(scienceCurriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created science-curriculum/${page}.html (unique meta${meta.bodyContent ? ' + SEO body' : ''})`);
});

// Homepage — overwrite /dist/public/index.html with prerender SEO body
// (title and meta are already correct in base index.html, we only inject body)
const homepageBody = renderSeoBlock({
  h1: 'EduVerseJr — Reva AI Teacher + Expert Human Teachers for Grades 5–12',
  intro: [
    'EduVerseJr is a hybrid online learning platform built around two complementary teachers: Reva, our 24/7 AI maths teacher, and our team of expert human teachers running live 1-to-1 online classes. We serve students in Grades 5 through 12 across the United States, United Kingdom, Canada, Australia, Singapore and the United Arab Emirates — with curriculum-aligned content for each country.',
    'Reva handles the daily questions — homework, practice, revision, concept explanation — at any hour, on any topic in Mathematics. Our human teachers run scheduled live sessions for deeper coaching in Maths, Science and Coding, including PSAT and SAT preparation. Parents get progress reports after every session and visibility into Reva usage between sessions.',
    'EduVerseJr was founded in 2026 by Revathi Gopinath (MSc, BEd), an experienced classroom teacher with 10+ years of online teaching experience. The company is a registered India MSME headquartered in Coimbatore, Tamil Nadu, India. Customer support: support@eduversejr.com · Phone: +91 422 4924192.',
  ],
  sections: [
    {
      h2: 'Meet Reva — your child\'s 24/7 AI maths teacher',
      p: 'Reva explains concepts step-by-step on an interactive whiteboard, listens to spoken questions, and adapts each lesson to the country curriculum your child follows. Five core modes — Learn, Whiteboard, Practice, Revision, and Ask Reva — cover the full daily learning loop. Currently in private beta with a free tier planned at public launch (10 messages/day, Chapter 1 of each course).',
    },
    {
      h2: 'Expert human teachers — live 1-to-1 classes',
      p: 'Subject-certified teachers run online video classes in Mathematics (Grades 5–10), Science (Grades 5–10) and Coding (Grades 5–10), plus PSAT/SAT Math preparation for Grades 9–12. Free trial class for new students. Curriculum aligned with six countries — choose yours during signup.',
    },
    {
      h2: 'Curriculum coverage',
      p: 'United States (Common Core), United Kingdom (National Curriculum / GCSE), Canada (provincial — Ontario, BC, Alberta and equivalents), Australia (ACARA), Singapore (MOE — Express, Normal Academic, Normal Technical), and the United Arab Emirates (MOE UAE, plus British and American school variants in Dubai and Abu Dhabi).',
    },
    {
      h2: 'Safe for children',
      p: 'EduVerseJr is COPPA-compliant for US users and GDPR-aware for UK/EU users. Under-18 accounts require parent supervision. All Reva conversations pass through a content moderation pipeline with parent-visible violation alerts. Governing law: India.',
    },
  ],
  faqs: [
    { q: 'What grades do you cover?', a: 'Reva AI Teacher: Grades 5–12 plus PSAT/SAT Math prep. Live human teachers: Grades 5–10 plus PSAT/SAT.' },
    { q: 'Which subjects?', a: 'Mathematics, Science, and Coding. Subject availability depends on grade — see our Courses page for the full matrix.' },
    { q: 'Is Reva the same as ChatGPT?', a: 'No. Reva is restricted to curriculum-aligned maths content, runs through a content review pipeline, remembers your child\'s past topics across sessions, and is built specifically for school-age learners.' },
    { q: 'How do I book a free trial?', a: 'Visit our Teachers page, fill in the form with your child\'s grade and country, and we will email back within 24 hours to schedule.' },
    { q: 'What does it cost?', a: 'Reva AI is in private beta; a free tier is planned at launch with paid tiers for unlimited use. Human teacher pricing is shown at checkout and varies by country and class frequency.' },
  ],
  links: [
    { href: '/reva', label: 'Meet Reva — 24/7 AI maths teacher' },
    { href: '/teachers', label: 'Book a free trial with an expert human teacher' },
    { href: '/courses', label: 'See all Maths, Science & Coding courses' },
    { href: '/curriculum/united-states', label: 'US Math curriculum guide' },
    { href: '/curriculum/united-kingdom', label: 'UK Maths curriculum guide' },
    { href: '/curriculum/singapore', label: 'Singapore Maths curriculum guide' },
    { href: '/about', label: 'About EduVerseJr' },
  ],
});
const homepageHtml = injectBodyContent(indexHtml, homepageBody);
fs.writeFileSync(indexHtmlPath, homepageHtml, 'utf-8');
console.log(`✓ Updated index.html (homepage SEO body injected)`);

// 404 fallback — real page-not-found with noindex + branded body.
// Was previously a copy of the homepage with `index, follow` (Fable 5 finding L5, 2026-06-11).
const notFoundBody = `
<section class="seo-content" style="max-width:640px;margin:80px auto;padding:24px;text-align:center;font-family:system-ui,sans-serif;">
  <h1 style="font-size:48px;margin:0 0 8px;color:#0f172a;">404</h1>
  <h2 style="font-size:20px;margin:0 0 16px;color:#334155;">We couldn't find that page</h2>
  <p style="color:#64748b;line-height:1.6;">The link may be outdated, or the page may have moved. Head back to the homepage and we'll get you where you need to go.</p>
  <p style="margin-top:24px;">
    <a href="/" style="display:inline-block;padding:10px 20px;background:#2563eb;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Back to EduVerseJr Home</a>
  </p>
  <p style="margin-top:16px;font-size:14px;">
    Looking for the learning app? <a href="https://revaai.eduversejr.com" style="color:#2563eb;text-decoration:underline;">Open Reva AI</a>.
  </p>
</section>
`.trim();
const notFoundHtml = indexHtml
  .replace(/<meta name="robots" content="[^"]*"\s*\/?>/i, '<meta name="robots" content="noindex, nofollow" />')
  .replace(/<title>[^<]*<\/title>/i, '<title>Page Not Found — EduVerseJr</title>')
  .replace('<div id="root"></div>', `<div id="root">${notFoundBody}</div>`);
const notFoundPath = path.join(publicDir, '404.html');
fs.writeFileSync(notFoundPath, notFoundHtml, 'utf-8');
console.log(`✓ Created 404.html (noindex + branded body)`);

const total =
  Object.keys(topLevelMeta).length +
  Object.keys(curriculumMeta).length +
  Object.keys(scienceCurriculumMeta).length +
  1;
console.log(`\n✅ Generated ${total} SPA pages with unique meta tags.`);
