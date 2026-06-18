import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { TEAM, PRACTICE_AREAS_GRID, POSTS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-[var(--taupe)]">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
            <Reveal>
              <p className="eyebrow text-[var(--charcoal)]/60">
                Maschio &amp; Soares Advogados
              </p>
              <h1 className="mt-5 text-[2.75rem] text-[var(--ink)] sm:text-[3.4rem] lg:text-[3.8rem]">
                Excelência em
                <br />
                assessoria
                <br />
                <span className="text-[var(--gold)]">jurídica</span>
              </h1>
              <p className="mt-6 max-w-md text-[1.05rem] text-[var(--ink-soft)]">
                Protegemos os interesses de nossos clientes com ética,
                eficiência e uma experiência consolidada em Direito Civil,
                Trabalhista e Contratos.
              </p>
              <div className="mt-9">
                <Button href="/profissionais">Conheça nossos profissionais</Button>
              </div>
            </Reveal>

            <Reveal delay={150} className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-[5/6]">
              <Image
                src="/images/hero-office.jpg"
                alt="Advogado assinando documentos em escritório"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </Reveal>
          </div>
        </section>

        {/* TRAJETÓRIA */}
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <Reveal>
                <h2 className="text-[2rem] text-[var(--ink)] sm:text-[2.4rem]">
                  Nossa trajetória e compromissos
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  O escritório Maschio &amp; Soares Advogados combina
                  tradição e inovação para oferecer soluções jurídicas
                  personalizadas. Nosso propósito é proteger os interesses
                  de nossos clientes com ética, eficiência e experiência
                  consolidada, refletindo nossos valores de compromisso,
                  transparência e excelência profissional.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <Reveal className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/waiting-area.jpg"
                  alt="Sala de espera do escritório"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </Reveal>
              <Reveal delay={100} className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[var(--charcoal)]">
                <div className="flex gap-6 text-[var(--gold-bright)]">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v18M5 7l-3 6a3 3 0 006 0l-3-6zm14 0l-3 6a3 3 0 006 0l-3-6zM4 7h4M16 7h4M8 21h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2l8 3.5V11c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V5.5L12 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                </div>
              </Reveal>
              <Reveal delay={200} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/office-interior.jpg"
                  alt="Interior do escritório"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/law-books.jpg"
                  alt="Livros de Direito"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-[2rem] text-[var(--ink)] sm:text-[2.4rem]">Serviços</h2>
                <p className="mt-3 font-mono text-[0.8rem] uppercase tracking-[0.05em] text-[var(--ink-soft)]">
                  Especializados em questões de Direito Civil e Contratos.
                </p>
                <div className="mt-7">
                  <Button href="/atuacao">Saiba mais</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <h2 className="text-[2rem] text-[var(--ink)] sm:text-[2.4rem]">
                  Nossas áreas de atuação
                </h2>
                <p className="mt-5 max-w-md font-mono text-[0.8rem] leading-relaxed text-[var(--ink-soft)]">
                  O escritório Maschio &amp; Soares Advogados dispõe de
                  expertise em diversas áreas do Direito, buscando sempre a
                  melhor solução jurídica para nossos clientes com
                  eficiência e ética.
                </p>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                {PRACTICE_AREAS_GRID.map((service, i) => (
                  <Reveal key={service.title} delay={Math.min(i * 50, 150)}>
                    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[var(--charcoal)]">
                      <div className="text-[var(--gold-bright)]">{service.icon}</div>
                    </div>
                    <p className="mt-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-soft)]">
                      {service.title}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPE (preview) */}
        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <Reveal>
              <h2 className="text-[2rem] text-[var(--ink)] sm:text-[2.4rem]">Nossa equipe</h2>
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={Math.min(i * 50, 150)} className="flex gap-5">
                  <div className="relative h-[150px] w-[150px] flex-none overflow-hidden border-l-2 border-[var(--gold)]">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.04em] text-[var(--ink)]">
                      {member.name}
                    </p>
                    <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--gold)]">
                      {member.role}
                    </p>
                    <p className="mt-2 font-mono text-[0.74rem] leading-relaxed text-[var(--ink-soft)]">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICAÇÕES (preview) */}
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
            <Reveal>
              <h2 className="text-[2rem] text-[var(--ink)] sm:text-[2.4rem]">
                Publicações recentes
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 50, 150)}>
                  <a href={`/publicacoes/${post.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[0.85rem] font-bold leading-snug text-[var(--ink)]">
                      {post.title}
                    </p>
                    <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                      {post.date}
                    </p>
                  </a>
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
