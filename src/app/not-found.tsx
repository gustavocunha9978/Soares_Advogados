import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center bg-[var(--paper)] px-6 py-24">
        <div className="text-center">
          <p className="eyebrow text-[var(--gold)]">Erro 404</p>
          <h1 className="mt-4 text-[2.4rem] text-[var(--ink)]">Página não encontrada</h1>
          <p className="mt-3 font-mono text-[0.82rem] text-[var(--ink-soft)]">
            A página que você procura não existe ou foi movida.
          </p>
          <Button href="/" className="mt-8">
            Voltar para a página inicial
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
