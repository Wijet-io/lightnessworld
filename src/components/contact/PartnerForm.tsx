
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function PartnerForm() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 mb-6">
      <div className="space-y-2">
        <label htmlFor="activity" className="text-sm font-medium">
          {t('contact.fields.activity')}
        </label>
        <Input
          id="activity"
          placeholder={t('contact.placeholder.activity')}
          className="bg-white/50"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          {t('contact.fields.company')}
        </label>
        <Input
          id="company"
          placeholder={t('contact.placeholder.company')}
          className="bg-white/50"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="website" className="text-sm font-medium">
          {t('contact.fields.website')}
        </label>
        <div className="relative">
          <Input
            id="website"
            type="url"
            placeholder={t('contact.placeholder.website')}
            className="bg-white/50 pl-10"
          />
          <Globe className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="services" className="text-sm font-medium">
          {t('contact.fields.services')}
        </label>
        <Textarea
          id="services"
          placeholder={t('contact.placeholder.services')}
          className="min-h-[100px] resize-none bg-white/50"
          required
        />
      </div>
    </div>
  );
}
