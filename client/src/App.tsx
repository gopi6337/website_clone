import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
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
import CurriculumViewer from "./pages/CurriculumViewer";
import ScienceCurriculumViewer from "./pages/ScienceCurriculumViewer";
import Login from "./pages/Login";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  // Use Vite's BASE_URL so routing works whether served at / or /website/
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/reva"} component={RevaPage} />
        <Route path={"/psat"} component={PsatPage} />
        <Route path={"/sat"} component={SatPage} />
        <Route path={"/national-merit-calculator"} component={NationalMeritCalculatorPage} />
        <Route path={"/courses"} component={CoursesPage} />
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
