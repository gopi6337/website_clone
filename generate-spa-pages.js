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
  'about': {
    title: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    description: 'EduVerseJr is a hybrid learning platform combining Reva AI Teacher (24/7) with expert human teachers for live 1-to-1 Maths, Science and Coding classes for Grades 5–12.',
    ogTitle: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    ogDesc: 'Hybrid AI + human teaching for Grades 5–12 in Maths, Science and Coding. Aligned with US, UK, Canadian, Australian, Singapore and UAE curricula.',
    bodyContent: renderSeoBlock({
      h1: 'About EduVerseJr — AI Teacher + Human Teacher, Always There',
      intro: [
        'EduVerseJr is a hybrid education platform built around a simple idea: every child should have unlimited access to a patient, curriculum-aligned teacher — at any hour, in any timezone. We deliver that through two complementary products. Reva AI Teacher is available 24/7 for daily homework help, practice, revision and concept explanation. Expert human teachers run live 1-to-1 online classes for deeper coaching, exam preparation and pedagogical guidance.',
        'EduVerseJr is operated by an India-registered MSME based in Coimbatore, Tamil Nadu. We serve students worldwide and our content is aligned with six national curricula: US Common Core, UK National Curriculum / GCSE, Canadian provincial standards, Australian ACARA, Singapore MOE and UAE MOE. Subjects currently cover Mathematics, Science and Coding for Grades 5 through 12, including PSAT and SAT preparation.',
      ],
      sections: [
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
        { q: 'Where is EduVerseJr based?', a: 'EduVerseJr is an India-registered MSME based in Coimbatore, Tamil Nadu. Governing law for all services is India. We serve students globally.' },
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
  'tutors': {
    title: 'Expert Human Teachers — Live 1-to-1 Classes | EduVerseJr',
    description: 'Book a free trial class with our expert human teachers. Live 1-to-1 online Maths, Science and Coding lessons for Grades 5–10 + PSAT/SAT preparation.',
    ogTitle: 'Expert Human Teachers — Book a Free Trial Class | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes with certified human teachers for Maths, Science, Coding (Grades 5–10) + PSAT/SAT prep.',
    bodyContent: renderSeoBlock({
      h1: 'Online Tutors — Live 1-to-1 Maths, Science & Coding Tutoring',
      intro: [
        'EduVerseJr connects students in Grades 5–10 (plus PSAT/SAT prep for Grades 9–12) with expert human tutors for live 1-to-1 online lessons in Mathematics, Science and Coding. Every tutor is subject-certified, classroom-experienced, and trained for online 1-to-1 teaching with an interactive whiteboard.',
        'Tutoring is curriculum-aligned across the United States, United Kingdom, Canada, Australia, Singapore and the United Arab Emirates. Between live sessions, students get Reva AI Teacher (24/7) for homework, practice and revision. Parents see progress reports after every session.',
      ],
      sections: [
        {
          h2: 'Subjects covered',
          p: 'Mathematics (Grades 5–10) including pre-algebra, algebra, geometry, statistics, trigonometry. Science (Grades 5–10) including biology, chemistry, physics, earth science. Coding (Grades 5–10) — Scratch, web (HTML/CSS/JS), and Python. PSAT and SAT Math prep for Grades 9–12.',
        },
        {
          h2: 'Why 1-to-1?',
          p: '1-to-1 tutoring means the lesson is paced exactly to your child\'s pace. The tutor sees every step, catches gaps early, and adapts within the same session. Group tutoring averages everything to the middle — 1-to-1 is built for the student in front of the screen.',
        },
      ],
      faqs: [
        { q: 'Is the first class free?', a: 'Yes — book a free trial class on this page. No payment until you decide to continue.' },
        { q: 'Do tutors follow my child\'s school curriculum?', a: 'Yes. Choose your country during signup and tutors map every lesson to your local curriculum standards.' },
      ],
      links: [
        { href: '/teachers', label: 'Visit the Teachers page' },
        { href: '/reva', label: 'Reva AI — 24/7 maths support' },
        { href: '/courses', label: 'All courses' },
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
const curriculumMeta = {
  'united-states': {
    title: 'US Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s US Math Curriculum guide for Grades 5–10. Covers Common Core Algebra, Geometry, Statistics and more. Expert 1-on-1 online Math teaching aligned with US standards.',
    ogTitle: 'US Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade US Common Core Math curriculum guide for parents. Algebra, Geometry, Statistics and more for Grades 5–10 by EduVerseJr.',
  },
  'united-kingdom': {
    title: 'UK Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UK Maths Curriculum guide for Grades 5–10. Covers GCSE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UK students.',
    ogTitle: 'UK Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK Maths curriculum guide for parents. GCSE-aligned Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'canada': {
    title: 'Canadian Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s Canadian Math Curriculum guide for Grades 5–10. Covers provincial Algebra, Geometry, Data Management and more. Expert 1-on-1 online Math teaching for Canadian students.',
    ogTitle: 'Canadian Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian Math curriculum guide for parents. Provincial Algebra, Geometry, Data Management for Grades 5–10 by EduVerseJr.',
  },
  'australia': {
    title: 'Australian Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Australian Maths Curriculum guide for Grades 5–10. Covers ACARA-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Australian students.',
    ogTitle: 'Australian Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'singapore': {
    title: 'Singapore Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Singapore Maths Curriculum guide for Grades 5–10. Covers MOE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Singapore students.',
    ogTitle: 'Singapore Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'uae': {
    title: 'UAE Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UAE Math Curriculum guide for Grades 5–10. Covers MOE UAE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UAE and Dubai students.',
    ogTitle: 'UAE Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Math curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
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
  },
  'united-kingdom': {
    title: 'UK Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UK Science Curriculum guide for Grades 5–10. Covers KS2–KS4 Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UK students.',
    ogTitle: 'UK Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK National Curriculum Science guide for parents. Biology, Chemistry, Physics for KS2–KS4.',
  },
  'canada': {
    title: 'Canadian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Canadian Science Curriculum guide for Grades 5–10. Provincial-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Canadian students.',
    ogTitle: 'Canadian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian provincial Science curriculum guide for parents. Biology, Chemistry, Physics for Grades 5–10.',
  },
  'australia': {
    title: 'Australian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Australian Science Curriculum guide for Grades 5–10. ACARA-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Australian students.',
    ogTitle: 'Australian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Science curriculum guide for parents. Biology, Chemistry, Physics for Years 5–10.',
  },
  'singapore': {
    title: 'Singapore Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Singapore Science Curriculum guide for Grades 5–10. MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for Singapore students.',
    ogTitle: 'Singapore Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Primary 5 to Secondary 4.',
  },
  'uae': {
    title: 'UAE Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UAE Science Curriculum guide for Grades 5–10. UAE MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UAE and Dubai students.',
    ogTitle: 'UAE Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Cycle 2 & 3.',
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
// with <div id="root">{bodyContent}</div>. React's createRoot().render()
// wipes children on mount, so this prerender content is replaced by the
// actual app UI for real users — but Googlebot reads it from raw HTML.
// ─────────────────────────────────────────────────────────────────────
function injectBodyContent(html, bodyContent) {
  if (!bodyContent) return html;
  return html.replace(
    /<div\s+id="root">\s*<\/div>/,
    `<div id="root">${bodyContent}</div>`
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

// 404 fallback
const notFoundPath = path.join(publicDir, '404.html');
fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
console.log(`✓ Created 404.html`);

const total =
  Object.keys(topLevelMeta).length +
  Object.keys(curriculumMeta).length +
  Object.keys(scienceCurriculumMeta).length +
  1;
console.log(`\n✅ Generated ${total} SPA pages with unique meta tags.`);
