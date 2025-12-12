import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Reader from "./pages/Reader";
import Admin from "./pages/Admin";
import AdminUpload from "./pages/AdminUpload";
import Dashboard from "./pages/Dashboard";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/library"} component={Library} />
      <Route path={"/reader/:id"} component={Reader} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/admin"} component={Admin} />
      <Route path={"/admin/upload"} component={AdminUpload} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
