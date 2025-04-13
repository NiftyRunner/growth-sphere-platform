import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrowseJobs from './pages/BrowseJobs';
import RemoteJobs from './pages/RemoteJobs';
import FullTimeJobs from './pages/FullTimeJobs';
import PartTimeJobs from './pages/PartTimeJobs';
import CareerGuide from './pages/CareerGuide';
import ResumeBuilder from './pages/ResumeBuilder';
import InterviewTips from './pages/InterviewTips';
import SkillAssessments from './pages/SkillAssessments';
import Employers from './pages/Employers';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/jobs" element={<BrowseJobs />} />
              <Route path="/jobs/remote" element={<RemoteJobs />} />
              <Route path="/jobs/full-time" element={<FullTimeJobs />} />
              <Route path="/jobs/part-time" element={<PartTimeJobs />} />
              <Route path="/resources/career-guide" element={<CareerGuide />} />
              <Route path="/resources/resume-builder" element={<ResumeBuilder />} />
              <Route path="/resources/interview-tips" element={<InterviewTips />} />
              <Route path="/resources/skill-assessments" element={<SkillAssessments />} />
              <Route path="/employer/post-job" element={<Employers />} />
              <Route path="/employer/candidates" element={<Employers />} />
              <Route path="/employer/solutions" element={<Employers />} />
              <Route path="/employer/pricing" element={<Employers />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
