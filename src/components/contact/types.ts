
import { LucideIcon } from "lucide-react";

export type ContactType = 'donation' | 'sponsor' | 'partner' | null;

export interface SupportOption {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  buttonKey: string;
  type: string;
}
