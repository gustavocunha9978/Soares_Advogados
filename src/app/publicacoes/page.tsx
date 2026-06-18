import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicações | Maschio & Soares Advogados",
  description:
    "Explore artigos, notícias e análises produzidos pelo escritório Maschio & Soares Advogados.",
};

export default function PublicacoesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/law-books.jpg"
                  alt="Estante de livros de Direito"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.8rem]">
                  Publicações do
                  <br />
                  escritório
                </h1>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  Explore artigos, notícias e análises produzidos pelo
                  escritório Maschio &amp; Soares Advogados, com foco em
                  temas relevantes e atualizados do universo jurídico.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 50, 150)}>
                  <Link href={`/publicacoes/${post.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 22vw, 45vw"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[0.85rem] font-bold leading-snug text-[var(--ink)]">
                      {post.title}
                    </p>
                    <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                      {post.date}
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
