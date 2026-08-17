import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { AlbumPage, CodexPage } from "./pages/Library";
import ComparePage from "./pages/Compare";
import NotFound from "./pages/NotFound";
import Play from "./pages/Play";
import SettingsPage from "./pages/Settings";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/play" component={Play} />
    <Route path="/codex" component={CodexPage} />
    <Route path="/album" component={AlbumPage} />
    <Route path="/compare" component={ComparePage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/admin" component={Admin} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><LocaleProvider><TooltipProvider><Toaster /><Router /></TooltipProvider></LocaleProvider></ThemeProvider></ErrorBoundary>;
}
