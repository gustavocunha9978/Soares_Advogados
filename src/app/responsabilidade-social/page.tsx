import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsabilidade Social | Maschio & Soares Advogados",
  description:
    "Conheça os projetos de responsabilidade social do escritório Maschio & Soares Advogados.",
};

export default function ResponsabilidadeSocialPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/community.jpg"
                  alt="Ação de voluntariado na comunidade"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.8rem]">
                  Nossa
                  <br />
                  responsabilidade
                  <br />
                  social
                </h1>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  O escritório Maschio &amp; Soares Advogados promove
                  projetos que contribuem para o desenvolvimento
                  sustentável e o bem-estar social, reforçando nosso
                  compromisso com a comunidade.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal>
                <p className="eyebrow text-[var(--gold)]">Nossa atuação</p>
                <h2 className="mt-4 text-[1.9rem] text-[var(--ink)] sm:text-[2.2rem]">
                  Compromisso com a
                  <br />
                  legalidade e a ética
                </h2>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  Nosso escritório prioriza a responsabilidade social e o
                  envolvimento com a comunidade, promovendo ações que
                  refletem nossos valores éticos e sociais. Acreditamos que
                  a advocacia deve ir além da prática jurídica,
                  contribuindo positivamente para a sociedade por meio de
                  projetos sociais e iniciativas sustentáveis que reforçam
                  nosso compromisso com o bem comum.
                </p>
                <div className="mt-7">
                  <Button href="/atuacao">Saiba mais</Button>
                </div>
              </Reveal>
              <Reveal delay={100} className="relative aspect-[4/5] overflow-hidden bg-[var(--charcoal)]">
                <div className="absolute inset-0 flex items-center justify-center text-[var(--gold-bright)]">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21s-7-4.4-9.5-9C.8 8.4 2 4.7 5.5 4c2-.4 3.8.6 4.5 2.2C10.7 4.6 12.5 3.6 14.5 4c3.5.7 4.7 4.4 3 8C15 16.6 12 21 12 21z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
