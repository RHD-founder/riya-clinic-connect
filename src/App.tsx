import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DrChayanikaPatwariPage from "./pages/dr-chayanika-patwari-skin-hair-nail-specialist";
import GeetmoniDekaPathakPage from "./pages/geetmoni-deka-pathak-ear-nose-throat-ent-specialist";
import RituPallabKalitaPage from "./pages/ritu-pallab-kalita";
import RupjyotiGogoiPage from "./pages/rupjyotigogoi";
import Chatbot from "./components/Chatbot/Chatbot";
import FloatingSocialIcons from "./components/FloatingSocialIcons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dr-chayanika-patwari-skin-hair-nail-specialist" element={<DrChayanikaPatwariPage />} />
          <Route path="/geetmoni-deka-pathak-ear-nose-throat-ent-specialist" element={<GeetmoniDekaPathakPage />} />
          <Route path="/ritu-pallab-kalita" element={<RituPallabKalitaPage />} />
          <Route path="/rupjyotigogoi" element={<RupjyotiGogoiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
        <FloatingSocialIcons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;