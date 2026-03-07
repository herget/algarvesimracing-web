"use client";

import { useEffect, useMemo, useState } from "react";

type NumberTickerProps = {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function NumberTicker({
  value,
  duration = 1400,
  suffix = "",
  className,
}: NumberTickerProps) {
  const [display, setDisplay] = useState(0);
  const roundedTarget = useMemo(() => Math.round(value), [value]);

  useEffect(() => {
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(roundedTarget * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [duration, roundedTarget]);

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
