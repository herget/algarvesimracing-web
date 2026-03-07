import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children: React.ReactNode;
};

type BentoCardProps = {
  className?: string;
  children: React.ReactNode;
};

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[180px]", className)}>
      {children}
    </div>
  );
}

export function BentoCard({ className, children }: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
