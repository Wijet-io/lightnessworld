
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";
import { ContactType } from "./types";
import { DonationForm } from "./DonationForm";
import { SponsorForm } from "./SponsorForm";
import { PartnerForm } from "./PartnerForm";

interface ContactFormProps {
  contactType: ContactType;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({ contactType, onSubmit }: ContactFormProps) {
  const { t } = useTranslation();

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={onSubmit} 
      className="space-y-6 glass-panel p-8 rounded-2xl"
    >
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1 space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {t('contact.name')}
            </label>
            <Input 
              id="name"
              placeholder={t('contact.placeholder.name')}
              className="bg-white/50"
              required
            />
          </div>
          <div className="flex-1 space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t('contact.email')}
            </label>
            <Input 
              id="email"
              type="email" 
              placeholder={t('contact.placeholder.email')}
              className="bg-white/50"
              required
            />
          </div>
        </div>

        {contactType === 'donation' && <DonationForm />}
        {contactType === 'sponsor' && <SponsorForm />}
        {contactType === 'partner' && <PartnerForm />}

        <div className="space-y-2 mb-6">
          <label htmlFor="message" className="text-sm font-medium">
            {t('contact.message')}
          </label>
          <Textarea
            id="message"
            placeholder={t('contact.placeholder.message')}
            className="min-h-[100px] resize-none bg-white/50"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          size="lg"
        >
          {t('contact.submit')}
        </Button>
      </motion.div>
    </motion.form>
  );
}
