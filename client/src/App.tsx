import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RevaPage from "./pages/RevaPage";
import CoursesPage from "./pages/CoursesPage";
import TutorsPage from "./pages/TutorsPage";
import CurriculumViewer from "./pages/CurriculumViewer";
import ScienceCurriculumViewer from "./pages/ScienceCurriculumViewer";
import Login from "./pages/Login";
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
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/tutors"} component={TutorsPage} />
        <Route path={"/curriculum/:country"} component={CurriculumViewer} />
        <Route path={"/science-curriculum/:country"} component={ScienceCurriculumViewer} />
        <Route path={"/login"} component={Login} />
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
