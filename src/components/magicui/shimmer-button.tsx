import Link from "next/link";

import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ShimmerButton({ href, children, className }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FF3131] px-8 text-sm font-semibold text-white shadow-[0_0_40px_rgba(255,49,49,0.45)] transition hover:scale-[1.02]",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-1000 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </Link>
  );
}
