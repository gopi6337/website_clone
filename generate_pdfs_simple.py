#!/usr/bin/env python3
"""
Generate PDFs from markdown curriculum guides using fpdf2
"""
from fpdf import FPDF
from pathlib import Path
import re

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
    def __init__(self):
        super().__init__()
        # Use built-in Unicode fonts from fpdf2
        self.add_font('DejaVu', '', fname=None, uni=True)
        self.add_font('DejaVu', 'B', fname=None, uni=True)

    def header(self):
        # Skip header on pages
        pass

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Set font
        self.set_font('DejaVu', '', 8)
        # Page number
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

def parse_markdown_to_pdf(md_content, pdf):
    """Parse markdown content and add to PDF"""
    lines = md_content.split('\n')

    for line in lines:
        line = line.strip()

        # Skip empty lines
        if not line:
            pdf.ln(3)
            continue

        # H1 - Main title
        if line.startswith('# '):
            pdf.set_font('DejaVu', 'B', 16)
            pdf.set_text_color(30, 64, 175)  # Blue
            text = line[2:]
            pdf.cell(0, 8, text, ln=1, align='C')
            pdf.ln(2)

        # H2 - Section headers
        elif line.startswith('## '):
            pdf.set_font('DejaVu', 'B', 14)
            pdf.set_text_color(37, 99, 235)  # Lighter blue
            text = line[3:]
            pdf.cell(0, 7, text, ln=1, align='C')
            pdf.ln(1)

        # H3 - Subsection headers
        elif line.startswith('### '):
            pdf.set_font('DejaVu', 'B', 11)
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
            pdf.set_font('DejaVu', '', 9)
            pdf.set_text_color(51, 51, 51)
            text = line[2:]
            # Handle bold text
            text = text.replace('**', '')
            # Add bullet with indentation
            pdf.set_x(pdf.l_margin + 5)
            pdf.multi_cell(0, 4, f'- {text}', align='L')

        # Checkmark lines (replaced with +)
        elif line.startswith('+ ') or line.startswith('✓ '):
            pdf.set_font('DejaVu', '', 9)
            pdf.set_text_color(51, 51, 51)
            text = line[2:]
            text = text.replace('**', '')
            pdf.set_x(pdf.l_margin + 5)
            pdf.multi_cell(0, 4, f'+ {text}', align='L')

        # Regular paragraphs
        else:
            pdf.set_font('DejaVu', '', 9)
            pdf.set_text_color(51, 51, 51)
            # Handle bold text - simple approach
            text = line.replace('**', '')
            if text:
                pdf.multi_cell(0, 4, text, align='L')
                pdf.ln(1)

def convert_markdown_to_pdf(md_file_path, pdf_file_path):
    """Convert a markdown file to PDF"""
    try:
        # Read the markdown file
        with open(md_file_path, 'r', encoding='utf-8') as f:
            md_content = f.read()

        # Create PDF
        pdf = CurriculumPDF()
        pdf.add_page()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.set_margins(15, 15, 15)

        # Parse and add content
        parse_markdown_to_pdf(md_content, pdf)

        # Save PDF
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
