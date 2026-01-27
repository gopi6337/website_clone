
export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Math Programs */}
          <div>
            <h4 className="font-bold mb-4">Math Programs</h4>
            <p className="text-gray-300">Math education aligned with international standards</p>
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
          <p className="mb-4">© 2026 EduVerseJr. All rights reserved.</p>
          <p className="mb-4">
            By using this site you agree to our Terms Of Use & Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
