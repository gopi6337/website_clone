// ─────────────────────────────────────────────────────────────────────
// Grade-specific maths landing pages — single source of truth shared by the
// React page (GradeMathsPage.tsx) and the crawler prerender
// (generate-spa-pages.js). Plain .js so the ESM generator and the .tsx page
// both import it (tsconfig allowJs is on).
//
// Each grade has a genuinely distinct topic breakdown (aligned to US Common
// Core, consistent with the /curriculum/united-states data) plus its own
// intro and grade-specific FAQ, so these are not thin/duplicate pages.
// Reva AI covers Grades 5–12 Mathematics, so we publish 8 grade pages.
// ─────────────────────────────────────────────────────────────────────

const REVA_NOTE =
  'Every EduVerseJr plan includes Reva AI Teacher — a 24/7 AI maths tutor that explains any of these topics step-by-step on an interactive whiteboard, adapts to the curriculum your child follows (US, UK, Canada, Australia, Singapore or UAE), and remembers what they have struggled with. For deeper coaching, expert human teachers run live 1-to-1 online classes.';

export const GRADES = [
  {
    grade: 5, slug: 'grade-5-maths',
    title: 'Grade 5 Maths — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 5 maths covers — decimals, fraction operations, volume and the coordinate plane — plus a 24/7 AI tutor and expert human teachers to help. Start free.',
    ogTitle: 'Grade 5 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 5 maths topics explained for parents, with a 24/7 AI tutor and live human teachers to help your child. Start free.',
    h1: 'Grade 5 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 5 is where arithmetic gets serious: decimals, all four fraction operations, and the first taste of the coordinate plane.',
    intro: [
      'Grade 5 is a consolidation year: students master the four operations with decimals and fractions and take their first steps into geometry and the coordinate plane. A strong Grade 5 sets up the ratio, proportion and pre-algebra work that follows in Grade 6.',
    ],
    topics: [
      'Place value of decimals; reading, writing and comparing decimals to thousandths',
      'Multi-digit multiplication and long division',
      'Adding, subtracting, multiplying and dividing fractions',
      'Volume of rectangular prisms',
      'The coordinate plane (Quadrant I) and plotting points',
      'Converting between units of measurement; line plots',
    ],
    faqs: [
      { q: 'What maths should a Grade 5 student know?', a: 'By the end of Grade 5, students should confidently work with decimals to the thousandths, perform all four operations with fractions, find the volume of rectangular prisms and plot points in the first quadrant of the coordinate plane.' },
      { q: 'My Grade 5 child struggles with fractions — what helps?', a: 'Fractions are the year\'s biggest hurdle and underpin Grade 6 ratios and later algebra, so it is worth fixing gaps now. Reva AI diagnoses exactly which fraction skill is missing and re-teaches it step-by-step, and our human teachers can give focused 1-to-1 support.' },
      { q: 'Is Grade 5 maths the same in the UK, Australia or Singapore?', a: 'The core topics overlap, but the exact ordering differs by curriculum (e.g. UK Year 6/KS2, Singapore Primary 5). EduVerseJr aligns lessons to whichever of six curricula your child follows.' },
    ],
    related: [
      { href: '/courses/grade-6-maths', label: 'Grade 6 Maths →' },
      { href: '/curriculum/united-states', label: 'US Grade-by-grade maths curriculum' },
      { href: '/reva', label: 'Meet Reva — your child\'s 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 6, slug: 'grade-6-maths',
    title: 'Grade 6 Maths — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 6 maths covers — ratios and unit rates, negative numbers, expressions and one-variable equations — plus a 24/7 AI tutor and human teachers. Start free.',
    ogTitle: 'Grade 6 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 6 maths topics explained, with a 24/7 AI tutor and live human teachers to help your child. Start free.',
    h1: 'Grade 6 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 6 introduces ratios, negative numbers and the first real algebra — expressions and one-variable equations.',
    intro: [
      'Grade 6 is the on-ramp to pre-algebra. Students meet ratios and unit rates, extend numbers below zero, and begin writing and solving expressions and equations with variables. Confident work here makes Grade 7 proportional reasoning far easier.',
    ],
    topics: [
      'Ratios, rates and unit rates',
      'Dividing fractions by fractions',
      'Negative numbers, absolute value and the number line',
      'Arithmetic with positive and negative numbers',
      'Writing and solving one-variable expressions and equations',
      'Introduction to statistics — mean, median, range; surface area and volume',
    ],
    faqs: [
      { q: 'What new maths do students learn in Grade 6?', a: 'The big new ideas are ratios and unit rates, negative numbers and absolute value, and the start of algebra — using letters in expressions and solving one-variable equations. Students also meet basic statistics such as mean, median and range.' },
      { q: 'Why do ratios matter so much in Grade 6?', a: 'Ratios and unit rates are the foundation for Grade 7 proportional relationships and later for slope and linear functions. A shaky start here shows up repeatedly, so it is a good place to make sure understanding is solid.' },
      { q: 'How can EduVerseJr help a Grade 6 student?', a: 'Reva AI gives on-demand, step-by-step help on any Grade 6 topic and tracks weak spots; human teachers add live 1-to-1 coaching. You can start free with no credit card.' },
    ],
    related: [
      { href: '/courses/grade-5-maths', label: '← Grade 5 Maths' },
      { href: '/courses/grade-7-maths', label: 'Grade 7 Maths →' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 7, slug: 'grade-7-maths',
    title: 'Grade 7 Maths — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 7 maths covers — proportional relationships, rational numbers, two-step equations, circles and probability — plus a 24/7 AI tutor and human teachers. Start free.',
    ogTitle: 'Grade 7 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 7 maths topics explained, with a 24/7 AI tutor and live human teachers. Start free.',
    h1: 'Grade 7 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 7 is all about proportional reasoning and operating fluently with all rational numbers — the last stop before formal algebra.',
    intro: [
      'Grade 7 deepens the ratio work of Grade 6 into full proportional relationships and extends arithmetic to all rational numbers, including negatives. Students solve two-step equations and inequalities and meet circles and probability — the final groundwork before Grade 8 linear algebra.',
    ],
    topics: [
      'Proportional relationships and constant of proportionality',
      'Operations with all rational numbers (including negatives)',
      'Simplifying linear expressions; two-step equations and inequalities',
      'Scale drawings',
      'Circumference and area of circles',
      'Probability of simple and compound events; sampling and populations',
    ],
    faqs: [
      { q: 'What is the hardest part of Grade 7 maths?', a: 'For many students it is operating confidently with negative numbers and keeping track of signs while solving two-step equations. Proportional reasoning is the conceptual centre of the year and rewards plenty of varied practice.' },
      { q: 'Does Grade 7 maths prepare students for algebra?', a: 'Yes. Two-step equations, proportional relationships and work with rational numbers are the direct foundation for the linear equations and functions students meet in Grade 8 and Algebra I.' },
      { q: 'How does Reva AI help in Grade 7?', a: 'Reva explains each topic step-by-step, adapts practice to a student\'s weakest skills, and lets them ask questions out loud or upload a homework photo. Start free, no credit card.' },
    ],
    related: [
      { href: '/courses/grade-6-maths', label: '← Grade 6 Maths' },
      { href: '/courses/grade-8-maths', label: 'Grade 8 Maths →' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 8, slug: 'grade-8-maths',
    title: 'Grade 8 Maths — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 8 maths covers — linear equations, systems, functions, the Pythagorean theorem and transformations — plus a 24/7 AI tutor and human teachers. Start free.',
    ogTitle: 'Grade 8 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 8 maths topics explained, with a 24/7 AI tutor, live human teachers and PSAT 8/9 prep. Start free.',
    h1: 'Grade 8 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 8 is the bridge to high-school maths: linear equations, systems, functions and the Pythagorean theorem.',
    intro: [
      'Grade 8 is a pivotal year — it introduces functions and the algebra of linear equations and systems that Algebra I builds on directly. Students also meet the Pythagorean theorem, transformations and the volume of curved solids. From Grade 8, students on our G8 annual plan also get PSAT 8/9 preparation.',
    ],
    topics: [
      'Linear equations in one and two variables',
      'Systems of two linear equations',
      'Introduction to functions',
      'Transformations and congruence; similarity',
      'The Pythagorean theorem',
      'Volume of cones, cylinders and spheres; scatter plots; irrational numbers',
    ],
    faqs: [
      { q: 'Why is Grade 8 maths so important?', a: 'Grade 8 introduces functions and the linear-equation and systems work that Algebra I depends on. A strong Grade 8 makes the jump to high-school maths much smoother; gaps here tend to compound quickly.' },
      { q: 'Does EduVerseJr offer PSAT prep in Grade 8?', a: 'Yes. Students on the Grade 8 annual plan get PSAT 8/9 preparation included, and a standalone PSAT 8/9 plan is coming soon. PSAT 8/9 is a low-stakes introduction to the digital SAT format.' },
      { q: 'My child finds functions confusing — can Reva help?', a: 'Yes. Reva explains functions with worked examples and a live whiteboard, then adapts practice to the exact skill your child is missing. You can start free with no credit card.' },
    ],
    related: [
      { href: '/courses/grade-7-maths', label: '← Grade 7 Maths' },
      { href: '/courses/grade-9-maths', label: 'Grade 9 Maths →' },
      { href: '/psat', label: 'PSAT 8/9 prep' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 9, slug: 'grade-9-maths',
    title: 'Grade 9 Maths (Algebra I) — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 9 maths (Algebra I) covers — linear, exponential and quadratic functions, factoring, systems and statistics — plus a 24/7 AI tutor and human teachers. Start free.',
    ogTitle: 'Grade 9 Maths / Algebra I: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 9 Algebra I topics explained, with a 24/7 AI tutor, live human teachers and PSAT prep. Start free.',
    h1: 'Grade 9 Maths (Algebra I) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 9 is usually Algebra I — the gateway course: linear and exponential functions, quadratics and factoring.',
    intro: [
      'For most students Grade 9 means Algebra I, the course that unlocks all later high-school maths. Students work with linear, exponential and quadratic functions, factor expressions, and solve systems. Because these skills reappear on the PSAT and SAT, a strong Grade 9 pays off well beyond the classroom.',
    ],
    topics: [
      'Linear and exponential functions',
      'Quadratic functions and graphing',
      'Factoring and polynomial operations (introduction)',
      'Systems of equations and inequalities',
      'Absolute value equations and inequalities',
      'Descriptive statistics and analysing categorical data',
    ],
    faqs: [
      { q: 'Is Grade 9 maths the same as Algebra I?', a: 'In most US schools, yes — Grade 9 maths is Algebra I. Some students take Algebra I earlier (Grade 8) or follow an integrated maths sequence; EduVerseJr can adjust the lesson order to match your child\'s school.' },
      { q: 'How does Grade 9 maths connect to the SAT?', a: 'Directly. Algebra I skills — linear equations, systems, quadratics and functions — are heavily tested on the digital SAT and PSAT. Building them well in Grade 9 is the best early SAT preparation there is.' },
      { q: 'Can Reva help with Algebra I homework?', a: 'Yes. Reva teaches each Algebra I topic step-by-step on a whiteboard, checks answers with explanations, and can read a photo of a homework problem. Start free, no credit card.' },
    ],
    related: [
      { href: '/courses/grade-8-maths', label: '← Grade 8 Maths' },
      { href: '/courses/grade-10-maths', label: 'Grade 10 Maths →' },
      { href: '/sat', label: 'SAT prep by Reva AI' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 10, slug: 'grade-10-maths',
    title: 'Grade 10 Maths (Geometry) — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 10 maths (Geometry) covers — congruence and similarity proofs, right-triangle trigonometry, circle theorems and coordinate geometry — plus a 24/7 AI tutor. Start free.',
    ogTitle: 'Grade 10 Maths / Geometry: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 10 Geometry topics explained, with a 24/7 AI tutor, live human teachers and SAT/PSAT prep. Start free.',
    h1: 'Grade 10 Maths (Geometry) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 10 is typically Geometry — proofs, right-triangle trigonometry and circle theorems — with many students starting Algebra II alongside.',
    intro: [
      'Grade 10 usually means Geometry: formal reasoning and proof, right-triangle trigonometry, and the properties of circles and 3D solids. Many students begin Algebra II concurrently. The trigonometry and coordinate-geometry skills introduced here are tested on the SAT, so Grade 10 is a natural time to begin PSAT/SAT preparation.',
    ],
    topics: [
      'Congruence and similarity proofs',
      'Right-triangle trigonometry (sine, cosine, tangent)',
      'Circle theorems',
      'Coordinate geometry and transformations',
      'Volume and surface area of 3D figures',
      'Geometric probability (many students also begin Algebra II)',
    ],
    faqs: [
      { q: 'What maths do students take in Grade 10?', a: 'In the common US sequence Grade 10 is Geometry, often with Algebra II started alongside for accelerated students. Schools using integrated maths cover a blend; EduVerseJr adapts to your child\'s pathway.' },
      { q: 'Should my Grade 10 child start SAT prep?', a: 'Grade 10 is a good time to begin, because the trigonometry and algebra covered this year appear on the digital SAT. Many students take the PSAT 10 or PSAT/NMSQT around now — our SAT prep and National Merit calculator support that.' },
      { q: 'Geometry proofs are hard — can Reva help?', a: 'Yes. Reva walks through the logic of each proof step-by-step on a whiteboard and adapts practice to where a student gets stuck. Start free with no credit card.' },
    ],
    related: [
      { href: '/courses/grade-9-maths', label: '← Grade 9 Maths' },
      { href: '/courses/grade-11-maths', label: 'Grade 11 Maths →' },
      { href: '/sat', label: 'SAT prep by Reva AI' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
  {
    grade: 11, slug: 'grade-11-maths',
    title: 'Grade 11 Maths (Algebra II / Pre-Calc) — Topics & Help',
    metaDescription: 'What Grade 11 maths (Algebra II / Pre-Calculus) covers — polynomial, rational, exponential and logarithmic functions, trigonometry and sequences — plus SAT & National Merit prep. Start free.',
    ogTitle: 'Grade 11 Maths / Algebra II: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 11 Algebra II / Pre-Calculus topics, with a 24/7 AI tutor, human teachers, SAT and National Merit prep. Start free.',
    h1: 'Grade 11 Maths (Algebra II / Pre-Calculus) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 11 is the big SAT year — Algebra II and Pre-Calculus, and the junior-year PSAT/NMSQT that qualifies for National Merit.',
    intro: [
      'Grade 11 is a demanding, high-stakes year. Mathematically it covers Algebra II and Pre-Calculus — polynomial, rational, exponential, logarithmic and trigonometric functions. It is also the SAT year, and the junior-year PSAT/NMSQT is the one that qualifies students for the National Merit Scholarship. EduVerseJr supports the maths and the test prep together.',
    ],
    topics: [
      'Polynomial and rational functions',
      'Exponential and logarithmic functions',
      'Trigonometric functions and identities',
      'Sequences and series',
      'Complex numbers and conic sections',
      'Probability and statistics for advanced study',
    ],
    faqs: [
      { q: 'What maths is covered in Grade 11?', a: 'Grade 11 typically covers Algebra II and the start of Pre-Calculus: polynomial, rational, exponential, logarithmic and trigonometric functions, plus sequences, series and complex numbers.' },
      { q: 'Why is Grade 11 so important for the SAT and National Merit?', a: 'The junior-year PSAT/NMSQT is the only test that qualifies students for National Merit, and most students take the SAT in Grade 11. Our SAT prep, PSAT/NMSQT prep and free National Merit calculator are built for exactly this year.' },
      { q: 'Can EduVerseJr help with both Grade 11 maths and SAT prep?', a: 'Yes — that is the point. Reva teaches the Algebra II / Pre-Calc curriculum and doubles as an SAT tutor, and your weakness data carries between the two. Start free, no credit card.' },
    ],
    related: [
      { href: '/courses/grade-10-maths', label: '← Grade 10 Maths' },
      { href: '/courses/grade-12-maths', label: 'Grade 12 Maths →' },
      { href: '/sat', label: 'SAT prep by Reva AI' },
      { href: '/national-merit-calculator', label: 'Free National Merit calculator' },
    ],
  },
  {
    grade: 12, slug: 'grade-12-maths',
    title: 'Grade 12 Maths (Pre-Calc / Calculus) — Topics & Help',
    metaDescription: 'What Grade 12 maths (Pre-Calculus and Calculus foundations) covers — limits, rates of change, advanced trigonometry, vectors and matrices — plus a 24/7 AI tutor and SAT prep. Start free.',
    ogTitle: 'Grade 12 Maths / Calculus: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 12 Pre-Calculus / Calculus topics, with a 24/7 AI tutor, human teachers and SAT prep. Start free.',
    h1: 'Grade 12 Maths (Pre-Calculus & Calculus Foundations) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 12 completes school maths — Pre-Calculus and the foundations of Calculus — while many students finish SAT testing.',
    intro: [
      'Grade 12 rounds out school mathematics with Pre-Calculus and, for calculus-bound students, the foundations of Calculus: limits, rates of change and an introduction to derivatives and integrals. Students also polish advanced trigonometry, vectors and matrices. Many complete their final SAT sittings this year, and EduVerseJr supports both the coursework and any last-mile SAT prep.',
    ],
    topics: [
      'Limits and rates of change; introduction to derivatives and integrals',
      'Advanced trigonometry and identities',
      'Vectors and matrices',
      'Parametric and polar representations (pre-calculus)',
      'Sequences, series and the binomial theorem',
      'Preparation for AP Calculus and AP Statistics',
    ],
    faqs: [
      { q: 'What maths do students take in Grade 12?', a: 'Grade 12 usually covers Pre-Calculus and, for students continuing to calculus, an introduction to limits, derivatives and integrals, alongside advanced trigonometry, vectors and matrices. Some students take AP Calculus or AP Statistics.' },
      { q: 'Does EduVerseJr cover AP Calculus or AP Statistics?', a: 'Reva covers the Pre-Calculus and Calculus-foundation topics that lead into AP courses, and our content library includes AP Statistics and Pre-Calculus material. Human teachers can provide focused AP coaching.' },
      { q: 'Can a Grade 12 student still use Reva for SAT prep?', a: 'Yes. If you have a final SAT sitting, Reva\'s SAT mode tutors you on every question and targets your weakest skills. Start free with no credit card.' },
    ],
    related: [
      { href: '/courses/grade-11-maths', label: '← Grade 11 Maths' },
      { href: '/sat', label: 'SAT prep by Reva AI' },
      { href: '/courses', label: 'All courses (Maths, Science, Coding)' },
      { href: '/reva', label: 'Meet Reva — 24/7 AI maths tutor' },
    ],
  },
];

export const GRADE_REVA_NOTE = REVA_NOTE;

export function getGradeBySlug(slug) {
  return GRADES.find((g) => g.slug === slug);
}
