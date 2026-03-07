import { cn } from "@/lib/utils";

type AnimatedGradientTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[linear-gradient(90deg,#ffffff_0%,#FF3131_35%,#ff8a00_70%,#ffffff_100%)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient-pan_5s_linear_infinite]",
        className,
      )}
    >
      {children}
    </span>
  );
}
