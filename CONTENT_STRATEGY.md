# CONTENT STRATEGY - EduVerseJr
**Created:** 2025-12-22
**Platform:** EduVerseJr
**Target Audience:** Parents (Grades 5-10)
**Subjects:** Math and Coding
**Countries:** US, Australia, UK, Singapore, Dubai, Canada

---

## ANSWERS SUMMARY

1. **Brand Update:** YES - Update all "beGalileo" to "EduVerseJr"
2. **Math Presentation:** Options A & C - Common topics + Learning outcomes
3. **Country Info:** Country-specific curriculum names
4. **Coding Curriculum:** Update from PDFs
5. **Expandable Sections:** Math (A), Coding (B), FAQ (C) - Testimonials remain as carousel
6. **PDF Downloads:** Coding curriculum only

---

## 1. BRAND UPDATE PLAN

### Files to Update (beGalileo → EduVerseJr):
- Hero section
- All page components
- Footer
- Testimonials
- Meta tags/SEO
- Any hardcoded brand references

---

## 2. MATH CURRICULUM STRATEGY

### Approach: Hybrid (Common Topics + Learning Outcomes)

#### A. Common Math Topics Section
```
🔢 Our Math Curriculum (Grades 5-10)

Core Topics Covered:
• Algebra & Equations
• Geometry & Shapes
• Statistics & Probability
• Number Systems & Operations
• Ratios, Proportions & Percentages
• Measurement & Units
• Data Analysis & Graphs

✓ Aligned with US Common Core Standards
✓ Follows UK National Curriculum
✓ Based on Singapore Math approach
✓ Meets Australian Curriculum requirements
✓ Aligned with Canadian provincial standards
✓ Follows UAE Ministry of Education guidelines
```

#### C. Learning Outcomes
```
What Your Child Will Achieve:
✓ Master problem-solving skills
✓ Build strong mathematical foundation
✓ Excel in school exams and assessments
✓ Develop critical thinking abilities
✓ Gain confidence in mathematical concepts
✓ Apply math to real-world situations
```

#### Expandable Section Format:
```
[Click to expand: See Grade-by-Grade Breakdown]

Grade 5: Fractions, Decimals, Basic Geometry, Introduction to Algebra
Grade 6: Ratios, Percentages, Negative Numbers, Basic Statistics
Grade 7: Algebraic Expressions, Linear Equations, Probability
Grade 8: Advanced Algebra, Pythagorean Theorem, Data Analysis
Grade 9: Quadratic Equations, Trigonometry, Advanced Geometry
Grade 10: Functions, Advanced Statistics, Coordinate Geometry
```

---

## 3. COUNTRY-SPECIFIC INFORMATION

### Implementation Strategy:

#### Hero Section Badge:
```
🌍 Aligned with International Curricula
US • UK • Canada • Australia • Singapore • UAE
```

#### Detailed Curriculum Alignment Section:
```
📚 Country-Specific Curriculum Alignment

🇺🇸 United States
• Aligned with Common Core State Standards (CCSS)
• Covers all major mathematical domains
• Prepares students for state assessments

🇬🇧 United Kingdom
• Follows UK National Curriculum guidelines
• Meets Key Stage 2 & 3 requirements
• Supports GCSE preparation

🇨🇦 Canada
• Aligned with provincial curriculum standards
• Covers Ontario, BC, Alberta requirements
• Supports standardized testing preparation

🇦🇺 Australia
• Meets Australian Curriculum requirements
• Covers all content strands
• Supports NAPLAN preparation

🇸🇬 Singapore
• Based on Singapore Math methodology
• Follows Ministry of Education syllabus
• Emphasizes problem-solving approach

🇦🇪 UAE (Dubai)
• Aligned with UAE Ministry of Education standards
• Supports both CBSE and British curricula
• Prepares for local assessments
```

---

## 4. CODING CURRICULUM (Updated from PDFs)

### New Structure Based on PDFs:

#### Level 1: Game Development with Scratch (Grades 5-7)
```
🎮 Game Development with Scratch
• Visual programming fundamentals
• Game design principles
• Animation and storytelling
• Logical thinking and sequencing
• Creative problem-solving

Projects: Interactive stories, arcade games, animations
Duration: 24-30 lessons
```

#### Level 2: Foundational Python (Grades 6-8)
```
🐍 Foundational Python Programming
• Python syntax and basics
• Variables, data types, and operators
• Control structures (if/else, loops)
• Functions and modules
• Basic data structures (lists, dictionaries)
• File handling basics

Projects: Text-based games, calculators, data processors
Duration: 30-36 lessons
```

#### Level 3: Advanced Python (Grades 8-10)
```
🚀 Advanced Python Programming
• Object-oriented programming (OOP)
• Advanced data structures
• Algorithm design and optimization
• Working with APIs
• Web development basics (Flask/Django intro)
• Data visualization with libraries

Projects: Web applications, data analysis tools, automation scripts
Duration: 36-40 lessons
```

#### Expandable Section:
```
[Click to expand: See Detailed Lesson Breakdown]

📥 Download Complete Coding Curriculum (PDF)
[Button: Download Curriculum Guide]
```

---

## 5. EXPANDABLE SECTIONS IMPLEMENTATION

### A. Math Curriculum Details ✓
- Grade-by-grade breakdown
- Topic details per grade
- Learning objectives

### B. Coding Curriculum Details ✓
- Lesson-by-lesson breakdown
- Project descriptions
- Skills progression

### C. FAQ ✓
- Already implemented
- Keep current expandable format

### D. Testimonials ✗
- Keep as carousel (NOT expandable)
- Maintain current format

---

## 6. PDF DOWNLOAD IMPLEMENTATION

### Coding Curriculum Only:

```html
<section className="curriculum-download">
  <div className="download-card">
    <h3>📥 Download Our Coding Curriculum</h3>
    <p>Get the complete breakdown of our coding program</p>
    <button className="download-btn">
      Download Coding Curriculum (PDF)
    </button>
  </div>
</section>
```

**Note:** Math curriculum details will be available on the website only (no PDF download)

---

## 7. PAGE STRUCTURE

### Single Page Layout with Sections:

```
1. Hero Section
   - Brand: EduVerseJr
   - Tagline targeting parents
   - Country flags/badges

2. About Section
   - What is EduVerseJr
   - Why choose us

3. Math Curriculum Section
   - Common topics overview
   - Learning outcomes
   - [Expandable: Grade breakdown]
   - Country alignment badges

4. Coding Curriculum Section
   - Three levels overview
   - [Expandable: Detailed lessons]
   - Download PDF button

5. Country-Specific Alignment
   - Detailed curriculum mapping
   - Country-by-country breakdown

6. How It Works
   - Student journey
   - Learning methodology

7. Testimonials (Carousel)
   - Parent reviews
   - Student success stories

8. FAQ (Expandable)
   - Common questions
   - Pricing, scheduling, etc.

9. Pricing/CTA
   - Free trial
   - Contact information

10. Footer
    - EduVerseJr branding
    - Links, contact, social
```

---

## 8. CONTENT TONE & STYLE

### For Parents:
- Clear, concise, benefit-focused
- Emphasize outcomes and results
- Highlight curriculum alignment
- Use trust signals (country standards)
- Professional yet approachable

### Key Messages:
- "Aligned with your country's curriculum"
- "Proven learning outcomes"
- "Trusted by parents in 6 countries"
- "From basics to advanced mastery"

---

## 9. NEXT STEPS

1. ✅ Content strategy approved
2. Update brand name across all files
3. Implement Math curriculum (hybrid approach)
4. Update Coding curriculum from PDFs
5. Add country-specific sections
6. Implement expandable UI components
7. Add Coding PDF download functionality
8. Review and test all changes

---

## 10. TECHNICAL IMPLEMENTATION NOTES

### Components to Create/Update:
- `CurriculumSection.jsx` (expandable functionality)
- `CountryAlignment.jsx` (country-specific content)
- `DownloadButton.jsx` (PDF download)
- Update all brand references
- Add expand/collapse animations

### Files to Prepare:
- Coding curriculum PDF (detailed)
- Country flag icons/badges
- Curriculum alignment graphics

---

**Status:** Ready for implementation
**Review Date:** 2025-12-22
**Next Action:** Begin brand update and curriculum content creation
