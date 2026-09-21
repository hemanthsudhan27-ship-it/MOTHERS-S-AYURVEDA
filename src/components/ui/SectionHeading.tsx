interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-[#24211C]";
  const eyebrowColor = light ? "text-[#F3BA2F]" : "text-[#F3BA2F]";
  const subtitleColor = light ? "text-white/70" : "text-[#6D665A]";

  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && (
        <p className={`font-sans text-[10px] tracking-[0.25em] uppercase mb-4 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl lg:text-5xl xl:text-6xl leading-[1.05] ${titleColor}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className={`mt-4 font-sans text-sm lg:text-base leading-relaxed max-w-xl ${subtitleColor} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
