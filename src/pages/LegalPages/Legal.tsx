
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
            <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Mentions Légales</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site LightNess est édité par :<br />
                Association LightNess<br />
                123 rue de la Lumière<br />
                75001 Paris, France<br />
                Email : contact@lightness.fr<br />
                SIRET : XX XXX XXX XXX XXX
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Responsable de publication</h2>
              <p className="text-muted-foreground leading-relaxed">
                Directeur de la publication : [Nom du directeur]<br />
                Email : direction@lightness.fr
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Hébergeur</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                Téléphone : [Numéro de téléphone]
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
                Toute reproduction, même partielle, est soumise à l'autorisation préalable de LightNess.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Protection des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, 
                de rectification et de suppression des données vous concernant. Pour exercer ce droit, 
                veuillez nous contacter à l'adresse : privacy@lightness.fr
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour plus d'informations sur la gestion de vos données personnelles, 
                veuillez consulter notre <a href="/privacy" className="text-primary hover:underline">Politique de Confidentialité</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
