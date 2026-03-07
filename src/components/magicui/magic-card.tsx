import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";

type MagicCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagicCard({ children, className }: MagicCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors",
        "dark:border-white/20 dark:bg-white/[0.05] dark:shadow-[0_18px_60px_rgba(0,0,0,0.55)]",
        "border-black/10 bg-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <BorderBeam />
      {children}
    </div>
  );
}
