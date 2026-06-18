"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Inicial" },
  { href: "/atuacao", label: "Atuação" },
  { href: "/contato", label: "Contato" },
  { href: "/profissionais", label: "Profissionais" },
  { href: "/publicacoes", label: "Publicações" },
  { href: "/responsabilidade-social", label: "Responsabilidade Social" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2L4 6v2h16V6l-8-4zM4 10v9h2v-9H4zm14 0v9h2v-9h-2zM9 10v9h2v-9H9zm4 0v9h2v-9h-2zM2 21h20v2H2v-2z"
              fill="var(--ink)"
            />
          </svg>
          <span className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.12em] text-[var(--ink)]">
            Maschio &amp; Soares Advogados
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-[var(--ink)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-[var(--ink)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--rule)] bg-[var(--paper)] px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--rule)] py-3 font-mono text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)] last:border-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
