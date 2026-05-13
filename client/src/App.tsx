import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RevaPage from "./pages/RevaPage";
import CoursesPage from "./pages/CoursesPage";
import TeachersPage from "./pages/TeachersPage";
import CurriculumViewer from "./pages/CurriculumViewer";
import ScienceCurriculumViewer from "./pages/ScienceCurriculumViewer";
import Login from "./pages/Login";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import WhatsAppButton from "./components/WhatsAppButton";

// Permanent client-side redirect for legacy /tutors URLs.
// Keeps old SEO links and bookmarks working without 404s.
function TutorsRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/teachers", { replace: true });
  }, [setLocation]);
  return null;
}

function Router() {
  // Use Vite's BASE_URL so routing works whether served at / or /website/
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/reva"} component={RevaPage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/teachers"} component={TeachersPage} />
        {/* Legacy /tutors → /teachers redirect (SEO + bookmarks) */}
        <Route path={"/tutors"} component={TutorsRedirect} />
        <Route path={"/curriculum/:country"} component={CurriculumViewer} />
        <Route path={"/science-curriculum/:country"} component={ScienceCurriculumViewer} />
        <Route path={"/login"} component={Login} />
        <Route path={"/disclaimer"} component={DisclaimerPage} />
        <Route path={"/terms-of-use"} component={TermsOfUsePage} />
        <Route path={"/privacy-policy"} component={PrivacyPolicyPage} />
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
