import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import History from "@/pages/history";
import Program from "@/pages/program";
import Testimonials from "@/pages/testimonials";
import Gallery from "@/pages/gallery";
import Tributes from "@/pages/tributes";
import Travel from "@/pages/travel";
import Partners from "@/pages/partners";
import Contact from "@/pages/contact";
import Donate from "@/pages/donate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/histoire" component={History} />
      <Route path="/programme" component={Program} />
      <Route path="/temoignages" component={Testimonials} />
      <Route path="/hommages" component={Tributes} />
      <Route path="/trajet" component={Travel} />
      <Route path="/partenaires" component={Partners} />
      <Route path="/contact" component={Contact} />
      <Route path="/don" component={Donate} />
      <Route path="/galerie" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;