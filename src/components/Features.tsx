
import { BookOpen, MapPin, FileCheck, Timer, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const features = [{
  icon: BookOpen,
  titleKey: "features.testament",
  descriptionKey: "features.testamentDesc",
  mockup: "/assets/images/mockup_testament.jpeg"
}, {
  icon: MapPin,
  titleKey: "features.services",
  descriptionKey: "features.servicesDesc",
  mockup: "/assets/images/mockup_services.jpeg"
}, {
  icon: FileCheck,
  titleKey: "features.debts",
  descriptionKey: "features.debtsDesc",
  mockup: "/assets/images/mockup_dettes.jpeg"
}, {
  icon: Timer,
  titleKey: "features.timer",
  descriptionKey: "features.timerDesc",
  mockup: "/assets/images/mockup_timer.jpeg"
}];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const { t } = useTranslation();

  return (
    <section id="features" className="min-h-screen w-full bg-gradient-to-b from-secondary via-background to-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text"
          >
            {t('features.mainTitle')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg md:text-xl"
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <div className="sticky top-24 space-y-3 max-w-xl mx-auto">
              <p className="text-sm text-muted-foreground mb-4 text-center lg:text-left">
                {t('features.clickToSeeMore')}
              </p>
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group py-3 px-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/50 
                      ${activeFeature === index ? 'bg-white shadow-lg border border-primary/20' : 'border border-transparent hover:border-muted'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors duration-300 
                      ${activeFeature === index ? 'bg-primary/10' : 'bg-secondary group-hover:bg-primary/5'}`}>
                      <feature.icon className={`h-5 w-5 transition-colors duration-300
                        ${activeFeature === index ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-base font-medium transition-colors duration-300
                          ${activeFeature === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                          {t(feature.titleKey)}
                        </h3>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeFeature === index ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-2"
                        >
                          <CheckCircle className="h-5 w-5 text-background fill-primary" />
                        </motion.div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 truncate">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[320px] lg:max-w-[360px] mx-auto"
            >
              <div className="relative w-full aspect-[9/19.7]">
                <div className="absolute inset-0 bg-foreground rounded-[3rem] p-2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-background rounded-b-2xl"></div>
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                    <div className="relative w-full h-full">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{
                            opacity: activeFeature === index ? 1 : 0,
                            x: activeFeature === index ? 0 : 100
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                          style={{ display: activeFeature === index ? 'block' : 'none' }}
                        >
                          <img src={feature.mockup} alt={t(feature.titleKey)} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
