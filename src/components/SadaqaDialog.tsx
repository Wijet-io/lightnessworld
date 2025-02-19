
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function SadaqaDialog() {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Heart className="h-4 w-4 text-accent" />
          {t('sadaqa.learnMore')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text mb-4">
            {t('sadaqa.title')}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            {t('sadaqa.description')}
          </p>
          <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('sadaqa.support')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
