// ─────────────────────────────────────────────────────────────────────
// Grade-specific maths landing pages — single source of truth shared by the
// React page (GradeMathsPage.tsx) and the crawler prerender
// (generate-spa-pages.js). Plain .js so the ESM generator and the .tsx page
// both import it (tsconfig allowJs is on).
//
// Each grade has a genuinely distinct topic breakdown (aligned to US Common
// Core, consistent with the /curriculum/united-states data) plus its own
// intro, common-challenges detail and grade-specific FAQ, so these are not
// thin/duplicate pages. Reva AI covers Grades 5–12 Mathematics, so we publish
// 8 grade pages. (2026-08-21: intros + FAQs deepened to fix thin-content —
// the pages were ~330 words and being skipped by Google.)
// ─────────────────────────────────────────────────────────────────────

const REVA_NOTE =
  'Every EduVerseJr plan includes Reva AI Teacher — a 24/7 AI maths tutor that explains any of these topics step-by-step on an interactive whiteboard, adapts to the curriculum your child follows (US, UK, Canada, Australia, Singapore or UAE), and remembers what they have struggled with. For deeper coaching, expert human teachers run live 1-to-1 online classes.';

export const GRADES = [
  {
    grade: 5, slug: 'grade-5-maths',
    title: 'Grade 5 Maths — Topics, Help & AI Tutor',
    metaDescription: 'What Grade 5 maths covers — decimals, fraction operations, volume and the coordinate plane — plus a 24/7 AI tutor and expert human teachers to help. Start your free trial.',
    ogTitle: 'Grade 5 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 5 maths topics explained for parents, with a 24/7 AI tutor and live human teachers to help your child. Start your free trial.',
    h1: 'Grade 5 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 5 is where arithmetic gets serious: decimals, all four fraction operations, and the first taste of the coordinate plane.',
    helpNote: 'In Grade 5, Reva AI focuses on the two skills that decide the year — fraction operations and decimal place value — diagnosing exactly which sub-skill is missing and re-teaching it step-by-step on an interactive whiteboard, then setting short adaptive practice until it is automatic. It adapts to whichever curriculum your child follows (US, UK, Canada, Australia, Singapore or UAE) and remembers past mistakes; for deeper support, expert human teachers run live 1-to-1 online classes.',
    intro: [
      'Grade 5 is a consolidation year: students master the four operations with decimals and fractions and take their first steps into geometry and the coordinate plane. A strong Grade 5 sets up the ratio, proportion and pre-algebra work that follows in Grade 6.',
      'The topic that trips up most Grade 5 students is fractions — especially adding and subtracting fractions with unlike denominators and making sense of what it means to multiply or divide by a fraction. Decimal place value is the other common sticking point: children who are fluent with whole numbers can still misread 0.4 as smaller than 0.35. Because both ideas underpin almost everything in Grade 6 and beyond, it is worth catching gaps now rather than letting them compound.',
      'The good news is that Grade 5 maths responds very well to short, targeted practice with immediate feedback. Instead of re-teaching a whole chapter, a good tutor identifies the one missing sub-skill — say, finding a common denominator — and drills just that until it is automatic. That is exactly how Reva AI works, and how our human teachers structure their 1-to-1 sessions.',
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
      { q: 'How much maths practice does a Grade 5 student need?', a: 'Short and regular beats long and occasional. Fifteen to twenty focused minutes a day, aimed at the specific skills a child finds hard, generally does more than an hour of mixed revision at the weekend. Reva AI keeps sessions targeted so that time is well spent.' },
      { q: 'How can I tell if my Grade 5 child is behind in maths?', a: 'Common warning signs are relying on fingers for basic multiplication facts, avoiding word problems, and confusion when comparing decimals or fractions. A quick diagnostic — which Reva runs automatically — pinpoints the exact gaps so you know precisely what to work on.' },
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
    metaDescription: 'What Grade 6 maths covers — ratios and unit rates, negative numbers, expressions and one-variable equations — plus a 24/7 AI tutor and human teachers. Start your free trial.',
    ogTitle: 'Grade 6 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 6 maths topics explained, with a 24/7 AI tutor and live human teachers to help your child. Start your free trial.',
    h1: 'Grade 6 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 6 introduces ratios, negative numbers and the first real algebra — expressions and one-variable equations.',
    helpNote: 'For Grade 6, Reva AI concentrates on ratios, negative-number arithmetic and the first steps of algebra, slowing the reasoning down on a number line and worked examples until sign errors and variable expressions stop being intimidating. It tracks your child\'s weak spots across sessions and adapts to their curriculum (US, UK, Canada, Australia, Singapore or UAE), while expert human teachers add live 1-to-1 coaching where it helps.',
    intro: [
      'Grade 6 is the on-ramp to pre-algebra. Students meet ratios and unit rates, extend numbers below zero, and begin writing and solving expressions and equations with variables. Confident work here makes Grade 7 proportional reasoning far easier.',
      'Two ideas cause most of the difficulty. The first is negative numbers: it is one thing to place them on a number line and quite another to subtract a negative or work out the sign of a product. The second is the leap into algebra — using a letter to stand for an unknown. Students who have only ever "found the answer" now have to represent and manipulate a relationship, which is a genuine shift in thinking that benefits from patient, worked examples.',
      'Ratios sit quietly underneath both of these and are arguably the most important Grade 6 skill for the long run, because they grow into Grade 7 proportional relationships and later into slope and linear functions. Reva AI teaches each of these ideas with step-by-step reasoning on a whiteboard, then sets adaptive practice on the exact sub-skill a student is missing so the foundation is solid before Grade 7.',
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
      { q: 'My child keeps making sign errors with negative numbers — what helps?', a: 'Sign errors are the single most common Grade 6 mistake and usually come from rushing rather than misunderstanding. Reva AI slows the reasoning down, shows each step on a number line, and gives targeted practice until subtracting a negative or multiplying two negatives feels natural.' },
      { q: 'How does Grade 6 prepare my child for algebra?', a: 'Grade 6 is where algebra genuinely begins: writing expressions with variables and solving one-step and one-variable equations. Mastering this, together with ratios and negative-number arithmetic, is the direct groundwork for the two-step equations of Grade 7 and the linear algebra of Grade 8.' },
      { q: 'How can EduVerseJr help a Grade 6 student?', a: 'Reva AI gives on-demand, step-by-step help on any Grade 6 topic and tracks weak spots; human teachers add live 1-to-1 coaching. You can start your free trial with no credit card.' },
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
    metaDescription: 'What Grade 7 maths covers — proportional relationships, rational numbers, two-step equations, circles and probability — plus a 24/7 AI tutor and human teachers. Start your free trial.',
    ogTitle: 'Grade 7 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 7 maths topics explained, with a 24/7 AI tutor and live human teachers. Start your free trial.',
    h1: 'Grade 7 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 7 is all about proportional reasoning and operating fluently with all rational numbers — the last stop before formal algebra.',
    helpNote: 'In Grade 7, Reva AI builds proportional-reasoning fluency — moving between tables, graphs and equations — and drills two-step equations with rational numbers, marking each step so careless sign errors are caught rather than repeated. It remembers what your child struggles with and adapts to their curriculum (US, UK, Canada, Australia, Singapore or UAE); expert human teachers are on hand for live 1-to-1 sessions.',
    intro: [
      'Grade 7 deepens the ratio work of Grade 6 into full proportional relationships and extends arithmetic to all rational numbers, including negatives. Students solve two-step equations and inequalities and meet circles and probability — the final groundwork before Grade 8 linear algebra.',
      'The conceptual heart of the year is proportional reasoning: recognising when two quantities vary in proportion, finding the constant of proportionality, and reading it off a graph, a table or an equation. Students who see these as four views of the same idea sail through; those who treat each as a separate trick tend to struggle. Alongside this, keeping track of signs while solving multi-step equations with negative rational numbers is where careless marks are lost.',
      'Grade 7 is also the last year before algebra becomes the whole subject, so it is the ideal time to close any remaining gaps in fractions, decimals and negative numbers. Reva AI checks those foundations automatically, re-teaches whatever is shaky, and then builds proportional-reasoning fluency through varied, adaptive practice — with human teachers available for students who want live 1-to-1 support.',
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
      { q: 'What is proportional reasoning and why does it matter?', a: 'Proportional reasoning is recognising when two quantities keep a constant ratio and moving fluently between its table, graph and equation. It is the backbone of Grade 7, and it grows directly into slope, linear functions and much of the algebra tested on the SAT — so it is well worth mastering.' },
      { q: 'How do I keep my Grade 7 child from making careless errors?', a: 'Most Grade 7 slips are sign or order-of-operations errors made while rushing, not gaps in understanding. Reva AI marks each step (not just the final answer), points out exactly where the reasoning broke down, and builds the habit of checking — which is what actually reduces careless marks.' },
      { q: 'How does Reva AI help in Grade 7?', a: 'Reva explains each topic step-by-step, adapts practice to a student\'s weakest skills, and lets them ask questions out loud or upload a homework photo. Start your free trial, no credit card.' },
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
    metaDescription: 'What Grade 8 maths covers — linear equations, systems, functions, the Pythagorean theorem and transformations — plus a 24/7 AI tutor and human teachers. Start your free trial.',
    ogTitle: 'Grade 8 Maths: Topics & Online Help | EduVerseJr',
    ogDesc: 'Grade 8 maths topics explained, with a 24/7 AI tutor, live human teachers and PSAT 8/9 prep. Start your free trial.',
    h1: 'Grade 8 Maths — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 8 is the bridge to high-school maths: linear equations, systems, functions and the Pythagorean theorem.',
    helpNote: 'For Grade 8, Reva AI teaches functions in all four forms (rule, table, graph, equation) and walks through systems of equations method by method, because these are the ideas Algebra I depends on. For students on the Grade 8 plan it also folds in PSAT 8/9 practice, adapts to their curriculum and remembers past gaps, with live 1-to-1 human classes available for extra help.',
    intro: [
      'Grade 8 is a pivotal year — it introduces functions and the algebra of linear equations and systems that Algebra I builds on directly. Students also meet the Pythagorean theorem, transformations and the volume of curved solids. From Grade 8, students on our G8 annual plan also get PSAT 8/9 preparation.',
      'The single biggest new idea is the function — the notion that one input produces exactly one output, and that this relationship can be shown as a rule, a table, a graph or an equation. Many students can plug numbers into a formula long before they truly understand what a function is, and that gap quietly undermines Algebra I. Solving systems of two linear equations is the other stretch topic, because it asks students to hold two relationships in mind at once.',
      'Because Grade 8 is the bridge into high school, gaps here are unusually expensive: they show up immediately in Algebra I and again on the PSAT and SAT. Reva AI teaches functions and systems with clear, visual, step-by-step reasoning, checks understanding rather than just answers, and — for students on the Grade 8 plan — folds in PSAT 8/9 practice so the transition to test prep feels natural.',
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
      { q: 'Does EduVerseJr offer PSAT prep in Grade 8?', a: 'Yes. Students on the Grade 8 plan get PSAT 8/9 Math preparation included at no extra cost. PSAT 8/9 is a low-stakes introduction to the digital SAT format.' },
      { q: 'What exactly is a function, in Grade 8 terms?', a: 'A function is a rule that gives each input exactly one output — think of a machine where one number goes in and one comes out. Grade 8 asks students to move between its four forms (rule, table, graph, equation). Reva AI teaches all four together, which is what makes functions finally "click".' },
      { q: 'How do students solve systems of equations, and why is it hard?', a: 'A system asks where two lines meet — the pair of values that satisfies both equations at once, found by graphing, substitution or elimination. It is hard because it means juggling two relationships simultaneously. Reva walks through each method step-by-step and adapts practice to whichever one a student finds trickiest.' },
      { q: 'My child finds functions confusing — can Reva help?', a: 'Yes. Reva explains functions with worked examples and a live whiteboard, then adapts practice to the exact skill your child is missing. You can start your free trial with no credit card.' },
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
    metaDescription: 'What Grade 9 maths (Algebra I) covers — linear, exponential and quadratic functions, factoring, systems and statistics — plus a 24/7 AI tutor and human teachers. Start your free trial.',
    ogTitle: 'Grade 9 Maths / Algebra I: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 9 Algebra I topics explained, with a 24/7 AI tutor, live human teachers and PSAT prep. Start your free trial.',
    h1: 'Grade 9 Maths (Algebra I) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 9 is usually Algebra I — the gateway course: linear and exponential functions, quadratics and factoring.',
    helpNote: 'In Grade 9 (Algebra I), Reva AI targets the year\'s pinch points — factoring and connecting quadratics to their parabolas — with a steady stream of adaptive practice and full step-by-step working whenever your child is stuck. Because these are exactly the skills the digital SAT tests, it doubles as early SAT preparation; expert human teachers provide live 1-to-1 coaching on demand.',
    intro: [
      'For most students Grade 9 means Algebra I, the course that unlocks all later high-school maths. Students work with linear, exponential and quadratic functions, factor expressions, and solve systems. Because these skills reappear on the PSAT and SAT, a strong Grade 9 pays off well beyond the classroom.',
      'Algebra I is often the first course where students cannot get by on memorised procedures alone — it rewards understanding structure. Factoring is the classic pinch point: recognising a difference of squares or a factorable trinomial is a pattern-spotting skill that only comes with varied practice. Quadratics are the other big step, because students must connect the algebra (factoring, the quadratic formula) with the graph (the parabola, its roots and vertex).',
      'Grade 9 is also, quietly, the best early SAT preparation there is: the linear equations, systems, quadratics and functions on the digital SAT are exactly the Algebra I syllabus. Reva AI teaches each of these with worked, step-by-step reasoning, targets the specific skill a student is missing rather than re-teaching whole units, and connects the coursework to test-style questions so the two reinforce each other.',
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
      { q: 'My child struggles with factoring — how can they improve?', a: 'Factoring is pattern recognition, and it improves fastest with lots of short, varied practice rather than a few long problem sets. Reva AI serves a steady stream of factoring problems pitched at the right level, shows the full working when a student is stuck, and flags the specific pattern they keep missing.' },
      { q: 'Why do so many students find Algebra I a big jump?', a: 'Algebra I is often the first course that asks students to reason about structure and relationships rather than just compute an answer, and it moves quickly. Students with small gaps from Grade 8 — functions, negative numbers, linear equations — feel the jump most. Reva closes those gaps first, which is what makes Algebra I manageable.' },
      { q: 'Can Reva help with Algebra I homework?', a: 'Yes. Reva teaches each Algebra I topic step-by-step on a whiteboard, checks answers with explanations, and can read a photo of a homework problem. Start your free trial, no credit card.' },
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
    metaDescription: 'What Grade 10 maths (Geometry) covers — congruence and similarity proofs, right-triangle trigonometry, circle theorems and coordinate geometry — plus a 24/7 AI tutor. Start your free trial.',
    ogTitle: 'Grade 10 Maths / Geometry: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 10 Geometry topics explained, with a 24/7 AI tutor, live human teachers and SAT/PSAT prep. Start your free trial.',
    h1: 'Grade 10 Maths (Geometry) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 10 is typically Geometry — proofs, right-triangle trigonometry and circle theorems — with many students starting Algebra II alongside.',
    helpNote: 'For Grade 10 (Geometry), Reva AI models the structure of a proof one logical step at a time and builds right-triangle trigonometry fluency, explaining why each move is valid rather than just giving the answer. It connects the coordinate geometry and trig to the SAT questions ahead and adapts to your child\'s pathway, while expert human teachers help with proof-writing in live 1-to-1 sessions.',
    intro: [
      'Grade 10 usually means Geometry: formal reasoning and proof, right-triangle trigonometry, and the properties of circles and 3D solids. Many students begin Algebra II concurrently. The trigonometry and coordinate-geometry skills introduced here are tested on the SAT, so Grade 10 is a natural time to begin PSAT/SAT preparation.',
      'Geometry feels different from every maths course before it, and that catches students out. Proof is the reason: instead of computing an answer, students must build a logical argument, justifying each step from definitions, postulates and earlier results. Even strong calculators can find this uncomfortable at first. Right-triangle trigonometry — SOH-CAH-TOA and its applications — is the other new challenge, and it returns directly on the SAT.',
      'The upside is that Geometry rewards a clear method, which is exactly what a good tutor provides. Reva AI walks through each proof one logical step at a time, explains why each step is allowed, and builds trig fluency with adaptive practice — while connecting the coordinate-geometry and trigonometry to the SAT questions your child will soon face. Human teachers are available for students who want live help with proof writing.',
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
      { q: 'Why do students find Geometry proofs so hard?', a: 'Because proof asks for something new: a logical argument that justifies every step, rather than a single numerical answer. It is a different kind of thinking, not harder arithmetic. Reva AI models the structure of a proof, explains the reason each step is valid, and gradually hands the reasoning back to the student.' },
      { q: 'What is right-triangle trigonometry and where does it lead?', a: 'It is the relationship between a right triangle\'s angles and its sides, captured by sine, cosine and tangent (SOH-CAH-TOA). Introduced in Grade 10, it reappears in Grade 11 as the trigonometric functions and shows up on the digital SAT — so it is worth getting genuinely comfortable with now.' },
      { q: 'Geometry proofs are hard — can Reva help?', a: 'Yes. Reva walks through the logic of each proof step-by-step on a whiteboard and adapts practice to where a student gets stuck. Start your free trial with no credit card.' },
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
    metaDescription: 'What Grade 11 maths (Algebra II / Pre-Calculus) covers — polynomial, rational, exponential and logarithmic functions, trigonometry and sequences — plus SAT & National Merit prep. Start your free trial.',
    ogTitle: 'Grade 11 Maths / Algebra II: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 11 Algebra II / Pre-Calculus topics, with a 24/7 AI tutor, human teachers, SAT and National Merit prep. Start your free trial.',
    h1: 'Grade 11 Maths (Algebra II / Pre-Calculus) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 11 is the big SAT year — Algebra II and Pre-Calculus, and the junior-year PSAT/NMSQT that qualifies for National Merit.',
    helpNote: 'In Grade 11, Reva AI teaches the whole family of Algebra II / Pre-Calc functions — polynomial, rational, exponential, logarithmic and trigonometric — by their shared behaviour, and carries weakness data straight into SAT mode on the same account. Paired with our free National Merit calculator, it is built for the junior-year PSAT/NMSQT; expert human teachers add live 1-to-1 coaching.',
    intro: [
      'Grade 11 is a demanding, high-stakes year. Mathematically it covers Algebra II and Pre-Calculus — polynomial, rational, exponential, logarithmic and trigonometric functions. It is also the SAT year, and the junior-year PSAT/NMSQT is the one that qualifies students for the National Merit Scholarship. EduVerseJr supports the maths and the test prep together.',
      'Algebra II widens the idea of a function into a whole family — polynomial, rational, exponential, logarithmic and trigonometric — and asks students to recognise, graph and transform each one. The volume of new function types is what makes the year feel heavy; students who understand the shared behaviour behind them (domain, range, transformations, inverses) cope far better than those memorising each in isolation. Logarithms and trigonometric identities are the usual sticking points.',
      'What makes Grade 11 unusual is that the coursework and the test prep are the same maths, so effort compounds. The functions your child masters for Algebra II are exactly what the digital SAT tests, and the junior-year PSAT/NMSQT is the single test that decides National Merit standing. Reva AI teaches the Algebra II / Pre-Calc syllabus and doubles as an SAT tutor, carrying weakness data between the two, and our free National Merit calculator helps you see where your child stands.',
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
      { q: 'What makes Algebra II harder than Algebra I?', a: 'Mostly the sheer number of new function types — polynomial, rational, exponential, logarithmic and trigonometric — arriving in quick succession. Students who look for the shared ideas (domain and range, transformations, inverses) rather than memorising each function separately find it far more manageable, and that is how Reva teaches it.' },
      { q: 'Can one platform handle both Grade 11 maths and SAT prep?', a: 'Yes, and Grade 11 is exactly where that pays off, because the coursework and the SAT test the same functions. Reva teaches the Algebra II / Pre-Calc curriculum and switches into SAT mode on the same account, so a weakness found in homework becomes the focus of test practice automatically.' },
      { q: 'Can EduVerseJr help with both Grade 11 maths and SAT prep?', a: 'Yes — that is the point. Reva teaches the Algebra II / Pre-Calc curriculum and doubles as an SAT tutor, and your weakness data carries between the two. Start your free trial, no credit card.' },
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
    metaDescription: 'What Grade 12 maths (Pre-Calculus and Calculus foundations) covers — limits, rates of change, advanced trigonometry, vectors and matrices — plus a 24/7 AI tutor and SAT prep. Start your free trial.',
    ogTitle: 'Grade 12 Maths / Calculus: Topics & Help | EduVerseJr',
    ogDesc: 'Grade 12 Pre-Calculus / Calculus topics, with a 24/7 AI tutor, human teachers and SAT prep. Start your free trial.',
    h1: 'Grade 12 Maths (Pre-Calculus & Calculus Foundations) — Topics, Help & a 24/7 AI Tutor',
    excerpt: 'Grade 12 completes school maths — Pre-Calculus and the foundations of Calculus — while many students finish SAT testing.',
    helpNote: 'For Grade 12, Reva AI covers Pre-Calculus and the foundations of Calculus — limits, rates of change and first derivatives — step-by-step, spending real time on intuition so the jump to AP Calculus feels smooth. It switches into SAT mode for any last-mile test prep and adapts to your child\'s course, with expert human teachers offering focused AP coaching in live 1-to-1 sessions.',
    intro: [
      'Grade 12 rounds out school mathematics with Pre-Calculus and, for calculus-bound students, the foundations of Calculus: limits, rates of change and an introduction to derivatives and integrals. Students also polish advanced trigonometry, vectors and matrices. Many complete their final SAT sittings this year, and EduVerseJr supports both the coursework and any last-mile SAT prep.',
      'The defining new idea is the limit — what a function approaches as its input gets close to a value — and, built on it, the derivative as an instantaneous rate of change. This is a genuine conceptual leap from the algebra of earlier years, and it is the gateway to AP Calculus and to STEM study at university. Advanced trigonometry, vectors and matrices round out a year that is more abstract and faster-moving than any before it.',
      'For most families Grade 12 is about two things at once: keeping pace with demanding coursework and finishing any remaining SAT sittings. Reva AI covers the Pre-Calculus and Calculus-foundation topics step-by-step, provides targeted help exactly where a student stalls, and switches into SAT mode for last-mile test prep — while human teachers offer focused coaching for students heading into AP Calculus or AP Statistics.',
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
      { q: 'What is a limit, and why does Grade 12 build everything on it?', a: 'A limit describes what a function approaches as its input nears a particular value, and it is the foundation of calculus — the derivative and integral are both defined using limits. Grasping limits well is what makes the jump into AP Calculus feel smooth rather than sudden, so Reva spends real time on the intuition, not just the notation.' },
      { q: 'How should a Grade 12 student balance coursework and SAT prep?', a: 'The key is not to treat them as separate. Most of the algebra and functions the SAT tests are already secure by Grade 12, so SAT work becomes targeted revision of weak spots plus timing practice. Reva keeps that efficient by focusing only on the skills your child still misses, leaving more time for demanding coursework.' },
      { q: 'Can a Grade 12 student still use Reva for SAT prep?', a: 'Yes. If you have a final SAT sitting, Reva\'s SAT mode tutors you on every question and targets your weakest skills. Start your free trial with no credit card.' },
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
