import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};
export default function CookieConsent() {
  const {
    t
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });
  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsOpen(true);
    }
  }, []);
  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };
  const handleSavePreferences = () => {
    savePreferences(preferences);
  };
  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    setIsOpen(false);
  };
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
          <div className="container mx-auto">
            {!showDetails ? <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-600">
                    {t('cookies.shortDescription')}
                    <button onClick={() => setShowDetails(true)} className="text-primary underline ml-1">
                      {t('cookies.learnMore')}
                    </button>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" onClick={() => setShowDetails(true)}>
                    {t('cookies.customize')}
                  </Button>
                  <Button onClick={handleAcceptAll}>
                    {t('cookies.acceptAll')}
                  </Button>
                </div>
              </div> : <div className="relative">
                <button onClick={() => setShowDetails(false)} className="absolute right-0 top-0 p-2">
                  <X className="h-4 w-4" />
                </button>
                
                <h3 className="text-lg font-semibold mb-4">
                  {t('cookies.preferences')}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('cookies.necessary.title')}</p>
                      <p className="text-sm text-gray-500">
                        {t('cookies.necessary.description')}
                      </p>
                    </div>
                    <Switch checked={preferences.necessary} disabled />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('cookies.analytics.title')}</p>
                      <p className="text-sm text-gray-500">
                        {t('cookies.analytics.description')}
                      </p>
                    </div>
                    <Switch checked={preferences.analytics} onCheckedChange={checked => setPreferences(prev => ({
                ...prev,
                analytics: checked
              }))} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t('cookies.marketing.title')}</p>
                      <p className="text-sm text-gray-500">
                        {t('cookies.marketing.description')}
                      </p>
                    </div>
                    <Switch checked={preferences.marketing} onCheckedChange={checked => setPreferences(prev => ({
                ...prev,
                marketing: checked
              }))} />
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  <p className="text-muted-foreground text-sm">
                    {t('cookies.readMore')}{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      {t('cookies.policy')}
                    </Link>
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowDetails(false)}>
                    {t('common.cancel')}
                  </Button>
                  <Button onClick={handleSavePreferences}>
                    {t('cookies.save')}
                  </Button>
                </div>
              </div>}
          </div>
        </motion.div>}
    </AnimatePresence>;
}