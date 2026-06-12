import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, CheckCircle, Loader2, AlertCircle, Sparkles } from "lucide-react";

const waitlistSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  parentEmail: z.string().email("Please enter a valid email address"),
  childGrade: z.string().min(1, "Please select a grade"),
  country: z.string().optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

// 2026-06-11 (Fable 5 H5): repointed from legacy agenticaifirst.in to the
// real app host. CORS for eduversejr.com is already configured on this
// backend's ALLOWED_ORIGINS; preflight returns 200 with correct headers.
const API_BASE = "https://revaai.eduversejr.com/api/v1";

const GRADES = [
  "Grade 5", "Grade 6", "Grade 7", "Grade 8",
  "Grade 9", "Grade 10", "Grade 11", "Grade 12",
];

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Canada",
  "Australia", "Singapore", "UAE", "Other",
];

export type WaitlistInterest = "reva" | "hybrid" | "sat" | "sat-only";

const INTEREST_LABELS: Record<WaitlistInterest, string> = {
  "reva": "Reva AI",
  "hybrid": "Hybrid (Reva AI + Human Teacher)",
  "sat": "Reva AI + SAT Prep",
  "sat-only": "SAT Prep Only",
};

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  interest?: WaitlistInterest;
}

export default function WaitlistModal({ open, onClose, interest }: WaitlistModalProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: "onSubmit",
    defaultValues: {
      parentName: "",
      parentEmail: "",
      childGrade: "",
      country: "",
    },
  });

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
        reset();
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent_name: data.parentName,
          parent_email: data.parentEmail,
          child_grade: data.childGrade,
          country: data.country || null,
          source: interest ? `reva_landing_${interest}` : "reva_landing",
          interested_in: interest || null,
        }),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody.detail || `Request failed (${response.status})`);
      }

      setSubmitStatus("success");
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#13131c] border border-white/10 rounded-3xl shadow-2xl shadow-purple-900/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {submitStatus === "success" ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Thanks for joining the Reva AI waitlist. We'll email you the moment access opens for your
              child's grade. Watch your inbox for a confirmation from{" "}
              <span className="text-cyan-300">noreply@eduversejr.com</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold px-8 py-3 rounded-full transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="p-8" noValidate>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs font-semibold uppercase tracking-widest">Private Beta</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Join the Reva AI waitlist</h3>
            <p className="text-white/50 text-sm mb-4">
              We'll email you when access opens for your child's grade. No spam, no obligation.
            </p>
            {interest && (
              <div className="mb-6 inline-flex items-center gap-2 bg-purple-600/15 border border-purple-500/30 rounded-full px-3 py-1.5">
                <span className="text-purple-300 text-[10px] font-semibold uppercase tracking-wider">Interested in</span>
                <span className="text-white/90 text-xs font-medium">{INTEREST_LABELS[interest]}</span>
              </div>
            )}

            {/* Parent name */}
            <div className="mb-4">
              <label htmlFor="wl-name" className="block text-white/70 text-xs font-medium mb-1.5">
                Your name
              </label>
              <input
                id="wl-name"
                type="text"
                {...register("parentName")}
                className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white text-sm rounded-xl px-4 py-3 placeholder-white/30 transition-all"
                placeholder="Parent or guardian name"
              />
              {errors.parentName && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.parentName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="wl-email" className="block text-white/70 text-xs font-medium mb-1.5">
                Email address
              </label>
              <input
                id="wl-email"
                type="email"
                {...register("parentEmail")}
                className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white text-sm rounded-xl px-4 py-3 placeholder-white/30 transition-all"
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.parentEmail && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.parentEmail.message}
                </p>
              )}
            </div>

            {/* Grade */}
            <div className="mb-4">
              <label htmlFor="wl-grade" className="block text-white/70 text-xs font-medium mb-1.5">
                Child's grade
              </label>
              <Controller
                name="childGrade"
                control={control}
                render={({ field }) => (
                  <select
                    id="wl-grade"
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white text-sm rounded-xl px-4 py-3 transition-all appearance-none"
                  >
                    <option value="" disabled style={{ background: "#13131c" }}>Select grade…</option>
                    {GRADES.map((g) => (
                      <option key={g} value={g} style={{ background: "#13131c" }}>{g}</option>
                    ))}
                  </select>
                )}
              />
              {errors.childGrade && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.childGrade.message}
                </p>
              )}
            </div>

            {/* Country (optional) */}
            <div className="mb-6">
              <label htmlFor="wl-country" className="block text-white/70 text-xs font-medium mb-1.5">
                Country <span className="text-white/30">(optional)</span>
              </label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <select
                    id="wl-country"
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white text-sm rounded-xl px-4 py-3 transition-all appearance-none"
                  >
                    <option value="" style={{ background: "#13131c" }}>Prefer not to say</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c} style={{ background: "#13131c" }}>{c}</option>
                    ))}
                  </select>
                )}
              />
            </div>

            {/* Error banner */}
            {submitStatus === "error" && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-xs">{errorMessage}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-purple-900/30"
            >
              {submitStatus === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>Join the Waitlist</>
              )}
            </button>

            <p className="text-white/30 text-xs text-center mt-4">
              By submitting, you agree to receive a single confirmation email and notification when Reva opens.
              No spam.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
