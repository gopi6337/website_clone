#!/usr/bin/env python3
"""
Generate PDFs from markdown curriculum guides
"""
import markdown
from weasyprint import HTML, CSS
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

# CSS styling for the PDF
css_content = """
@page {
    size: A4;
    margin: 1.5cm;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 100%;
}

h1 {
    color: #1e40af;
    font-size: 24pt;
    margin-top: 0;
    margin-bottom: 10pt;
    text-align: center;
}

h2 {
    color: #2563eb;
    font-size: 18pt;
    margin-top: 15pt;
    margin-bottom: 8pt;
    text-align: center;
}

h3 {
    color: #1e40af;
    font-size: 10pt;
    margin-top: 12pt;
    margin-bottom: 6pt;
    text-align: center;
}

h2 + p {
    text-align: center;
    color: #666;
    margin-bottom: 15pt;
}

hr {
    border: none;
    border-top: 2px solid #e5e7eb;
    margin: 15pt 0;
}

p {
    margin: 0 0 10pt 0;
    font-size: 10pt;
}

strong {
    color: #1e40af;
}

ul, ol {
    margin: 10pt 0;
    padding-left: 20pt;
}

li {
    margin-bottom: 5pt;
    font-size: 10pt;
}

/* Grid layout simulation for sections */
.section-grid {
    margin: 15pt 0;
}

/* Special styling for "Why It Matters" */
p strong {
    color: #2563eb;
}

/* Footer styling */
em {
    font-size: 9pt;
    color: #666;
    font-style: italic;
}
"""

def convert_markdown_to_pdf(md_file_path, pdf_file_path):
    """Convert a markdown file to PDF"""
    try:
        # Read the markdown file
        with open(md_file_path, 'r', encoding='utf-8') as f:
            md_content = f.read()

        # Convert markdown to HTML
        html_content = markdown.markdown(md_content, extensions=['extra', 'nl2br'])

        # Wrap in proper HTML structure
        full_html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>{md_file_path.stem}</title>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        """

        # Convert HTML to PDF
        HTML(string=full_html).write_pdf(
            pdf_file_path,
            stylesheets=[CSS(string=css_content)]
        )

        print(f"✓ Generated: {pdf_file_path.name}")
        return True

    except Exception as e:
        print(f"✗ Error generating {pdf_file_path.name}: {str(e)}")
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
            print(f"✗ Markdown file not found: {md_file}")

    print("-" * 50)
    print(f"Complete! Generated {success_count}/{len(markdown_files)} PDFs")

if __name__ == "__main__":
    main()
