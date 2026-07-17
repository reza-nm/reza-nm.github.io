// Tiny classname helper (shadcn/ui convention). Lets you conditionally
// combine Tailwind classes: cn("p-4", isActive && "bg-gold")
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
