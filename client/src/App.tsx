import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RevaPage from "./pages/RevaPage";
import PsatPage from "./pages/PsatPage";
import SatPage from "./pages/SatPage";
import NationalMeritCalculatorPage from "./pages/NationalMeritCalculatorPage";
import CoursesPage from "./pages/CoursesPage";
import TeachersPage from "./pages/TeachersPage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourceArticlePage from "./pages/ResourceArticlePage";
import GradeMathsPage from "./pages/GradeMathsPage";
import CodingCoursePage from "./pages/CodingCoursePage";
import CurriculumViewer from "./pages/CurriculumViewer";
import ScienceCurriculumViewer from "./pages/ScienceCurriculumViewer";
import Login from "./pages/Login";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import WhatsAppButton from "./components/WhatsAppButton";

// 2026-07-14 (visitor bug report): wouter keeps the scroll position across
// client-side route changes, and several pages (Home, About, Teachers, Courses)
// didn't reset it. So navigating from a scrolled page landed the visitor deep
// in the next page — "the page doesn't appear, it goes to some other area."
// This resets scroll to the top on every PATH change (hash-only changes, e.g.
// /#pricing section jumps, don't change wouter's location, so in-page anchors
// still work). Replaces the fragile, inconsistent per-page scrollTo effects.
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  // Use Vite's BASE_URL so routing works whether served at / or /website/
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/reva"} component={RevaPage} />
        <Route path={"/psat"} component={PsatPage} />
        <Route path={"/sat"} component={SatPage} />
        <Route path={"/national-merit-calculator"} component={NationalMeritCalculatorPage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/courses/:slug"} component={GradeMathsPage} />
        <Route path={"/coding/:slug"} component={CodingCoursePage} />
        <Route path={"/teachers"} component={TeachersPage} />
        <Route path={"/resources"} component={ResourcesPage} />
        <Route path={"/resources/:slug"} component={ResourceArticlePage} />
        {/* /tutors now redirects → /teachers server-side via vercel.json */}
        <Route path={"/curriculum/:country"} component={CurriculumViewer} />
        <Route path={"/science-curriculum/:country"} component={ScienceCurriculumViewer} />
        <Route path={"/login"} component={Login} />
        <Route path={"/disclaimer"} component={DisclaimerPage} />
        <Route path={"/terms-of-use"} component={TermsOfUsePage} />
        <Route path={"/privacy-policy"} component={PrivacyPolicyPage} />
        <Route path={"/refund-policy"} component={RefundPolicyPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
