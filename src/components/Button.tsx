import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline-on-dark";
  className?: string;
};

const VARIANT_STYLES: Record<string, CSSProperties> = {
  dark: { backgroundColor: "var(--ink)", color: "var(--paper)" },
  light: { backgroundColor: "var(--paper)", color: "var(--ink)" },
  "outline-on-dark": {
    border: "1px solid var(--rule-on-dark)",
    color: "var(--paper)",
    backgroundColor: "transparent",
  },
};

const VARIANT_CLASS: Record<string, string> = {
  dark: "btn-dark",
  light: "btn-light",
  "outline-on-dark": "btn-outline-on-dark",
};

export default function Button({
  href,
  children,
  variant = "dark",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-200";

  return (
    <Link
      href={href}
      style={VARIANT_STYLES[variant]}
      className={`${base} ${VARIANT_CLASS[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
