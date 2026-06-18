import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { PRACTICE_AREAS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atuação | Maschio & Soares Advogados",
  description:
    "Conheça as áreas de atuação do escritório Maschio & Soares Advogados: Direito Civil, Trabalhista, Contratos e Família.",
};

export default function AtuacaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
                <Image
                  src="/images/desk-top.jpg"
                  alt="Documentos sendo assinados"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100} className="order-1 lg:order-2">
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.8rem]">
                  Nossas áreas
                  <br />
                  de atuação
                </h1>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  O escritório Maschio &amp; Soares Advogados dispõe de
                  expertise em diversas áreas do Direito, buscando sempre a
                  melhor solução jurídica para nossos clientes com
                  eficiência e ética.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-px overflow-hidden border border-[var(--rule)] sm:grid-cols-2">
              {PRACTICE_AREAS.map((area, i) => (
                <Reveal
                  key={area.title}
                  delay={Math.min(i * 50, 150)}
                  className="border-[var(--rule)] p-8 sm:border-r sm:border-b lg:p-12"
                >
                  <p className="eyebrow text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-[1.5rem] text-[var(--ink)]">{area.title}</h2>
                  <p className="mt-3 font-mono text-[0.78rem] leading-relaxed text-[var(--ink-soft)]">
                    {area.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--charcoal)] text-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 text-center lg:px-10 lg:py-20">
            <Reveal>
              <h2 className="text-[1.8rem] sm:text-[2.2rem]">
                Precisa de assessoria jurídica?
              </h2>
              <p className="mx-auto mt-4 max-w-md font-mono text-[0.8rem] text-[var(--paper)]/70">
                Entre em contato e agende uma consulta com nossa equipe.
              </p>
              <a
                href="/contato"
                style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
                className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors hover:bg-[var(--gold-bright)]"
              >
                Fale com a gente
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
