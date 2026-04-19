import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

type Role = "tutor" | "parent" | null;

const roleConfig = {
  tutor: {
    emoji: "👩‍🏫",
    label: "Teacher",
    welcome: "Welcome, Teacher!",
    subtitle: "Sign in to manage your classes and students.",
    borderActive: "border-blue-500 bg-blue-50",
    borderInactive: "border-blue-100 hover:border-blue-400 hover:bg-blue-50",
  },
  parent: {
    emoji: "👨‍👩‍👧",
    label: "Parent",
    welcome: "Welcome, Parent!",
    subtitle: "Sign in to track your child's progress and learning journey.",
    borderActive: "border-cyan-500 bg-cyan-50",
    borderInactive: "border-cyan-100 hover:border-cyan-400 hover:bg-cyan-50",
  },
};

export default function Login() {
  const [role, setRole] = useState<Role>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-4">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="w-full max-w-md">

        {/* Logo */}
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

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* Role selector — always visible on top */}
          <p className="text-sm font-medium text-gray-500 text-center mb-4">Select your role to continue</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {(["tutor", "parent"] as Role[]).map((r) => {
              const cfg = roleConfig[r!];
              const isActive = role === r;
              return (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex flex-col items-center gap-2 border-2 rounded-xl p-4 transition-all ${
                    isActive ? cfg.borderActive : cfg.borderInactive
                  }`}
                >
                  <span className="text-3xl">{cfg.emoji}</span>
                  <span className={`text-sm font-semibold ${isActive ? "text-blue-700" : "text-gray-700"}`}>
                    {cfg.label} Login
                  </span>
                  {isActive && (
                    <span className="text-xs text-blue-500 font-medium">Selected ✓</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Login form — visible only after role selected */}
          {role && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">SIGN IN</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Welcome */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {roleConfig[role].welcome}
                </h1>
                <p className="text-gray-500 text-sm">{roleConfig[role].subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="text-right mt-1">
                    <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm"
                >
                  Sign In as {roleConfig[role].label}
                </Button>
              </form>

              {/* Footer */}
              <p className="text-center text-xs text-gray-500 mt-6">
                Don't have an account?{" "}
                <a href="/#booking" className="text-blue-600 hover:underline font-medium">
                  Book a FREE Trial
                </a>
              </p>
            </>
          )}
        </div>

        {/* Back link */}
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
