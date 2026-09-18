import { useEffect, useState } from "react";
import { X, GraduationCap, CheckCircle2 } from "lucide-react";

/**
 * AdmissionPopup — a single homepage modal announcing the US & UAE admissions
 * drive for the human-teacher trial. Auto-opens ~1.5s after the homepage loads,
 * once per visitor (persisted in localStorage), and is dismissible via ✕,
 * click-outside, or Esc. CTA scrolls to the booking form (#booking).
 *
 * Mounted app-wide from App.tsx so it shows on every route (any inbound or
 * shared link, not just the homepage). Light theme to match the site. To
 * disable entirely, set POPUP_ON = false (kill-switch).
 */
const POPUP_ON = true;
const SEEN_KEY = "eduversejr_admission_popup_seen_v1"; // stores last-dismissed timestamp (ms)
const OPEN_DELAY_MS = 1500;
// Admissions drive runs ~3 months — popup auto-stops showing after this date.
const CAMPAIGN_END = new Date("2026-12-10T23:59:59");
// A visitor who dismisses is reminded again after this many days (keeps the
// drive active across the 3-month window without nagging on every visit).
const REMIND_AFTER_DAYS = 7;

export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);

  // Auto-open once per visitor, after a short delay.
  useEffect(() => {
    if (!POPUP_ON) return;
    if (Date.now() > CAMPAIGN_END.getTime()) return; // drive over — stop showing
    let last = 0;
    try {
      last = parseInt(localStorage.getItem(SEEN_KEY) || "0", 10) || 0;
    } catch {
      // localStorage blocked (private mode) — just show once this session.
    }
    const remindMs = REMIND_AFTER_DAYS * 24 * 60 * 60 * 1000;
    if (last && Date.now() - last < remindMs) return; // dismissed recently
    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(SEEN_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goToBooking = () => {
    close();
    // Let the modal unmount, then reach the booking form. The popup now mounts
    // app-wide, so it can fire on a page that has no #booking section — in that
    // case send the visitor to the homepage booking form (Home scrolls to the
    // hash target on load), otherwise smooth-scroll in place.
    setTimeout(() => {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        const base = import.meta.env.BASE_URL.replace(/\/$/, "");
        window.location.href = `${base}/#booking`;
      }
    }, 60);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-popup-title"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Header band */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-500 px-7 pt-7 pb-6 text-white">
          <span className="inline-flex items-center gap-2 bg-amber-400 text-blue-900 border border-amber-300 rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-wide shadow-md">
            <GraduationCap className="w-4 h-4" /> Admissions Open · US &amp; UAE
          </span>
          <h3
            id="admission-popup-title"
            className="mt-4 text-2xl font-extrabold leading-tight"
          >
            Expert Online Experienced <span className="text-amber-300">Female Teachers</span>
          </h3>
          <p className="mt-2 text-sm text-white/90">
            Live 1-on-1 Maths, Science &amp; Coding — Grades 5–10, taught to your child's local
            school curriculum.
          </p>
          <p className="mt-3 text-[11px] text-white/70">
            Now open for <span className="font-semibold text-white/90">US &amp; UAE</span> · also
            Australia · Singapore · UK · Canada
          </p>
        </div>

        {/* Body */}
        <div className="px-7 py-6">
          <ul className="space-y-2.5 mb-6">
            {[
              "The same experienced female teacher every session",
              "Post-graduate qualified & background-verified",
              "Free trial class — no payment, no credit card",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-none mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={goToBooking}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3.5 rounded-full transition-all shadow-lg shadow-blue-900/20"
          >
            📅&nbsp; Book a Free Trial
          </button>
          <button
            type="button"
            onClick={close}
            className="w-full mt-2 text-slate-400 hover:text-slate-600 text-sm font-medium py-2 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
