// ─────────────────────────────────────────────────────────────────────
// Coding course data — one entry per indexable /coding/<slug> page.
// Shared between CodingCoursePage.tsx (runtime) and generate-spa-pages.js
// (build-time prerender), exactly like gradeLevels.js drives the maths
// course pages. Content is derived from the real coding programme shown in
// CodingCurriculumSection.tsx (Python, AI, Web, App/Game, Block-based,
// Certifications) — each course has a genuinely distinct topic list, intro
// and FAQ so these are not thin/duplicate pages.
// ─────────────────────────────────────────────────────────────────────

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
      'Every concept is taught through a project. Students learn variables, loops and functions by making things work, then progress to popular Python libraries, object-oriented programming (OOP) and turning raw numbers into charts and dashboards.',
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
    faqs: [
      { q: 'Does my child need any coding experience to start?', a: 'No. The course begins with the absolute basics of Python and builds up step by step, so complete beginners in Grade 5 and up can follow comfortably.' },
      { q: 'Is Python a good first programming language for kids?', a: 'Yes. Python has simple, readable syntax that lets children focus on problem-solving rather than fighting the language, while still being a professional tool used in AI, data science and web development.' },
      { q: 'What will my child have built by the end?', a: 'Students finish with a portfolio of GUI-based apps, small games and data-visualization projects they have coded themselves.' },
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
      'Artificial intelligence is reshaping every field, and children learn it best by building with it. This 36-lesson course takes students who know some Python and teaches the core ideas behind modern AI — machine learning, neural networks and natural language processing — through hands-on projects.',
      'Rather than abstract theory, students train simple models, see how machines learn from data, and create AI-powered apps and games. It is the natural next step after Python Fundamentals.',
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
    faqs: [
      { q: 'What should my child know before this course?', a: 'A working grasp of Python fundamentals (variables, loops, functions). Our Python Fundamentals course is the recommended prerequisite.' },
      { q: 'Is AI too advanced for school-age children?', a: 'No — the concepts are introduced visually and through projects. Students see machines learn from data and build simple AI apps, without needing university-level maths.' },
      { q: 'Which age or grade is this best for?', a: 'It suits motivated students in Grades 5–10 who have already completed a first Python course.' },
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
    faqs: [
      { q: 'What age is block-based coding suitable for?', a: 'It is our recommended starting point for younger or first-time coders in Grades 5 and up, though any beginner benefits from learning the logic visually first.' },
      { q: 'Does block-based coding teach "real" programming?', a: 'Yes. The blocks represent the same concepts — loops, conditionals, events, functions — used in text languages, so students build genuine programming logic they later apply in Python and JavaScript.' },
      { q: 'What comes after this course?', a: 'Students typically move on to Python Fundamentals or Web Development once they are comfortable with programming logic.' },
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
    faqs: [
      { q: 'Do students learn HTML, CSS and JavaScript separately?', a: 'They learn them together, the way real websites are built — HTML for structure, CSS for design and JavaScript for behaviour — so projects feel real from early on.' },
      { q: 'Will my child build a real website?', a: 'Yes. Students build and publish responsive websites, portfolios and interactive web apps they can share with family and friends.' },
      { q: 'Is any prior coding needed?', a: 'No prior web experience is required. Some familiarity with programming logic (from block-based coding or Python) helps but is not essential.' },
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
    faqs: [
      { q: 'What should my child know before starting?', a: 'This is an advanced course. Prior experience with Web Development (HTML/CSS/JavaScript) or Python is strongly recommended.' },
      { q: 'Do students work with real developer tools?', a: 'Yes — students build inside Visual Studio and connect projects to a database, mirroring how professional apps are made.' },
      { q: 'How long is the course?', a: 'It is our largest coding course at 96 lessons, taught live 1-to-1 and paced to the student.' },
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
    ],
    topics: [
      'PCEP — Certified Entry-Level Python Programmer (Python Institute)',
      'WDA — Certified Associate Web Developer (OpenEDG)',
      'Exam structure and what each certification covers',
      'Guided study materials and revision guides',
      'Practice assessments and mock exams',
      'One-to-one coaching towards exam readiness',
    ],
    faqs: [
      { q: 'Which certifications does EduVerseJr prepare students for?', a: 'PCEP (Certified Entry-Level Python Programmer) by the Python Institute, and WDA (Certified Associate Web Developer) by OpenEDG.' },
      { q: 'Are these certifications recognised?', a: 'Yes — PCEP and WDA are globally recognised entry-level credentials issued by the Python Institute and OpenEDG respectively.' },
      { q: 'What preparation support is included?', a: 'Students receive course materials, study guides, presentations and practice assessments, plus live 1-to-1 coaching toward the exam.' },
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
