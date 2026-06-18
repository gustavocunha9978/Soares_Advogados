import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Maschio & Soares Advogados",
  description:
    "Entre em contato com o escritório Maschio & Soares Advogados para agendar uma consulta ou esclarecer dúvidas.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--linen)]">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/waiting-area.jpg"
                  alt="Sala de espera do escritório"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-[2.2rem] text-[var(--ink)] sm:text-[2.8rem]">
                  Contato e
                  <br />
                  atendimento
                </h1>
                <p className="mt-5 max-w-md font-mono text-[0.82rem] leading-relaxed text-[var(--ink-soft)]">
                  Preencha o formulário ou utilize os dados abaixo para
                  entrar em contato com o escritório Maschio &amp; Soares
                  Advogados. Nosso atendimento é dedicado a oferecer
                  suporte jurídico eficiente e personalizado.
                </p>
                <dl className="mt-8 space-y-2 font-mono text-[0.8rem] text-[var(--ink-soft)]">
                  <div className="flex gap-2">
                    <dt className="text-[var(--gold)]">E-mail:</dt>
                    <dd>contato@maschiosoares.adv.br</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[var(--gold)]">Telefone:</dt>
                    <dd>(45) 3254-0000</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-[var(--gold)]">Endereço:</dt>
                    <dd>Toledo, PR</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="mx-auto max-w-[640px] px-6 py-16 lg:py-20">
            <Reveal className="text-center">
              <h2 className="text-[1.8rem] text-[var(--ink)] sm:text-[2.1rem]">
                Contate-nos
              </h2>
              <p className="mt-3 font-mono text-[0.78rem] leading-relaxed text-[var(--ink-soft)]">
                Entre em contato conosco para agendar uma consulta ou
                esclarecer dúvidas. Estamos prontos para atender suas
                necessidades jurídicas.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
