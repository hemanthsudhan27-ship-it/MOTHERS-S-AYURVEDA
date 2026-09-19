import Link from "next/link";
import { cn } from "@/lib/utils";

interface BookNowButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  id?: string;
  external?: boolean;
}

export default function BookNowButton({
  href = "/booking",
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  children,
  id,
  external = false,
}: BookNowButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-sans tracking-[0.15em] uppercase transition-all duration-300 group";

  const variants = {
    primary: "bg-[#D6A33A] text-[#24211C] hover:bg-[#B98424] border border-[#D6A33A] hover:border-[#B98424]",
    outline:
      "bg-transparent border border-[#D6A33A] text-[#D6A33A] hover:bg-[#D6A33A] hover:text-[#24211C]",
    ghost:
      "bg-transparent border border-white/30 text-white hover:border-[#D6A33A] hover:text-[#D6A33A]",
  };

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    md: "text-xs px-6 py-3",
    lg: "text-xs px-8 py-4",
  };

  const allClasses = cn(baseClasses, variants[variant], sizes[size], className);

  const label = children || "Book Your Stay";

  const ArrowIcon = () => (
    <svg
      className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6h10M7 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (onClick) {
    return (
      <button id={id} onClick={onClick} className={allClasses}>
        {label}
        <ArrowIcon />
      </button>
    );
  }

  if (external) {
    return (
      <a id={id} href={href} target="_blank" rel="noopener noreferrer" className={allClasses}>
        {label}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link id={id} href={href} className={allClasses}>
      {label}
      <ArrowIcon />
    </Link>
  );
}
