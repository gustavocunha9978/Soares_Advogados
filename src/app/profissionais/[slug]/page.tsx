import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { TEAM } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} | Maschio & Soares Advogados`,
    description: member.bio,
  };
}

export default async function ProfissionalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = TEAM.find((m) => m.slug === slug);
  if (!member) notFound();

  const others = TEAM.filter((m) => m.slug !== member.slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <Link
              href="/profissionais"
              className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              ← Voltar para a equipe
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
              <Reveal className="relative aspect-[3/4] overflow-hidden border-l-2 border-[var(--gold)]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.6rem]">
                  {member.name}
                </h1>
                <p className="mt-2 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-[var(--gold)]">
                  {member.role}
                </p>
                <p className="mt-6 max-w-lg font-mono text-[0.85rem] leading-relaxed text-[var(--ink-soft)]">
                  {member.bioLong}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <Reveal>
              <h2 className="text-[1.6rem] text-[var(--ink)]">Outros profissionais</h2>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {others.map((m, i) => (
                <Reveal key={m.slug} delay={Math.min(i * 50, 150)}>
                  <Link href={`/profissionais/${m.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="30vw"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[0.8rem] font-bold uppercase tracking-[0.03em] text-[var(--ink)]">
                      {m.name}
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
