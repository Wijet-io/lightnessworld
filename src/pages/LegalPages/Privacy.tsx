
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
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
            <h1 className="text-4xl font-bold text-center mb-12 gradient-text">Politique de Confidentialité</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous collectons les informations que vous nous fournissez directement lorsque vous créez un compte, 
                utilisez nos services ou communiquez avec nous. Ces informations peuvent inclure votre nom, 
                adresse email, et autres données nécessaires à l'utilisation de nos services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Fournir et maintenir nos services</li>
                <li>Vous informer des changements dans nos services</li>
                <li>Vous permettre de participer aux fonctionnalités interactives</li>
                <li>Fournir un support client</li>
                <li>Détecter et prévenir les activités frauduleuses</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Protection des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                La sécurité de vos données est importante pour nous. Nous mettons en œuvre des mesures 
                de sécurité appropriées pour protéger vos informations personnelles contre tout accès, 
                modification, divulgation ou destruction non autorisé.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Partage des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos 
                informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Avec votre consentement</li>
                <li>Pour des obligations légales</li>
                <li>Pour protéger nos droits et ceux des autres</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer 
                vos droits, vous pouvez nous contacter à : privacy@lightness.fr
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
