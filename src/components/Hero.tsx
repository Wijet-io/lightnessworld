import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const backgroundImages = ['/assets/images/bg-2.png'];
export default function Hero() {
  const {
    t
  } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState(backgroundImages[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBackgroundImage(backgroundImages[randomIndex]);
  }, []);
  return <section className="relative h-[100vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700" style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-background md:bg-gradient-to-b"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-0 sm:gap-6 lg:gap-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 mt-2 sm:mt-6 lg:mt-0 relative z-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight relative z-20">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="flex flex-row justify-center lg:justify-start gap-4 pt-2">
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="#" className="hover:opacity-90 transition-opacity">
                <img src="/assets/images/App_Store_Badge.svg" alt={t('hero.appStore')} className="h-12 w-auto mx-auto" style={{
                maxWidth: '140px',
                minHeight: '40px'
              }} />
              </motion.a>
              <motion.a whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} href="#" className="hover:opacity-90 transition-opacity">
                <img src="/assets/images/Google_Play_Store_badge.svg" alt={t('hero.playStore')} className="h-12 w-auto mx-auto" style={{
                maxWidth: '140px',
                minHeight: '40px'
              }} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex-1 relative w-[75%] sm:w-full max-w-[400px] lg:max-w-[500px] -mb-12 sm:mb-0 lg:pt-0 z-10">
            <motion.img src="/assets/images/app_mockup.png" alt={t('hero.mockupAlt')} className="w-full h-auto mx-auto" style={{
            maxWidth: '100%',
            objectFit: 'contain'
          }} />
            <div className="absolute inset-0 -bottom-20 z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>;
}