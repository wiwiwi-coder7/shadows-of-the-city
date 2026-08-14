import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import Home from "./pages/Home";
import { AlbumPage, CodexPage } from "./pages/Library";
import NotFound from "./pages/NotFound";
import PlayStatic from "./pages/PlayStatic";
import SettingsPage from "./pages/Settings";
import AdminStatic from "./pages/AdminStatic";

function StaticRouter() {
  return <Switch><Route path="/" component={Home} /><Route path="/play" component={PlayStatic} /><Route path="/codex" component={CodexPage} /><Route path="/album" component={AlbumPage} /><Route path="/settings" component={SettingsPage} /><Route path="/admin" component={AdminStatic} /><Route component={NotFound} /></Switch>;
}

export default function GithubPagesApp() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><LocaleProvider><TooltipProvider><Toaster /><Router hook={useHashLocation}><StaticRouter /></Router></TooltipProvider></LocaleProvider></ThemeProvider></ErrorBoundary>;
}
