// ─────────────────────────────────────────────────────────────────────
// Coding course data — one entry per indexable /coding/<slug> page.
// Shared between CodingCoursePage.tsx (runtime) and generate-spa-pages.js
// (build-time prerender), exactly like gradeLevels.js drives the maths
// course pages. Content is derived from the real coding programme shown in
// CodingCurriculumSection.tsx (Python, AI, Web, App/Game, Block-based,
// Certifications). Each course has a genuinely distinct topic list, a
// three-paragraph intro, a per-course teachingNote and five course-specific
// FAQs so these are not thin/duplicate pages. (2026-08-23: intros deepened
// 2→3 paras, FAQs 3→5, and the shared REVA note replaced by a per-course
// teachingNote — to fix "Discovered / currently not indexed" on the thinner
// coding pages.)
// ─────────────────────────────────────────────────────────────────────

// Fallback only — every course below now sets its own `teachingNote`, so this
// generic paragraph is no longer rendered on any page. Kept for safety.
export const CODING_REVA_NOTE =
  'Every EduVerseJr coding course is taught live 1-to-1 by an expert human teacher, with a project-based, build-as-you-learn approach. Lessons are paced to your child and aligned to a clear progression — from first principles to shipping real apps, games and websites. Students keep every project they build, and Reva AI Teacher is available between classes for practice and doubt-clearing.';

export const CODING_COURSES = [
  {
    slug: 'python-fundamentals',
    title: 'Python Coding for Kids — Fundamentals & Data Visualization',
    h1: 'Python Fundamentals & Data Visualization — Coding for Grades 5–10',
    grade: 'Grades 5–10',
    lessons: 60,
    metaDescription:
      'Live 1-to-1 Python coding course for kids in Grades 5–10. Learn Python basics, libraries, object-oriented programming and data visualization by building real apps and games. Book a free trial.',
    ogTitle: 'Python Coding for Kids (Grades 5–10) | EduVerseJr',
    ogDesc:
      'A 60-lesson, project-based Python course for Grades 5–10 — fundamentals, libraries, OOP and data visualization. Taught live 1-to-1. Free trial class.',
    intro: [
      'Python is the ideal first text-based language for young coders — readable, forgiving and used everywhere from data science to game development. In this 60-lesson course, students in Grades 5–10 move from their very first line of Python to building GUI apps, small games and data visualizations they can show off.',
      'Every concept is taught through a project. Students learn variables, loops and functions by making things work rather than by memorising syntax, then progress to popular Python libraries, object-oriented programming (OOP) and turning raw numbers into charts and dashboards.',
      'Because Python is genuinely readable, children spend their energy on problem-solving instead of fighting punctuation — which is why it is the language most first-year university courses now teach. The 60 lessons are paced one-to-one, so a fast learner can accelerate and a cautious beginner can consolidate, and the fundamentals built here lead directly into our Python with AI course and the PCEP certification track.',
    ],
    topics: [
      'Python basics — variables, data types, input/output and operators',
      'Control flow — conditionals, loops and logical thinking',
      'Functions, modules and reusable code',
      'Working with Python libraries (e.g. turtle, tkinter, matplotlib)',
      'Object-oriented programming (OOP) — classes and objects',
      'Building GUI-based apps and simple games',
      'Data visualization — turning data into charts and graphs',
    ],
    teachingNote:
      'Python Fundamentals is taught live, one-to-one, with a build-as-you-learn approach: every new idea — a loop, a function, a class — is introduced by using it in a working program rather than in the abstract. Your child keeps every app, game and chart they make, and between classes Reva AI Teacher is available for extra practice and doubt-clearing. The course maps onto the PCEP (Certified Entry-Level Python Programmer) syllabus, so motivated students can progress toward a recognised credential.',
    faqs: [
      { q: 'Does my child need any coding experience to start?', a: 'No. The course begins with the absolute basics of Python and builds up step by step, so complete beginners in Grade 5 and up can follow comfortably.' },
      { q: 'Is Python a good first programming language for kids?', a: 'Yes. Python has simple, readable syntax that lets children focus on problem-solving rather than fighting the language, while still being a professional tool used in AI, data science and web development.' },
      { q: 'How are the 60 lessons structured?', a: 'Lessons are live, one-to-one and paced to your child. They are grouped into stages — basics and control flow, functions and libraries, object-oriented programming, then GUI apps and data visualization — with a small project closing each stage so progress is always visible.' },
      { q: 'What will my child have built by the end?', a: 'Students finish with a portfolio of GUI-based apps, small games and data-visualization projects — charts and dashboards — they have coded themselves and can demonstrate.' },
      { q: 'Does this course lead to a certification?', a: 'Yes. Python Fundamentals covers the ground tested by PCEP (Certified Entry-Level Python Programmer) from the Python Institute; students who want the credential can continue into our dedicated Coding Certifications track.' },
    ],
    related: [
      { href: '/coding/python-with-ai', label: 'Next: Python with AI →' },
      { href: '/coding/coding-certifications', label: 'Coding certifications (PCEP) →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
  {
    slug: 'python-with-ai',
    title: 'Python with AI for Kids — Machine Learning & Neural Networks',
    h1: 'Python with AI — Machine Learning Coding for Grades 5–10',
    grade: 'Grades 5–10',
    lessons: 36,
    metaDescription:
      'Live 1-to-1 Python + AI coding course for Grades 5–10. Learn machine learning, neural networks and natural language processing through real-world projects. Book a free trial.',
    ogTitle: 'Python with AI for Kids (Grades 5–10) | EduVerseJr',
    ogDesc:
      'A 36-lesson project course teaching machine learning, neural networks and NLP with Python. For Grades 5–10, taught live 1-to-1. Free trial class.',
    intro: [
      'Artificial intelligence is reshaping every field, and children learn it best by building with it. This 36-lesson course takes students who already know some Python and teaches the core ideas behind modern AI — machine learning, neural networks and natural language processing — through hands-on projects.',
      'Rather than abstract theory, students train simple models, watch how machines learn from data, and create AI-powered apps and games. It is the natural next step after Python Fundamentals, and each project is chosen so the AI idea is visible rather than hidden behind maths a child has not met yet.',
      'Students see a model improve as it is given more data, or a classifier get fooled, and reason about why — which builds genuine intuition, not just buzzwords. Hands-on AI experience like this still stands out on a school or scholarship application, and everything is taught with visuals and code so no university-level maths is required.',
    ],
    topics: [
      'How AI and machine learning actually work',
      'Preparing and understanding data',
      'Training a first machine-learning model',
      'Introduction to neural networks',
      'Natural language processing (NLP) basics',
      'Building AI-powered apps and games',
      'Real-world AI projects and mini-challenges',
    ],
    teachingNote:
      'Python with AI is taught live one-to-one and is unashamedly project-first: students train real (if small) models and build AI-powered apps rather than working through theory. Concepts are introduced visually — data as points on a graph, a neural network as connected layers — so no university-level maths is needed. Reva AI Teacher supports practice between sessions, and the course assumes a working grasp of Python from our Fundamentals course.',
    faqs: [
      { q: 'What should my child know before this course?', a: 'A working grasp of Python fundamentals (variables, loops, functions). Our Python Fundamentals course is the recommended prerequisite.' },
      { q: 'Is AI too advanced for school-age children?', a: 'No — the concepts are introduced visually and through projects. Students see machines learn from data and build simple AI apps, without needing university-level maths.' },
      { q: 'Which age or grade is this best for?', a: 'It suits motivated students in Grades 5–10 who have already completed a first Python course and want to build something with AI.' },
      { q: 'What kind of AI projects will my child build?', a: 'Students train a simple machine-learning model, build a basic image or text classifier, experiment with a small neural network, and create at least one AI-powered app or game they can demonstrate.' },
      { q: 'Does my child need advanced maths for AI?', a: 'No. The course teaches the ideas behind machine learning through visuals and code rather than calculus or statistics, so a motivated Grade 5–10 student who knows Python can follow it comfortably.' },
    ],
    related: [
      { href: '/coding/python-fundamentals', label: '← Python Fundamentals' },
      { href: '/coding/app-game-development', label: 'App & Game Development with AI →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
  {
    slug: 'block-based-coding',
    title: 'Block-Based Coding for Kids — Games, Apps & Animation',
    h1: 'Block-Based Coding — Games, Apps & Animation for Grades 5–10',
    grade: 'Grades 5–10',
    lessons: 30,
    metaDescription:
      'Live 1-to-1 block-based coding course for kids in Grades 5–10. Learn programming logic by creating apps, games and animations with code.org — no typing required to start. Free trial.',
    ogTitle: 'Block-Based Coding for Kids (Grades 5–10) | EduVerseJr',
    ogDesc:
      'A 30-lesson visual coding course using code.org. Kids build apps, games and animations while learning real programming logic. Grades 5–10, taught live 1-to-1.',
    intro: [
      'Block-based coding is the friendliest possible on-ramp to programming. Instead of worrying about typing and syntax, students snap together visual blocks and instantly see their apps, games and animations come to life.',
      'This 30-lesson course uses code.org to teach the real logic behind programming — sequences, loops, conditionals and events. It builds the mental models children carry into text-based languages like Python and JavaScript later on.',
      'Because the blocks map exactly onto the concepts used in text languages — a repeat block is a loop, an if-block is a conditional — nothing here is "baby coding" that has to be unlearned later. Students leave with the thinking that makes Python and JavaScript feel familiar, which is why we recommend it as the very first step for younger or first-time coders.',
    ],
    topics: [
      'How programs run — sequences and instructions',
      'Loops and repetition',
      'Conditionals and events',
      'Designing simple games with blocks',
      'Creating animations and interactive stories',
      'Building beginner apps on code.org',
      'Debugging and improving your projects',
    ],
    teachingNote:
      'Block-based coding is taught live one-to-one on code.org, with the teacher building alongside your child rather than lecturing. The visual blocks remove typing and syntax so a young beginner can focus purely on logic — sequencing, loops, conditionals and events — and see results instantly. Reva AI Teacher reinforces the same ideas between sessions, and the course is designed to hand off cleanly into Python Fundamentals or Web Development.',
    faqs: [
      { q: 'What age is block-based coding suitable for?', a: 'It is our recommended starting point for younger or first-time coders in Grades 5 and up, though any beginner benefits from learning the logic visually first.' },
      { q: 'Does block-based coding teach "real" programming?', a: 'Yes. The blocks represent the same concepts — loops, conditionals, events, functions — used in text languages, so students build genuine programming logic they later apply in Python and JavaScript.' },
      { q: 'What comes after this course?', a: 'Students typically move on to Python Fundamentals or Web Development once they are comfortable with programming logic.' },
      { q: 'Is block-based coding just for very young children?', a: 'No. It suits any first-time coder in Grade 5 and up. Older beginners move through it quickly, using it to build solid programming logic before switching to Python or JavaScript, while younger students take more time to explore.' },
      { q: 'What will my child have made by the end?', a: 'A set of their own games, animations and interactive stories built on code.org, plus a confident grasp of loops, conditionals and events they can carry into any text-based language.' },
    ],
    related: [
      { href: '/coding/python-fundamentals', label: 'Next: Python Fundamentals →' },
      { href: '/coding/web-development', label: 'Web Development →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development for Kids — HTML, CSS & JavaScript',
    h1: 'Web Development — HTML, CSS & JavaScript for Grades 5–10',
    grade: 'Grades 5–10',
    lessons: 50,
    metaDescription:
      'Live 1-to-1 web development course for Grades 5–10. Learn HTML, CSS and JavaScript to build interactive, responsive websites, portfolios and web apps. Book a free trial.',
    ogTitle: 'Web Development for Kids (Grades 5–10) | EduVerseJr',
    ogDesc:
      'A 50-lesson course teaching HTML, CSS and JavaScript. Kids build responsive websites, portfolios and web apps. Grades 5–10, taught live 1-to-1. Free trial.',
    intro: [
      'The web is where most young coders love to build first, because everything they make is instantly shareable. This 50-lesson course teaches the three languages of the web — HTML for structure, CSS for design and JavaScript for interactivity — together, the way real websites are built.',
      'Students in Grades 5–10 create responsive websites, personal portfolios, landing pages and interactive web apps, learning how professional developers turn an idea into a working site.',
      'Working on the web has a motivating side-effect: everything a student builds has a real URL they can send to family and friends, which keeps young coders engaged far longer than exercises that live only on their own screen. The course finishes with a published portfolio site — a genuine, shareable artefact — and prepares students for our Web Developer (WDA) certification track.',
    ],
    topics: [
      'HTML — structuring web pages',
      'CSS — styling, layout and responsive design',
      'JavaScript — adding interactivity and logic',
      'Building responsive, mobile-friendly pages',
      'Creating portfolios and landing pages',
      'Interactive web apps and simple browser games',
      'Publishing a website to the web',
    ],
    teachingNote:
      'Web Development is taught live one-to-one, building real pages from the first lesson rather than studying tags in isolation. HTML, CSS and JavaScript are taught together — structure, style and behaviour — the way professional sites are actually made, and every project is published so your child can share it. Reva AI Teacher helps with practice between classes, and the course leads into both App & Game Development and the WDA certification.',
    faqs: [
      { q: 'Do students learn HTML, CSS and JavaScript separately?', a: 'They learn them together, the way real websites are built — HTML for structure, CSS for design and JavaScript for behaviour — so projects feel real from early on.' },
      { q: 'Will my child build a real website?', a: 'Yes. Students build and publish responsive websites, portfolios and interactive web apps they can share with family and friends.' },
      { q: 'Is any prior coding needed?', a: 'No prior web experience is required. Some familiarity with programming logic (from block-based coding or Python) helps but is not essential.' },
      { q: 'Will my child\'s websites work on phones?', a: 'Yes. Responsive, mobile-friendly design is taught from early on, so the sites and portfolios students build adapt to phones, tablets and desktops.' },
      { q: 'Does this course lead to a certification?', a: 'It builds directly toward the WDA (Certified Associate Web Developer) from OpenEDG; students who want the credential can continue into our Coding Certifications track.' },
    ],
    related: [
      { href: '/coding/app-game-development', label: 'Next: App & Game Development →' },
      { href: '/coding/coding-certifications', label: 'Web developer certification (WDA) →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
  {
    slug: 'app-game-development',
    title: 'App & Game Development with AI for Kids',
    h1: 'App & Game Development with AI — Coding for Grades 5–10',
    grade: 'Grades 5–10',
    lessons: 96,
    metaDescription:
      'Live 1-to-1 app and game development course for Grades 5–10. Build interactive, responsive apps and games with HTML, CSS, JavaScript, databases and AI. Book a free trial.',
    ogTitle: 'App & Game Development with AI (Grades 5–10) | EduVerseJr',
    ogDesc:
      'A 96-lesson course where kids build real apps and games with HTML, CSS, JavaScript, databases and AI. Grades 5–10, taught live 1-to-1. Free trial.',
    intro: [
      'This is our most in-depth coding course — 96 lessons of building interactive, responsive apps and games from the ground up. Students use HTML, CSS and JavaScript together, work inside a professional editor (Visual Studio), and connect their projects to a real database.',
      'Along the way they add AI features, learn how apps store and retrieve data, and finish with substantial projects they can publish and share with the world. It is the capstone for students who have caught the coding bug.',
      'At 96 lessons it is deliberately a capstone, not an introduction: students spend most of their time building multi-part projects — a game with saved high scores, an app that stores user data — inside the same editor professional developers use. Finishing it leaves a child with real, demonstrable projects and the confidence that they can build almost anything they can imagine.',
    ],
    topics: [
      'Building interactive apps with HTML, CSS and JavaScript',
      'Working inside a professional editor (Visual Studio)',
      'Game mechanics and interactivity',
      'Connecting to a database — storing and retrieving data',
      'Adding AI-powered features to apps and games',
      'Responsive design across devices',
      'Publishing and sharing finished projects',
    ],
    teachingNote:
      'App & Game Development is our most in-depth course, taught live one-to-one over 96 project-based lessons. Students work in Visual Studio and connect their apps to a real database, learning how professional software stores and retrieves data, then add AI-powered features and publish finished projects. Reva AI Teacher supports practice between sessions; prior Web Development or Python experience is strongly recommended.',
    faqs: [
      { q: 'What should my child know before starting?', a: 'This is an advanced course. Prior experience with Web Development (HTML/CSS/JavaScript) or Python is strongly recommended.' },
      { q: 'Do students work with real developer tools?', a: 'Yes — students build inside Visual Studio and connect projects to a database, mirroring how professional apps are made.' },
      { q: 'How long is the course?', a: 'It is our largest coding course at 96 lessons, taught live 1-to-1 and paced to the student.' },
      { q: 'What kind of projects will my child finish with?', a: 'Substantial, publishable apps and games that store and retrieve data — for example a game that saves progress, or an app with user accounts — built and shipped by your child.' },
      { q: 'How is this different from the Web Development course?', a: 'Web Development teaches the three languages of the web and builds sites; App & Game Development assumes those basics and goes deeper into databases, AI features and larger applications inside a professional editor.' },
    ],
    related: [
      { href: '/coding/web-development', label: '← Web Development' },
      { href: '/coding/python-with-ai', label: 'Python with AI →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
  {
    slug: 'coding-certifications',
    title: 'Coding Certifications for Kids — PCEP Python & WDA Web Developer',
    h1: 'Coding Certifications — PCEP Python & WDA Web Developer',
    grade: 'Grades 5–10',
    lessons: null,
    metaDescription:
      'Prepare for globally recognised coding certifications — PCEP (Certified Entry-Level Python Programmer) and WDA (Certified Associate Web Developer). Live 1-to-1 support for Grades 5–10.',
    ogTitle: 'Coding Certifications for Kids — PCEP & WDA | EduVerseJr',
    ogDesc:
      'Live 1-to-1 preparation for PCEP (Python Institute) and WDA (OpenEDG) coding certifications, with study guides and practice assessments. Grades 5–10.',
    intro: [
      'Industry certifications give young coders a recognised, resume-ready credential — proof of skill that stands out for school applications and beyond. EduVerseJr prepares students for two respected entry-level certifications: PCEP and WDA.',
      'Students receive full support — course materials, study guides, presentations and practice assessments — and are coached live 1-to-1 towards exam readiness.',
      'A certification turns "my child can code" into something an admissions officer or programme can verify at a glance, and both PCEP and WDA are entry-level by design — achievable for a well-prepared school student rather than only a working professional. We prepare students to exam readiness with real practice assessments, then support them through booking and sitting the exam.',
    ],
    topics: [
      'PCEP — Certified Entry-Level Python Programmer (Python Institute)',
      'WDA — Certified Associate Web Developer (OpenEDG)',
      'Exam structure and what each certification covers',
      'Guided study materials and revision guides',
      'Practice assessments and mock exams',
      'One-to-one coaching towards exam readiness',
    ],
    teachingNote:
      'Certification preparation is delivered live one-to-one and is built around the official exam blueprints for PCEP (Python Institute) and WDA (OpenEDG). Students receive study guides, presentations and full practice assessments, and are coached until they are consistently passing mock exams before they sit the real thing. Reva AI Teacher provides extra drill between sessions. The best preparation is our Python Fundamentals course (for PCEP) or Web Development course (for WDA).',
    faqs: [
      { q: 'Which certifications does EduVerseJr prepare students for?', a: 'PCEP (Certified Entry-Level Python Programmer) by the Python Institute, and WDA (Certified Associate Web Developer) by OpenEDG.' },
      { q: 'Are these certifications recognised?', a: 'Yes — PCEP and WDA are globally recognised entry-level credentials issued by the Python Institute and OpenEDG respectively.' },
      { q: 'What preparation support is included?', a: 'Students receive course materials, study guides, presentations and practice assessments, plus live 1-to-1 coaching toward the exam.' },
      { q: 'How old does my child need to be to take these exams?', a: 'There is no minimum age for PCEP or WDA; readiness depends on skill, not age. A motivated student who has completed our Python Fundamentals or Web Development course can typically prepare successfully.' },
      { q: 'Which course should my child take before certifying?', a: 'For PCEP, complete Python Fundamentals; for WDA, complete Web Development. Both build exactly the skills the certification exams test, so the prep becomes focused revision.' },
    ],
    related: [
      { href: '/coding/python-fundamentals', label: 'Prepare with Python Fundamentals →' },
      { href: '/coding/web-development', label: 'Prepare with Web Development →' },
      { href: '/teachers', label: 'Book a free trial with an expert teacher' },
    ],
  },
];

export function getCodingCourseBySlug(slug) {
  return CODING_COURSES.find((c) => c.slug === slug);
}
