import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Votre confidentialité est primordiale pour nous. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre application, qui inclut les fonctionnalités de testament en ligne, timer de vie, moteur de recherche pour les services funéraires, signalement de décès, et collecte de dons.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
              Nous collectons différentes informations pour assurer le bon fonctionnement de l’application, telles que :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Informations financières : pour la collecte de dons, certaines données bancaires peuvent être demandées pour traiter les contributions. Ces informations sont protégées et ne seront utilisées que pour le traitement des transactions.</li>
                <li>Informations Personnelles : lors de la création d’un testament, nous collectons des informations personnelles pour désigner un destinataire en cas de décès. Ces informations restent strictement confidentielles et ne seront partagées qu’avec la personne désignée selon vos instructions.</li>
                <li>Données de géolocalisation : pour le moteur de recherche de services funéraires, nous utilisons votre position géographique afin de vous fournir des résultats pertinents. Ces données ne sont pas conservées après l’utilisation.</li>
                <li>Commentaires et évaluations : lors de la publication d’avis, nous collectons et publions votre avis et des informations liées (par exemple, preuve de passage) pour offrir des retours fiables à notre communauté.</li>
                <li>Documents de décès : pour la fonctionnalité de signalement d’un décès, nous demandons un acte de décès afin de vérifier l’information et transmettre le testament et les dettes aux destinataires choisis. Cette information est traitée avec la plus haute confidentialité.</li>
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
                vos droits, vous pouvez nous contacter à : contact@lightness.world
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
