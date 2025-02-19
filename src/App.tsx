import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/LegalPages/Terms";
import Legal from "./pages/LegalPages/Legal";
import PrivacyPolicy from "./pages/LegalPages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <Toaster />
    </Router>
  );
}

export default App;
