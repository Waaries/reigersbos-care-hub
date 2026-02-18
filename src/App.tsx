import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModalProvider } from "@/contexts/ModalContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Huisartspraktijk from "./pages/Huisartspraktijk";
import PohS from "./pages/PohS";
import PohGGZ from "./pages/PohGGZ";
import Praktijkassistente from "./pages/Praktijkassistente";
import Klachten from "./pages/Klachten";
import Omgangsregels from "./pages/Omgangsregels";
import Privacyreglement from "./pages/Privacyreglement";
import Dietetiek from "./pages/Dietetiek";
import Fysiotherapie from "./pages/Fysiotherapie";
import OnsTeam from "./pages/OnsTeam";
import Vacatures from "./pages/Vacatures";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/huisartspraktijk" element={<Huisartspraktijk />} />
              <Route path="/poh-s" element={<PohS />} />
              <Route path="/poh-ggz" element={<PohGGZ />} />
              <Route path="/praktijkassistente" element={<Praktijkassistente />} />
              <Route path="/klachten" element={<Klachten />} />
              <Route path="/omgangsregels" element={<Omgangsregels />} />
              <Route path="/privacyreglement" element={<Privacyreglement />} />
              <Route path="/dietetiek" element={<Dietetiek />} />
              <Route path="/fysiotherapie" element={<Fysiotherapie />} />
              <Route path="/ons-team" element={<OnsTeam />} />
              <Route path="/vacatures" element={<Vacatures />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ModalProvider>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

