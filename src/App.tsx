
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/LegalPages/Terms";
import Legal from "./pages/LegalPages/Legal";
import Privacy from "./pages/LegalPages/Privacy";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <Toaster />
    </Router>
  );
}

export default App;
