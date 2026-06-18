import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { TEAM } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profissionais | Maschio & Soares Advogados",
  description:
    "Conheça a equipe de advogados do escritório Maschio & Soares Advogados.",
};

export default function ProfissionaisPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/office-interior.jpg"
                  alt="Interior do escritório"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.8rem]">
                  Nossa equipe de
                  <br />
                  profissionais
                </h1>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  Os advogados do escritório Maschio &amp; Soares Advogados
                  contam com ampla experiência e formações renomadas,
                  garantindo assessoria jurídica de excelência para nossos
                  clientes.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, i) => (
                <Reveal key={member.slug} delay={Math.min(i * 50, 150)}>
                  <Link href={`/profissionais/${member.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                      />
                    </div>
                    <p className="mt-4 font-mono text-[0.9rem] font-bold uppercase tracking-[0.03em] text-[var(--ink)]">
                      {member.name}
                    </p>
                    <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--gold)]">
                      {member.role}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
