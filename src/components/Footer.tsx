import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/atuacao", label: "Atuação" },
  { href: "/profissionais", label: "Profissionais" },
  { href: "/publicacoes", label: "Publicações" },
  { href: "/responsabilidade-social", label: "Responsabilidade Social" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--rule-on-dark)] bg-[var(--charcoal)] text-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-sm font-bold uppercase tracking-[0.12em]">
              Maschio &amp; Soares
              <br />
              Advogados
            </p>
            <p className="mt-4 max-w-sm text-sm text-[var(--paper)]/70">
              Assessoria jurídica especializada em Direito Civil, Trabalhista e
              Contratos, com ética, eficiência e experiência consolidada.
            </p>
          </div>

          <div>
            <p className="eyebrow text-[var(--gold-bright)]">Navegação</p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--paper)]/75 transition-colors hover:text-[var(--paper)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[var(--gold-bright)]">Contato</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--paper)]/75">
              <li>contato@maschiosoares.adv.br</li>
              <li>(45) 3254-0000</li>
              <li>Toledo, PR</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[var(--rule-on-dark)] pt-6 text-xs text-[var(--paper)]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Maschio &amp; Soares Advogados. Todos os direitos reservados.</p>
          <p>OAB/PR</p>
        </div>
      </div>
    </footer>
  );
}
