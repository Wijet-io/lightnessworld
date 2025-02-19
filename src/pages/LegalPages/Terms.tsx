
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
            <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Conditions d'utilisation</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                En utilisant l'application LightNess, vous acceptez d'être lié par les présentes conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation du service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vous vous engagez à utiliser le service conformément à :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Toutes les lois et réglementations applicables</li>
                <li>Les présentes conditions d'utilisation</li>
                <li>Nos directives communautaires</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Compte utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour utiliser certaines fonctionnalités de l'application, vous devrez créer un compte. 
                Vous êtes responsable du maintien de la confidentialité de vos informations de connexion 
                et de toutes les activités qui se produisent sous votre compte.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Contenu utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed">
                En soumettant du contenu sur l'application, vous nous accordez une licence mondiale, 
                non exclusive, gratuite, pour utiliser, modifier, exécuter publiquement, afficher publiquement 
                et distribuer ce contenu sur nos services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Résiliation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de suspendre ou de résilier votre accès à l'application, 
                avec ou sans préavis, pour toute raison, y compris la violation des présentes conditions d'utilisation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Modifications des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
                entrent en vigueur dès leur publication sur l'application. Votre utilisation continue 
                de l'application après la publication des modifications constitue votre acceptation des nouvelles conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
