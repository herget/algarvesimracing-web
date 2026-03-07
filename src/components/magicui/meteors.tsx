type MeteorsProps = {
  number?: number;
};

export function Meteors({ number = 16 }: MeteorsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: number }).map((_, idx) => (
        <span
          key={idx}
          className="absolute h-[1px] w-20 bg-gradient-to-r from-transparent via-[#FF3131] to-transparent opacity-70 animate-[meteor_4s_linear_infinite]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}
