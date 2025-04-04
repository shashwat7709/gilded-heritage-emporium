import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCollection from "./components/FeaturedCollection";
import StorySection from "./components/StorySection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="relative">
              <HeroSection />
              <div className="relative z-10">
                <FeaturedCollection />
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
                  <StorySection />
                </div>
                <GallerySection />
                <div className="relative overflow-hidden bg-primary/5">
                  <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
                  <TestimonialsSection />
                </div>
                <ContactSection />
                <Newsletter />
              </div>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
