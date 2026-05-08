
export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Math Programs */}
          <div>
            <h4 className="font-bold mb-4">Math Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/curriculum/united-states" className="hover:text-white transition-colors">US Math Curriculum</a></li>
              <li><a href="/curriculum/united-kingdom" className="hover:text-white transition-colors">UK Math Curriculum</a></li>
              <li><a href="/curriculum/australia" className="hover:text-white transition-colors">Australian Math Curriculum</a></li>
              <li><a href="/curriculum/singapore" className="hover:text-white transition-colors">Singapore Math Curriculum</a></li>
              <li><a href="/curriculum/canada" className="hover:text-white transition-colors">Canadian Math Curriculum</a></li>
              <li><a href="/curriculum/uae-(dubai)" className="hover:text-white transition-colors">UAE Math Curriculum</a></li>
            </ul>
          </div>

          {/* Science Programs */}
          <div>
            <h4 className="font-bold mb-4">Science Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/science-curriculum/united-states" className="hover:text-white transition-colors">US Science Curriculum</a></li>
              <li><a href="/science-curriculum/united-kingdom" className="hover:text-white transition-colors">UK Science Curriculum</a></li>
              <li><a href="/science-curriculum/australia" className="hover:text-white transition-colors">Australian Science Curriculum</a></li>
              <li><a href="/science-curriculum/singapore" className="hover:text-white transition-colors">Singapore Science Curriculum</a></li>
              <li><a href="/science-curriculum/canada" className="hover:text-white transition-colors">Canadian Science Curriculum</a></li>
              <li><a href="/science-curriculum/uae-(dubai)" className="hover:text-white transition-colors">UAE Science Curriculum</a></li>
            </ul>
          </div>

          {/* Coding Programs */}
          <div>
            <h4 className="font-bold mb-4">Coding Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Block Based Coding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Development, Game Development, Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HTML, CSS, JS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python, AI and Machine Learning</a></li>
            </ul>
          </div>

          {/* Countries We Serve */}
          <div>
            <h4 className="font-bold mb-4">Countries We Serve</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Singapore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UAE</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Online Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About EduVerseJr</a></li>
              <li><a href="#" className="hover:text-white transition-colors">In the News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="mb-3">© 2026 EduVerseJr. All rights reserved.</p>
          <p className="mb-3 text-sm">
            All content is original material created by Reva AI and reviewed by human educators.
            Not copied from any textbook or publisher. For personal educational use only.
          </p>
          <p className="text-sm">
            By using this site you agree to our{" "}
            <a href="/terms-of-use" className="hover:text-white transition-colors underline">Terms of Use</a>
            {" "}&amp;{" "}
            <a href="/privacy-policy" className="hover:text-white transition-colors underline">Privacy Policy</a>
            {" "}·{" "}
            <a href="/disclaimer" className="hover:text-white transition-colors underline">Content &amp; Copyright Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
