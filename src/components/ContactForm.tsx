"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Este formulário ainda não está conectado a um serviço de envio.
    // Para receber as mensagens, integre com um endpoint (ex: Resend,
    // Formspree, ou uma rota /api própria) e substitua o trecho abaixo.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[var(--rule)] bg-[var(--linen)] p-8 text-center">
        <p className="font-mono text-sm text-[var(--ink)]">
          Mensagem enviada. Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Nome" id="name" name="name" required />
      <Field label="E-mail" id="email" name="email" type="email" required />
      <div>
        <label
          htmlFor="message"
          className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--ink-soft)]"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border border-[var(--rule)] bg-transparent px-4 py-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--gold)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}
        className="btn-dark inline-flex items-center justify-center rounded-full px-8 py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--ink-soft)]"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-[var(--rule)] bg-transparent px-4 py-3 font-mono text-sm text-[var(--ink)] outline-none focus:border-[var(--gold)]"
      />
    </div>
  );
}
