import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent py-[20px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <img src="/assets/images/logo.svg" alt="LightNess Logo" className="h-36 w-auto mb-2" />
            <p className="text-sm text-white/90 text-center sm:text-left">
              {t('footer.about')}
            </p>
          </div>
          <div className="md:col-span-3 flex justify-around mt-12">
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold mb-3 text-white text-center sm:text-left">{t('features.mainTitle')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    {t('features.testament')}
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    {t('features.services')}
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    {t('features.debts')}
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/80 hover:text-white transition-colors">
                    {t('features.timer')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-sm font-semibold mb-3 text-white text-center sm:text-left">{t('footer.legal.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/legal" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.legal.mentions')}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.legal.privacy')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.legal.terms')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-sm font-semibold mb-3 text-white text-center sm:text-left">{t('footer.support.title')}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.support.faq')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.support.contact')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {t('footer.support.guide')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/30 text-center">
          <p className="text-sm text-white/70">LightNess © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
