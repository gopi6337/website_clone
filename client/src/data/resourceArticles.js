// ─────────────────────────────────────────────────────────────────────
// Resource / guides hub content — single source of truth shared by the
// React pages (ResourcesPage.tsx, ResourceArticlePage.tsx) and the crawler
// prerender (generate-spa-pages.js). Plain .js so the ESM generator and the
// .tsx pages can both import it (tsconfig allowJs is on).
//
// Every article here is genuine, factual, evergreen educational content —
// no fabricated testimonials, reviews or outcome statistics. Facts are kept
// consistent with the rest of the site (see /sat, /psat and the National
// Merit calculator). Update `dateModified` when you meaningfully edit one.
// ─────────────────────────────────────────────────────────────────────

export const RESOURCES_PUBLISHED = '2026-07-11';

// Real, qualified author — used for Article schema (E-E-A-T).
export const ARTICLE_AUTHOR = {
  name: 'Revathi Gopinath',
  credential: 'MSc, BEd — Founder & CEO, EduVerseJr',
  url: 'https://www.linkedin.com/in/revathi-gopinath-3b598b412',
};

export const ARTICLES = [
  {
    slug: 'digital-sat-format-scoring-timing',
    category: 'SAT & PSAT',
    readMins: 7,
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
    title: 'The Digital SAT: Format, Scoring & Timing Explained (2026)',
    metaDescription:
      'A clear breakdown of the digital SAT: two sections, two adaptive modules each, 98 questions in about 2 hours 14 minutes, scored 400–1600. Format, timing and scoring explained.',
    ogTitle: 'The Digital SAT: Format, Scoring & Timing Explained',
    ogDesc:
      'How the digital SAT works — sections, adaptive modules, question counts, timing and the 400–1600 score, explained simply for students and parents.',
    h1: 'The Digital SAT: Format, Scoring & Timing Explained',
    excerpt:
      'The SAT is now fully digital and adaptive. Here is exactly how the test is structured, how long each part takes, and how the 400–1600 score is built.',
    intro: [
      'The SAT is now a fully digital, section-adaptive test taken in College Board\'s Bluebook application. If you last looked at the SAT a few years ago, almost everything about the delivery has changed — but the score scale (400–1600) and what colleges do with it have not. This guide explains the format, timing and scoring in plain language so you know exactly what test day looks like.',
      'Everything below matches how EduVerseJr\'s Reva AI prepares students: in the real two-module adaptive format, not a flat quiz.',
    ],
    sections: [
      {
        h2: 'Two sections, two modules each',
        body: [
          'The digital SAT has two sections: Reading & Writing, and Math. Each section is split into two equal-length modules. You complete the first module, and the difficulty of your second module is chosen based on how you performed on the first. This is called section-adaptive (or two-stage adaptive) testing — the test adapts once per section, not question by question.',
        ],
        bullets: [
          'Reading & Writing: 54 questions across 2 modules, 64 minutes total (32 minutes per module).',
          'Math: 44 questions across 2 modules, 70 minutes total (35 minutes per module).',
          'Total: 98 scored questions in about 2 hours 14 minutes, plus a 10-minute break between the two sections.',
        ],
      },
      {
        h2: 'What Reading & Writing tests',
        body: [
          'Reading & Writing questions are short — one passage (or passage pair) of 25–150 words per question, each with a single question. Passages are ordered from easiest to hardest within a module and grouped loosely by the four content domains.',
        ],
        bullets: [
          'Information & Ideas — reading comprehension, central ideas, evidence and data interpretation.',
          'Craft & Structure — vocabulary in context, text structure, purpose and connecting two texts.',
          'Expression of Ideas — rhetorical synthesis and transitions (making writing effective).',
          'Standard English Conventions — grammar, punctuation, sentence boundaries and structure.',
        ],
      },
      {
        h2: 'What Math tests',
        body: [
          'The Math section covers four domains, and an on-screen graphing calculator (Desmos) is built into Bluebook and allowed on every Math question. You can also bring your own approved calculator. About 75% of Math questions are multiple choice; the rest are student-produced responses (you type the answer).',
        ],
        bullets: [
          'Algebra — linear equations, systems and inequalities.',
          'Advanced Math — quadratics, exponentials, polynomials and nonlinear functions.',
          'Problem-Solving & Data Analysis — ratios, percentages, probability and interpreting data.',
          'Geometry & Trigonometry — area, volume, angles, right triangles and the unit circle.',
        ],
      },
      {
        h2: 'How the 400–1600 score is built',
        body: [
          'Each section is scored on a 200–800 scale, and the two are added together for a total of 400–1600. Because the test is adaptive, your score reflects both how many questions you answered correctly and the difficulty of the module you were routed into — reaching the harder second module raises your score ceiling. There is no penalty for wrong answers, so you should answer every question.',
          'Scores are typically available in Bluebook and your College Board account within a couple of weeks. You control which colleges receive your scores.',
        ],
      },
      {
        h2: 'How to prepare for an adaptive test',
        body: [
          'Because the SAT is adaptive, realistic practice matters more than ever — practising in a flat, fixed-difficulty quiz does not tell you which module you would actually reach. The most efficient prep does three things: rehearses the real two-module format, teaches the method behind every question you miss, and targets your weakest skills rather than re-drilling what you already know.',
          'That is exactly how Reva AI works: adaptive practice in the real format, a tutor on every question that explains the method step-by-step on a live whiteboard, and a per-skill weakness map so your time goes where it counts.',
        ],
      },
    ],
    faqs: [
      { q: 'How long is the digital SAT?', a: 'About 2 hours and 14 minutes of testing — 64 minutes for Reading & Writing and 70 minutes for Math — plus a 10-minute break between the two sections.' },
      { q: 'Is the whole SAT adaptive?', a: 'It is section-adaptive (two-stage). Each section has two modules; your performance on the first module determines the difficulty of the second. It does not adapt after every single question.' },
      { q: 'Can I use a calculator on the whole Math section?', a: 'Yes. A graphing calculator (Desmos) is built into the Bluebook app and allowed on every Math question, and you may also bring your own approved calculator.' },
      { q: 'Is there a penalty for wrong answers?', a: 'No. There is no penalty for guessing, so you should answer every question — never leave one blank.' },
      { q: 'What is a good digital SAT score?', a: 'It depends on the colleges you are targeting, but the total is out of 1600 (each section out of 800). Look up the middle-50% SAT range for your target schools and aim for the upper end of it.' },
    ],
    related: [
      { href: '/sat', label: 'SAT prep with an AI tutor on every question' },
      { href: '/resources/sat-vs-psat-differences', label: 'SAT vs PSAT: what\'s the difference?' },
      { href: '/resources/psat-nmsqt-national-merit-explained', label: 'PSAT/NMSQT & National Merit, explained' },
    ],
  },

  {
    slug: 'psat-nmsqt-national-merit-explained',
    category: 'SAT & PSAT',
    readMins: 8,
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
    title: 'PSAT/NMSQT & the National Merit Scholarship, Explained',
    metaDescription:
      'What the PSAT/NMSQT is, how the Selection Index works, and how to reach Commended and Semifinalist status in the National Merit Scholarship Program — plus why the cutoff depends on your state.',
    ogTitle: 'PSAT/NMSQT & the National Merit Scholarship, Explained',
    ogDesc:
      'How the PSAT/NMSQT qualifies students for National Merit — the Selection Index, Commended vs Semifinalist, and why cutoffs differ by state.',
    h1: 'PSAT/NMSQT & the National Merit Scholarship, Explained',
    excerpt:
      'Only one test in one specific year opens the door to National Merit. Here is how the PSAT/NMSQT and the Selection Index actually work — and why the number you need depends on your state.',
    intro: [
      'For high-achieving students, the PSAT/NMSQT is much more than SAT practice: it is the single gateway to the National Merit Scholarship Program. But the rules are specific and easy to get wrong — which year counts, what the Selection Index is, and why a score that earns Semifinalist in one state falls short in another. This guide clears it up.',
      'Note: recognition is determined solely by the National Merit Scholarship Corporation (NMSC). This is an explainer, not official guidance, and EduVerseJr is not affiliated with NMSC or the College Board.',
    ],
    sections: [
      {
        h2: 'What the PSAT/NMSQT is',
        body: [
          'The PSAT/NMSQT (Preliminary SAT / National Merit Scholarship Qualifying Test) is a digital, adaptive test co-sponsored by the College Board and NMSC. It mirrors the digital SAT — the same two sections (Reading & Writing and Math), each delivered as two adaptive modules — but is scored on a slightly lower scale (320–1520). It is a low-stakes practice run for the SAT and, in one specific year, a scholarship-qualifying test.',
        ],
      },
      {
        h2: 'Only your junior-year test counts for National Merit',
        body: [
          'This is the rule students most often miss. Only the PSAT/NMSQT taken in 11th grade (junior year) can qualify you for National Merit. The PSAT 8/9 and the PSAT 10 never count toward National Merit — they are useful for building skills and tracking progress, but they do not enter you into the program. If you want a shot at National Merit, the junior-year PSAT/NMSQT is the one that matters.',
        ],
      },
      {
        h2: 'The Selection Index',
        body: [
          'NMSC does not use your 320–1520 score directly. Instead it uses a Selection Index (SI), which ranges from 48 to 228 and is printed on your official PSAT/NMSQT score report. The Selection Index is what every National Merit cutoff refers to — so when people talk about "the number you need," they mean an SI, not a section score.',
          'Because the index compresses your performance into a narrow band, a few more correct questions can move it several points — often the difference between one recognition level and the next.',
        ],
      },
      {
        h2: 'Commended vs Semifinalist — and why your state matters',
        body: [
          'There are two early recognition levels, and they work very differently:',
        ],
        bullets: [
          'Commended Student uses one national Selection Index cutoff (recently around 207–210) for roughly the top 50,000 scorers nationwide. It is the same number in every state.',
          'Semifinalist uses a higher, state-specific cutoff for roughly the top 16,000 students. Each state gets its own number, so where you live changes the target — cutoffs range from about 210 in lower-cutoff states to the mid-220s in states like California, New Jersey, Massachusetts and DC.',
          'Only Semifinalists advance toward Finalist standing and National Merit scholarships. Commended students are recognised but do not continue in the competition.',
        ],
      },
      {
        h2: 'How to find the number you need',
        body: [
          'Because Semifinalist cutoffs are state-specific and shift by a point or two each year, the practical question is: "What Selection Index do I need in my state?" We built a free, no-login National Merit calculator that takes your Selection Index and state and projects whether you are tracking toward Commended or Semifinalist, using the latest consensus cutoffs.',
          'From there, the path to raising your index is the same as good SAT prep: practise in the real adaptive format, learn the method behind every question you miss, and drill your weakest skills. Because PSAT and SAT skills overlap almost entirely, that work pays off twice.',
        ],
      },
    ],
    faqs: [
      { q: 'Which PSAT counts for National Merit?', a: 'Only the PSAT/NMSQT taken in 11th grade (junior year). The PSAT 8/9 and PSAT 10 do not count toward National Merit, though they help build the skills that raise your junior-year score.' },
      { q: 'What is the Selection Index?', a: 'A score from 48 to 228, printed on your official PSAT/NMSQT report, that NMSC uses for all National Merit cutoffs. Commended uses one national SI cutoff; Semifinalist uses a higher, state-specific SI cutoff.' },
      { q: 'Why is the Semifinalist cutoff different in each state?', a: 'NMSC allocates Semifinalist spots by state, so each state has its own cutoff based on its applicant pool. A Selection Index that qualifies in a lower-cutoff state can fall short in a high-cutoff state like California or New Jersey.' },
      { q: 'What is the difference between Commended and Semifinalist?', a: 'Commended recognises about the top 50,000 scorers using one national cutoff; Semifinalist recognises about the top 16,000 using higher state-specific cutoffs. Only Semifinalists advance toward Finalist status and scholarships.' },
      { q: 'Are these cutoffs official?', a: 'No. NMSC does not publish official cutoffs in advance. Figures quoted here and in our calculator are community-reported estimates that vary by a point or two year to year — treat them as a projection, not a guarantee.' },
    ],
    related: [
      { href: '/national-merit-calculator', label: 'Free National Merit calculator (by state)' },
      { href: '/psat', label: 'PSAT/NMSQT prep by Reva AI' },
      { href: '/resources/sat-vs-psat-differences', label: 'SAT vs PSAT: what\'s the difference?' },
    ],
  },

  {
    slug: 'sat-vs-psat-differences',
    category: 'SAT & PSAT',
    readMins: 5,
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
    title: 'SAT vs PSAT: What\'s the Difference?',
    metaDescription:
      'SAT vs PSAT compared: which test counts for college admissions, which one qualifies for National Merit, how the scores differ (1600 vs 1520), and when students take each.',
    ogTitle: 'SAT vs PSAT: What\'s the Difference?',
    ogDesc:
      'A quick, clear comparison of the SAT and PSAT — purpose, scoring, timing and which one matters for college and for National Merit.',
    h1: 'SAT vs PSAT: What\'s the Difference?',
    excerpt:
      'They look almost identical on test day, but the SAT and PSAT do very different jobs. Here is what actually separates them.',
    intro: [
      'The SAT and the PSAT are built on the same digital, adaptive engine and feel nearly identical while you take them. What differs is their purpose: one is used by colleges for admissions, the other is a practice-and-qualifying test. Getting the distinction right helps you plan which test to take, and when.',
    ],
    sections: [
      {
        h2: 'Different jobs',
        body: [
          'The SAT is a college-admissions test — the score colleges see and use. The PSAT family (PSAT 8/9, PSAT 10 and PSAT/NMSQT) is a set of practice tests that track progress and, in the case of the junior-year PSAT/NMSQT, qualify students for the National Merit Scholarship. Colleges do not use PSAT scores for admissions.',
        ],
      },
      {
        h2: 'Scoring and difficulty',
        body: [
          'Both are scored out of two equal sections, but on different scales. The SAT tops out at 1600 (two 800-point sections); the PSAT/NMSQT tops out at 1520 (two 760-point sections). The PSAT is pitched slightly easier because it targets younger students, but the content domains and question styles are the same, which is why PSAT prep transfers almost perfectly to the SAT.',
        ],
        bullets: [
          'SAT: scored 400–1600. Used for college admissions.',
          'PSAT/NMSQT: scored 320–1520. Qualifies juniors for National Merit via the Selection Index (48–228).',
          'PSAT 8/9 and PSAT 10: lower-stakes practice tests; they do not count for National Merit.',
        ],
      },
      {
        h2: 'When students take each',
        body: [
          'PSAT 8/9 is typically taken in Grades 8–9, PSAT 10 in Grade 10, and the PSAT/NMSQT in Grade 11 (this is the National Merit year). The SAT is usually taken in Grade 11 and again in Grade 12, so students can superscore or improve. Many families use the PSAT sequence as a low-pressure on-ramp to a strong SAT.',
        ],
      },
      {
        h2: 'Bottom line',
        body: [
          'Take the PSAT to practise and — in junior year — to compete for National Merit. Take the SAT for admissions. Because the skills are shared, the smartest approach is one continuous prep track: strengthen the underlying skills once and they lift both scores. That is how Reva AI is built — your PSAT weakness data and tutor history carry straight into SAT prep.',
        ],
      },
    ],
    faqs: [
      { q: 'Does the PSAT count for college admissions?', a: 'No. Colleges use SAT (and ACT) scores for admissions, not PSAT scores. The PSAT is a practice test, and the junior-year PSAT/NMSQT also serves as the National Merit qualifier.' },
      { q: 'Is the PSAT easier than the SAT?', a: 'Slightly. It covers the same content domains and question types but is pitched a little easier and scored on a 320–1520 scale instead of 400–1600, because it targets younger students.' },
      { q: 'Do I need to take the PSAT before the SAT?', a: 'No, it is not required. But the PSAT is excellent low-stakes practice, and the junior-year PSAT/NMSQT is the only way to qualify for National Merit, so most college-bound students take it.' },
      { q: 'Does PSAT prep help my SAT score?', a: 'Yes — almost entirely. The two tests share content domains, question styles and the adaptive format, so skills you build for the PSAT transfer directly to the SAT.' },
    ],
    related: [
      { href: '/resources/digital-sat-format-scoring-timing', label: 'The digital SAT: format, scoring & timing' },
      { href: '/resources/psat-nmsqt-national-merit-explained', label: 'PSAT/NMSQT & National Merit, explained' },
      { href: '/sat', label: 'SAT prep by Reva AI' },
      { href: '/psat', label: 'PSAT prep by Reva AI' },
    ],
  },

  {
    slug: 'help-your-child-with-maths-at-home',
    category: 'For Parents',
    readMins: 6,
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
    title: 'How to Help Your Child With Maths at Home (Grades 5–12)',
    metaDescription:
      'Practical, research-aligned ways to help your child with maths at home — from spacing practice and asking "why" to filling gaps early — even if you are rusty on the maths yourself.',
    ogTitle: 'How to Help Your Child With Maths at Home (Grades 5–12)',
    ogDesc:
      'Practical strategies parents can use to support maths at home, whatever your own maths background — build confidence, close gaps and make practice stick.',
    h1: 'How to Help Your Child With Maths at Home (Grades 5–12)',
    excerpt:
      'You do not need to remember calculus to help your child with maths. A few evidence-aligned habits do more than an hour of frustrated homework battles.',
    intro: [
      'Many parents want to help with maths but feel out of their depth — the methods have changed, and the topics get hard fast. The good news: the things that help most are not about you solving the problems. They are about how practice is structured and how your child thinks about mistakes. Here are practical, evidence-aligned strategies you can use whatever your own maths background.',
    ],
    sections: [
      {
        h2: 'Fill gaps early — maths is a ladder',
        body: [
          'Maths is cumulative: fractions underpin algebra, algebra underpins calculus. A shaky foundation quietly makes every later topic harder. When your child struggles with a new topic, the cause is often an unmastered earlier skill. Rather than pushing through the current chapter, it is worth stepping back a rung to find and fix the missing piece. Diagnosing that gap is one of the things an AI tutor does well — it can trace a wrong answer back to the skill that caused it.',
        ],
      },
      {
        h2: 'Space practice out instead of cramming',
        body: [
          'A large body of learning research shows that short, spaced practice sessions beat one long cramming session for long-term retention. Fifteen focused minutes on most days will stick far better than a two-hour push the night before a test. Mixing a few topics in one session (rather than doing 30 of the same problem) also helps your child learn to recognise which method a problem needs — a skill tests reward.',
        ],
      },
      {
        h2: 'Ask "why" and "how do you know"',
        body: [
          'You do not need to know the answer to ask a good question. When your child explains their reasoning out loud, they either consolidate it or discover the gap themselves. Prompts like "why did you choose that step?", "how could you check that?" or "can you explain it to me like I\'m in Grade 5?" turn homework into understanding. Explaining a concept is one of the most powerful ways to learn it.',
        ],
      },
      {
        h2: 'Treat mistakes as information, not failure',
        body: [
          'Children who believe ability can grow with effort persist longer and achieve more than those who think they are simply "not a maths person." Praise the effort and the strategy ("you kept trying different approaches"), not just the right answer. A wrong answer is a signal about what to practise next, not a verdict on ability — model that calm attitude and your child will absorb it.',
        ],
      },
      {
        h2: 'Use the right support between lessons',
        body: [
          'Homework help is most effective when it is patient, available at the moment of the struggle, and matched to your child\'s exact curriculum. That is hard for any parent to provide on demand. This is exactly the gap Reva AI is built to fill: a 24/7 tutor that explains any topic step-by-step on a whiteboard, adapts to your child\'s grade and country curriculum, and remembers what they have struggled with. For deeper coaching, EduVerseJr also offers live 1-to-1 lessons with expert human teachers.',
        ],
      },
    ],
    faqs: [
      { q: 'I\'m not good at maths — can I still help?', a: 'Yes. The most effective help is not solving problems for your child, but structuring practice (short and spaced), asking them to explain their reasoning, and keeping a calm, growth-minded attitude toward mistakes. None of that requires you to know the maths.' },
      { q: 'How much maths practice should my child do?', a: 'Short and frequent beats long and rare. Fifteen focused minutes on most days, mixing a few topics, builds far stronger retention than a single long cramming session before a test.' },
      { q: 'My child is struggling with a new topic — what should I do?', a: 'Look one step back. Because maths builds on itself, a new-topic struggle is often caused by an earlier unmastered skill. Find and fix that gap first; a diagnostic tool or tutor can help trace it.' },
      { q: 'How can EduVerseJr help at home?', a: 'Reva AI is a 24/7 tutor that explains any topic step-by-step, adapts to your child\'s grade and curriculum, and tracks their weak spots between lessons. EduVerseJr also offers live 1-to-1 classes with expert human teachers for deeper coaching.' },
    ],
    related: [
      { href: '/reva', label: 'Meet Reva — your child\'s 24/7 AI maths tutor' },
      { href: '/courses', label: 'Maths, Science & Coding courses (Grades 5–12)' },
      { href: '/teachers', label: 'Book a free trial with an expert human teacher' },
    ],
  },
];

// Lookup helper used by the article page.
export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}
