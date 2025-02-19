import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactType } from "@/components/contact/types";

export default function ContactPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Formulaire soumis !");
  };

  return (
    <div className="min-h-screen flex flex-col bg-accent">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="bg-background mt-16 rounded-2xl p-8 md:p-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>

          <div className="prose prose-sm md:prose-base lg:prose-lg mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Contactez-nous</h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vous avez des questions, des suggestions ou vous souhaitez simplement nous contacter ? N'hésitez pas à utiliser le formulaire ci-dessous.
            </p>
            <ContactForm contactType={null} onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}