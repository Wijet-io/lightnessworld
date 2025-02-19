
import { motion } from "framer-motion";
import { useToast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";
import { Heart, HandHeart, Building2 } from "lucide-react";
import { SadaqaDialog } from "./SadaqaDialog";
import { useState } from "react";
import { ContactOption } from "./contact/ContactOption";
import { ContactForm } from "./contact/ContactForm";
import { ContactType } from "./contact/types";

const supportOptions = [
  {
    icon: Heart,
    titleKey: 'contact.options.donate.title',
    descKey: 'contact.options.donate.description',
    buttonKey: 'contact.options.donate.button',
    type: 'donation'
  },
  {
    icon: Building2,
    titleKey: 'contact.options.sponsor.title',
    descKey: 'contact.options.sponsor.description',
    buttonKey: 'contact.options.sponsor.button',
    type: 'sponsor'
  },
  {
    icon: HandHeart,
    titleKey: 'contact.options.partner.title',
    descKey: 'contact.options.partner.description',
    buttonKey: 'contact.options.partner.button',
    type: 'partner'
  }
];

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [contactType, setContactType] = useState<ContactType>(null);

  const handleContactTypeClick = (type: ContactType) => {
    setContactType(prev => prev === type ? null : type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: t('contact.successDesc'),
    });
  };

  return (
    <section id="contact" className="section-wrapper bg-gradient-to-br from-background via-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{t('contact.title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('contact.subtitle')}
            </p>
            <div className="mt-4">
              <SadaqaDialog />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="relative">
                <ContactOption
                  icon={option.icon}
                  titleKey={option.titleKey}
                  descKey={option.descKey}
                  buttonKey={option.buttonKey}
                  isSelected={contactType === option.type}
                  onClick={() => handleContactTypeClick(option.type as ContactType)}
                  index={index}
                />

                {contactType === option.type && (
                  <div className="block md:hidden mt-4">
                    <ContactForm 
                      contactType={contactType}
                      onSubmit={handleSubmit}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {contactType && (
            <div className="hidden md:block mt-12">
              <ContactForm 
                contactType={contactType}
                onSubmit={handleSubmit}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
