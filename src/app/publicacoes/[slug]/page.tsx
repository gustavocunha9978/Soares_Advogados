import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Maschio & Soares Advogados`,
    description: post.excerpt,
  };
}

export default async function PublicacaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[760px] px-6 py-16 lg:py-20">
            <Link
              href="/publicacoes"
              className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              ← Voltar para publicações
            </Link>

            <Reveal className="mt-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--gold)]">
                {post.date}
              </p>
              <h1 className="mt-3 text-[2rem] text-[var(--ink)] sm:text-[2.5rem]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={100} className="relative mt-10 aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="760px"
              />
            </Reveal>

            <Reveal delay={150} className="mt-10 space-y-5">
              {post.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-mono text-[0.85rem] leading-relaxed text-[var(--ink-soft)]"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </article>

        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <Reveal>
              <h2 className="text-[1.6rem] text-[var(--ink)]">Leia também</h2>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i * 50, 150)}>
                  <Link href={`/publicacoes/${p.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="30vw"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[0.8rem] font-bold leading-snug text-[var(--ink)]">
                      {p.title}
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
