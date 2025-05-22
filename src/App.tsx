import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
console.log("Vite Environment Variables (from App.tsx):", import.meta.env);
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import SuccessStories from "./pages/SuccessStories";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Builders from "./pages/Builders";
import BecomeABuilder from "./pages/BecomeABuilder";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col dark">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/community" element={<Community />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/builders" element={<Builders />} />
              <Route path="/become-a-builder" element={<BecomeABuilder />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer telegramLink="https://t.me/fbi_gm" />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
