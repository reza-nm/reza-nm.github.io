// Maps the plain string keys used in siteData.js to actual lucide-react
// icon components. Add new entries here as needed instead of importing
// icons ad-hoc in every component.
import {
  Smartphone,
  HelpCircle,
  Gem,
  ShieldAlert,
  MousePointerClick,
  Zap,
  Target,
  SearchCheck,
  MessageSquare,
  Ban,
  CalendarClock,
  Users,
  CodeXml,
} from "lucide-react";

export const iconMap = {
  smartphone: Smartphone,
  circleQuestion: HelpCircle,
  gem: Gem,
  shieldAlert: ShieldAlert,
  mousePointerClick: MousePointerClick,
  zap: Zap,
  target: Target,
  searchCheck: SearchCheck,
  messageSquare: MessageSquare,
  ban: Ban,
  calendarClock: CalendarClock,
  users: Users,
  codeXml: CodeXml,
};

// Tailwind text-color classes for the "accent" keys used in siteData.js
export const accentTextClass = {
  gold2: "text-gold2",
  sage: "text-sage",
  coral: "text-coral",
};
