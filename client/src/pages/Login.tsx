import { useEffect } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const APP_LOGIN_URL = "https://revaai.eduversejr.com/login";

export default function Login() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.replace(APP_LOGIN_URL);
    }, 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Sign in — EduVerseJr</title>
        <meta
          httpEquiv="refresh"
          content={`1.5;url=${APP_LOGIN_URL}`}
        />
      </Helmet>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <div className="inline-flex items-center gap-3 cursor-pointer">
              <img src="/logo.jpg" alt="EduVerseJr Logo" className="h-16 w-16 object-contain" />
              <div className="text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  EduVerseJr
                </div>
                <div className="text-xs text-gray-500 italic">Explore Your Learning Universe</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in to Reva AI</h1>
          <p className="text-gray-600 text-sm mb-6">
            The Reva AI learning app lives at{" "}
            <span className="font-medium text-gray-800">revaai.eduversejr.com</span>. We're sending
            you there now…
          </p>

          <a href={APP_LOGIN_URL}>
            <Button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2"
            >
              Continue to Reva AI sign-in
              <ExternalLink size={16} />
            </Button>
          </a>

          <p className="text-center text-xs text-gray-500 mt-6">
            Don't have an account yet?{" "}
            <a href="/#booking" className="text-blue-600 hover:underline font-medium">
              Book a FREE trial class
            </a>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link href="/">
            <a className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
