
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Download = () => {
  const { t } = useTranslation();

  return (
    <section id="download" className="section-wrapper min-h-[50vh] bg-gradient-to-b from-transparent via-transparent to-background relative">

      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/assets/images/bg_CTA.png')" }}
      >
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('download.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('download.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[160px] sm:w-[180px] hover:opacity-90 transition-opacity"
            >
              <img 
                src="/assets/images/App_Store_Badge.svg" 
                alt={t('hero.appStore')}
                className="w-full h-auto"
              />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[160px] sm:w-[180px] hover:opacity-90 transition-opacity"
            >
              <img 
                src="/assets/images/Google_Play_Store_badge.svg" 
                alt={t('hero.playStore')}
                className="w-full h-auto"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Download;
