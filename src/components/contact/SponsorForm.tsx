
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";

export function SponsorForm() {
  const { t } = useTranslation();

  return (
    <div className="space-y-2 mb-6">
      <label htmlFor="company" className="text-sm font-medium">
        {t('contact.fields.company')}
      </label>
      <Input
        id="company"
        placeholder={t('contact.placeholder.company')}
        className="bg-white/50"
        required
      />
      <label htmlFor="budget" className="text-sm font-medium mt-4">
        {t('contact.fields.budget')}
      </label>
      <select 
        id="budget"
        className="w-full h-10 rounded-md border border-input bg-white/50 px-3 py-2 text-sm"
        required
      >
        <option value="">{t('contact.placeholder.selectBudget')}</option>
        {['1-5k', '5-10k', '10-50k', '50k+'].map((range) => (
          <option key={range} value={range}>
            {range} €
          </option>
        ))}
      </select>
    </div>
  );
}
