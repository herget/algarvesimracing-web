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
        "relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.05] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl",
        className,
      )}
    >
      <BorderBeam />
      {children}
    </div>
  );
}
