import type { ReactElement } from "react";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  bioLong: string;
  photo: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "junior-soares",
    name: "Junior Soares",
    role: "Sócio-fundador",
    bio: "Possui mais de 20 anos de experiência no Direito Empresarial e lidera a equipe com visão estratégica.",
    bioLong:
      "Sócio-fundador do escritório, Junior Soares acumula mais de 20 anos de experiência em Direito Empresarial e Civil. Atua na condução estratégica dos casos do escritório, com foco em soluções jurídicas eficientes e personalizadas para cada cliente.",
    photo: "/images/team-1.jpg",
  },
  {
    slug: "mateo-garcia",
    name: "Mateo García",
    role: "Advogado Sênior",
    bio: "Especialização em Direito Civil e um histórico comprovado de casos de sucesso.",
    bioLong:
      "Advogado sênior com especialização em Direito Civil, Mateo García conduz processos complexos com rigor técnico e um histórico consistente de resultados favoráveis aos clientes do escritório.",
    photo: "/images/team-2.jpg",
  },
  {
    slug: "zuri-ndlovu",
    name: "Zuri Ndlovu",
    role: "Advogado Pleno",
    bio: "Traz sua expertise em Direito Trabalhista e contribui para a excelência do escritório.",
    bioLong:
      "Advogado pleno com atuação concentrada em Direito Trabalhista, Zuri Ndlovu apoia clientes em questões contratuais e ações trabalhistas, sempre priorizando a comunicação clara e o acompanhamento próximo de cada caso.",
    photo: "/images/team-3.jpg",
  },
  {
    slug: "leila-haddad",
    name: "Leila Haddad",
    role: "Estagiária de Direito",
    bio: "Apoia as atividades diárias com dedicação e busca constante por conhecimento.",
    bioLong:
      "Estagiária de Direito, Leila Haddad apoia as atividades diárias do escritório com dedicação, contribuindo na pesquisa jurídica e no suporte direto à equipe de advogados.",
    photo: "/images/team-4.jpg",
  },
];

export type Service = {
  title: string;
  icon: ReactElement;
};

import {
  ScaleIcon,
  ShieldGroupIcon,
  ContractIcon,
  GavelIcon,
} from "@/components/icons";

export const SERVICES: Service[] = [
  {
    title: "Assessoria em processos civis e recursos judiciais.",
    icon: <ScaleIcon />,
  },
  {
    title: "Consultoria em Direito do Trabalho e ações trabalhistas.",
    icon: <GavelIcon />,
  },
];

export const PRACTICE_AREAS_GRID: Service[] = [
  { title: "Assessoria em processos civis e recursos judiciais.", icon: <ScaleIcon /> },
  { title: "Consultoria em Direito do Trabalho e ações trabalhistas.", icon: <ShieldGroupIcon /> },
  { title: "Elaboração e revisão de contratos diversos.", icon: <ContractIcon /> },
  { title: "Representação judicial em processos civis e cíveis.", icon: <GavelIcon /> },
];

export type PracticeArea = {
  title: string;
  description: string;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    title: "Direito Civil",
    description:
      "Assessoria em processos civis, ações de indenização, responsabilidade civil e recursos judiciais em todas as instâncias.",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Consultoria preventiva e contenciosa em Direito do Trabalho, incluindo ações trabalhistas e acordos extrajudiciais.",
  },
  {
    title: "Contratos",
    description:
      "Elaboração, revisão e negociação de contratos civis e empresariais, com foco na segurança jurídica das partes.",
  },
  {
    title: "Direito de Família",
    description:
      "Atuação em divórcios, pensão alimentícia, guarda de filhos e inventários, com abordagem humanizada.",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "navegacao-intuitiva",
    title: "Navegação intuitiva",
    date: "30 de outubro de 2025",
    image: "/images/office-interior.jpg",
    excerpt:
      "A experiência do usuário é priorizada com uma estrutura responsiva e acessível em qualquer dispositivo.",
    body: [
      "A experiência do usuário é priorizada com uma estrutura responsiva, que facilita a navegação pelas seções de Atuação, Profissionais, Publicações, Contato e Responsabilidade Social, garantindo acessibilidade e usabilidade em qualquer dispositivo.",
      "Nosso site foi pensado para que clientes e visitantes encontrem rapidamente as informações que precisam, com um design limpo e direto.",
    ],
  },
  {
    slug: "tipografia-distintiva",
    title: "Tipografia distintiva",
    date: "30 de outubro de 2025",
    image: "/images/law-books.jpg",
    excerpt:
      "A identidade visual do escritório reflete tradição e seriedade através da escolha tipográfica.",
    body: [
      "A escolha tipográfica do escritório Maschio & Soares Advogados busca refletir os valores de tradição, seriedade e excelência que guiam nossa atuação profissional.",
      "Cada detalhe visual foi pensado para transmitir confiança e profissionalismo aos nossos clientes.",
    ],
  },
  {
    slug: "conteudo-profissional",
    title: "Conteúdo profissional",
    date: "30 de outubro de 2025",
    image: "/images/desk-top.jpg",
    excerpt:
      "Produzimos conteúdo jurídico relevante e atualizado para manter nossos clientes informados.",
    body: [
      "O escritório Maschio & Soares Advogados produz conteúdo jurídico relevante, com foco em manter nossos clientes informados sobre temas atuais do universo do Direito.",
      "Acompanhe nossas publicações para se manter atualizado sobre mudanças legislativas e jurisprudenciais que possam impactar seus interesses.",
    ],
  },
  {
    slug: "responsabilidade-social",
    title: "Responsabilidade social",
    date: "30 de outubro de 2025",
    image: "/images/community.jpg",
    excerpt:
      "Promovemos projetos que contribuem para o desenvolvimento sustentável e o bem-estar social.",
    body: [
      "O escritório Maschio & Soares Advogados promove projetos que contribuem para o desenvolvimento sustentável e o bem-estar social, reforçando nosso compromisso com a comunidade.",
      "Acreditamos que a advocacia deve ir além da prática jurídica, contribuindo positivamente para a sociedade por meio de projetos sociais e iniciativas sustentáveis.",
    ],
  },
];
