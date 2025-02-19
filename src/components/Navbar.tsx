import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const languages = [{
  code: 'fr',
  name: 'Français'
}, {
  code: 'en',
  name: 'English'
}, {
  code: 'ar',
  name: 'العربية'
}, {
  code: 'de',
  name: 'Deutsch'
}, {
  code: 'nl',
  name: 'Nederlands'
}, {
  code: 'es',
  name: 'Español'
}, {
  code: 'tr',
  name: 'Türkçe'
}];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    t,
    i18n
  } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', {
        state: {
          scrollTo: sectionId
        }
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return <nav className="fixed w-full z-50 bg-gradient-to-r from-white/0 via-white/0 via-white/50 to-white/80 backdrop-blur-[2px] h-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-md hover:bg-white/10">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          <div className="flex-1 flex justify-center md:justify-start md:-mb-12 relative z-10">
            <Link to="/" className="flex items-center relative">
              <AnimatePresence>
                {scrolled && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -left-3 -right-3 -top-3 -bottom-3 bg-primary/80 backdrop-blur-md rounded-xl shadow-lg z-0"
                  />}
              </AnimatePresence>
              <motion.img 
                src="/assets/images/logo.svg" 
                alt="LightNess Logo" 
                animate={{
                  marginTop: scrolled ? "22px" : "36px"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`relative z-10 min-w-[70px] w-32 transition-[height] duration-300 ease-out ${
                  scrolled ? 'h-[110px]' : 'h-[144px]'
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to={location.pathname === '/' ? '#features' : '/?section=features'} className="nav-link text-neutral-800">
              {t('nav.features')}
            </Link>
            <Link to={location.pathname === '/' ? '#download' : '/?section=download'} className="nav-link text-neutral-800">
              {t('nav.download')}
            </Link>
            <Link to={location.pathname === '/' ? '#contact' : '/?section=contact'} className="nav-link text-neutral-800">
              {t('nav.contact')}
            </Link>
            <DropdownMenuPrimitive.Root modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-white/20 transition-colors">
                  <Languages className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8} className="bg-white border shadow-lg rounded-md min-w-[150px]">
                {languages.map(lang => <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`px-4 py-3 cursor-pointer hover:bg-accent/10 focus:outline-none focus-visible:outline-none ${i18n.language === lang.code ? 'bg-accent/10' : ''}`}>
                    {lang.name}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenuPrimitive.Root>
            <Button>{t('nav.start')}</Button>
          </div>

          <div className="md:hidden">
            <DropdownMenuPrimitive.Root modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-white/20 transition-colors">
                  <Languages className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8} className="bg-white border shadow-lg rounded-md min-w-[150px]">
                {languages.map(lang => <DropdownMenuItem key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`px-4 py-3 cursor-pointer hover:bg-accent/10 focus:outline-none focus-visible:outline-none ${i18n.language === lang.code ? 'bg-accent/10' : ''}`}>
                    {lang.name}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenuPrimitive.Root>
          </div>
        </div>

        {isOpen && <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b animate-fade-in shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link to={location.pathname === '/' ? '#features' : '/?section=features'} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/50 transition-colors" onClick={() => setIsOpen(false)}>
                {t('nav.features')}
              </Link>
              <Link to={location.pathname === '/' ? '#download' : '/?section=download'} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/50 transition-colors" onClick={() => setIsOpen(false)}>
                {t('nav.download')}
              </Link>
              <Link to={location.pathname === '/' ? '#contact' : '/?section=contact'} className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/50 transition-colors" onClick={() => setIsOpen(false)}>
                {t('nav.contact')}
              </Link>
              <div className="px-4 pt-2">
                <Button className="w-full py-2.5 text-sm font-medium">{t('nav.start')}</Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
}
