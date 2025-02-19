
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { LucideIcon } from "lucide-react";

interface ContactOptionProps {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  buttonKey: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

export function ContactOption({
  icon: Icon,
  titleKey,
  descKey,
  buttonKey,
  isSelected,
  onClick,
  index
}: ContactOptionProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`feature-card flex flex-col items-center text-center p-6 cursor-pointer
        ${isSelected ? 'border-primary' : ''}`}
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>
      <p className="text-muted-foreground mb-4 flex-1">{t(descKey)}</p>
      <Button 
        variant={isSelected ? "default" : "secondary"} 
        className="w-full"
      >
        {t(buttonKey)}
      </Button>
    </motion.div>
  );
}
