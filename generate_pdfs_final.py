#!/usr/bin/env python3
"""
Generate PDFs from markdown curriculum guides using fpdf2 with ASCII-only text
"""
from fpdf import FPDF
from pathlib import Path

# Define the markdown files to convert
markdown_files = [
    "Canadian Math Curriculum Grades 5-10 Parent Guide.md",
    "Singapore Math Curriculum Grades 5-10 Parent Guide.md",
    "UAE Math Curriculum Grades 5-10 Parent Guide.md",
    "Australian Math Curriculum Grades 5-10 Parent Guide.md",
    "UK Math Curriculum Grades 5-10 Parent Guide.md",
]

# Base directory for math content
content_dir = Path("content/maths")

class CurriculumPDF(FPDF):
    def footer(self):
        self.set_y(-15)
        self.set_font('helvetica', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()}', align='C')

def sanitize_text(text):
    """Replace Unicode characters with ASCII equivalents"""
    replacements = {
        '✓': '+',
        '–': '-',
        '—': '-',
        ''': "'",
        ''': "'",
        '"': '"',
        '"': '"',
        '…': '...',
        '×': 'x',
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def parse_markdown_to_pdf(md_content, pdf):
    """Parse markdown content and add to PDF"""
    md_content = sanitize_text(md_content)
    lines = md_content.split('\n')

    for line in lines:
        line = line.strip()

        if not line:
            pdf.ln(3)
            continue

        # H1 - Main title
        if line.startswith('# '):
            pdf.set_font('helvetica', 'B', 16)
            pdf.set_text_color(30, 64, 175)
            text = line[2:]
            pdf.cell(0, 8, text, ln=1, align='C')
            pdf.ln(2)

        # H2 - Section headers
        elif line.startswith('## '):
            pdf.set_font('helvetica', 'B', 13)
            pdf.set_text_color(37, 99, 235)
            text = line[3:]
            pdf.cell(0, 7, text, ln=1, align='C')
            pdf.ln(1)

        # H3 - Subsection headers
        elif line.startswith('### '):
            pdf.set_font('helvetica', 'B', 11)
            pdf.set_text_color(30, 64, 175)
            text = line[4:]
            pdf.cell(0, 6, text, ln=1, align='L')
            pdf.ln(1)

        # Horizontal rule
        elif line.startswith('---'):
            pdf.set_draw_color(229, 231, 235)
            pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
            pdf.ln(3)

        # Bullet points
        elif line.startswith('- ') or line.startswith('* '):
            pdf.set_font('helvetica', '', 9)
            pdf.set_text_color(51, 51, 51)
            text = line[2:].replace('**', '')
            pdf.set_x(pdf.l_margin + 5)
            pdf.multi_cell(0, 4, f'- {text}', align='L')

        # Checkmark/plus lines
        elif line.startswith('+ '):
            pdf.set_font('helvetica', '', 9)
            pdf.set_text_color(51, 51, 51)
            text = line[2:].replace('**', '')
            pdf.set_x(pdf.l_margin + 5)
            pdf.multi_cell(0, 4, f'+ {text}', align='L')

        # Regular paragraphs
        else:
            pdf.set_font('helvetica', '', 9)
            pdf.set_text_color(51, 51, 51)
            text = line.replace('**', '')
            if text:
                pdf.multi_cell(0, 4, text, align='L')
                pdf.ln(1)

def convert_markdown_to_pdf(md_file_path, pdf_file_path):
    """Convert a markdown file to PDF"""
    try:
        with open(md_file_path, 'r', encoding='utf-8') as f:
            md_content = f.read()

        pdf = CurriculumPDF()
        pdf.add_page()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.set_margins(15, 15, 15)

        parse_markdown_to_pdf(md_content, pdf)

        pdf.output(str(pdf_file_path))

        print(f"[OK] Generated: {pdf_file_path.name}")
        return True

    except Exception as e:
        print(f"[ERROR] Error generating {pdf_file_path.name}: {str(e)}")
        import traceback
        traceback.print_exc()
        return False

def main():
    """Main function to generate all PDFs"""
    print("Generating curriculum guide PDFs...")
    print("-" * 50)

    success_count = 0
    for md_file in markdown_files:
        md_path = content_dir / md_file
        pdf_path = content_dir / md_file.replace('.md', '.pdf')

        if md_path.exists():
            if convert_markdown_to_pdf(md_path, pdf_path):
                success_count += 1
        else:
            print(f"[ERROR] Markdown file not found: {md_file}")

    print("-" * 50)
    print(f"Complete! Generated {success_count}/{len(markdown_files)} PDFs")

if __name__ == "__main__":
    main()
