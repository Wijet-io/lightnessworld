
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { CreditCard, Euro } from "lucide-react";
import { Card } from "../ui/card";

export function DonationForm() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 mb-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">{t('contact.fields.donation')}</h3>
        </div>
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            {t('contact.fields.amount')}
          </label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              min="1"
              step="0.01"
              placeholder={t('contact.placeholder.amount')}
              className="bg-white/50 pl-8"
              required
            />
            <Euro className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 my-4">
          {[10, 20, 50, 100].map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                const input = document.getElementById('amount') as HTMLInputElement;
                if (input) input.value = amount.toString();
              }}
              className="px-4 py-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {amount}€
            </button>
          ))}
        </div>
      </div>

      <Card className="p-4 bg-muted/50">
        <h4 className="text-sm font-medium mb-3">{t('contact.wireTransfer')}</h4>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Association:</span> LightNess</p>
          <p><span className="font-medium">Adresse:</span> 123 rue de la Lumière, 75001 Paris</p>
          <p><span className="font-medium">IBAN:</span> <span className="font-mono">FR76 XXXX XXXX XXXX XXXX XXXX XXX</span></p>
          <p><span className="font-medium">BIC:</span> <span className="font-mono">XXXXXXXX</span></p>
        </div>
      </Card>
    </div>
  );
}
