import { Container } from '@/components/shared/container';

const technologyGroups = [
  {
    number: '01',
    category: 'Engenharia de Software',
    technologies: ['Java', 'Node.js', 'TypeScript', 'Next.js'],
    description:
      'Arquiteturas modernas e aplicações construídas com foco em qualidade, desempenho, manutenção e evolução.',
  },
  {
    number: '02',
    category: 'Inteligência Artificial',
    technologies: ['Python', 'LLMs', 'RAG', 'AI Agents'],
    description:
      'Inteligência artificial aplicada à automação, análise de informação e criação de novas capacidades digitais.',
  },
  {
    number: '03',
    category: 'Cloud & DevOps',
    technologies: ['AWS', 'Azure', 'Docker', 'CI/CD'],
    description:
      'Infraestrutura e automação para executar soluções digitais com segurança, disponibilidade e escalabilidade.',
  },
  {
    number: '04',
    category: 'Dados',
    technologies: ['PostgreSQL', 'Redis', 'Data APIs', 'Analytics'],
    description:
      'Estruturas de dados preparadas para integrar operações, gerar informação e apoiar decisões.',
  },
  {
    number: '05',
    category: 'Integração',
    technologies: ['REST APIs', 'Webhooks', 'SAP', 'Microsserviços'],
    description:
      'Integração entre sistemas, plataformas e serviços para criar ecossistemas digitais conectados.',
  },
];

export function Technologies() {
  return (
    <section
      id="technologies"
      className="relative isolate overflow-hidden bg-[#050b18] py-24 sm:py-32"
    >
      {/* Grid tecnológico de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow superior esquerdo */}
      <div
        aria-hidden="true"
        className="absolute -left-56 -top-48 h-[560px] w-[560px] rounded-full bg-cyan-400/[0.08] blur-3xl"
      />

      {/* Glow inferior direito */}
      <div
        aria-hidden="true"
        className="absolute -bottom-64 -right-48 h-[640px] w-[640px] rounded-full bg-blue-600/10 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Introdução */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Tecnologias
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tecnologia escolhida para cada desafio
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Trabalhamos com um ecossistema tecnológico moderno para construir
              soluções seguras, escaláveis e alinhadas às necessidades de cada
              negócio.
            </p>
          </div>
        </div>

        {/* Technology System */}
        <div className="mt-20 border-y border-white/10">
          {technologyGroups.map((group) => (
            <article
              key={group.number}
              className={[
                'group relative grid gap-6 overflow-hidden',
                'border-b border-white/10 py-10 last:border-b-0',
                'md:grid-cols-[80px_1fr]',
                'lg:grid-cols-[80px_0.8fr_1.2fr]',
                'lg:items-start lg:gap-10 lg:py-12',
                'transition-colors duration-500',
              ].join(' ')}
            >
              {/* Iluminação da linha */}
              <div
                aria-hidden="true"
                className={[
                  'pointer-events-none absolute inset-0',
                  'bg-gradient-to-r',
                  'from-cyan-400/[0.055]',
                  'via-cyan-400/[0.015]',
                  'to-blue-500/[0.04]',
                  'opacity-0',
                  'transition-opacity duration-500',
                  'group-hover:opacity-100',
                ].join(' ')}
              />

              {/* Linha de energia */}
              <div
                aria-hidden="true"
                className={[
                  'pointer-events-none absolute bottom-0 left-0',
                  'h-px w-0',
                  'bg-gradient-to-r',
                  'from-cyan-300',
                  'via-cyan-400/70',
                  'to-transparent',
                  'transition-all duration-700 ease-out',
                  'group-hover:w-full',
                ].join(' ')}
              />

              {/* Número */}
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      'text-sm font-semibold tracking-[0.2em]',
                      'text-cyan-400',
                      'transition-colors duration-300',
                      'group-hover:text-cyan-300',
                    ].join(' ')}
                  >
                    {group.number}
                  </span>

                  {/* Nó tecnológico */}
                  <span
                    aria-hidden="true"
                    className={[
                      'h-1.5 w-1.5 rounded-full',
                      'bg-cyan-400/40',
                      'transition-all duration-300',
                      'group-hover:bg-cyan-300',
                      'group-hover:shadow-[0_0_12px_rgba(103,232,249,0.85)]',
                    ].join(' ')}
                  />
                </div>

                <div
                  aria-hidden="true"
                  className={[
                    'mt-4 h-px w-6',
                    'bg-cyan-400/30',
                    'transition-all duration-500',
                    'group-hover:w-12',
                    'group-hover:bg-cyan-300',
                  ].join(' ')}
                />
              </div>

              {/* Categoria */}
              <div className="relative z-10">
                <h3
                  className={[
                    'text-xl font-semibold tracking-tight text-white',
                    'sm:text-2xl',
                    'transition-all duration-300',
                    'group-hover:translate-x-1',
                    'group-hover:text-cyan-50',
                  ].join(' ')}
                >
                  {group.category}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 lg:hidden">
                  {group.description}
                </p>
              </div>

              {/* Descrição + tecnologias */}
              <div className="relative z-10">
                <p
                  className={[
                    'hidden max-w-2xl text-sm leading-6',
                    'text-slate-400 lg:block',
                    'transition-colors duration-300',
                    'group-hover:text-slate-300',
                  ].join(' ')}
                >
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 lg:mt-6">
                  {group.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={[
                        'rounded-full border border-white/10',
                        'bg-white/[0.03]',
                        'px-3 py-1.5',
                        'text-sm text-slate-300',
                        'transition-all duration-300',
                        'hover:-translate-y-0.5',
                        'hover:border-cyan-300/40',
                        'hover:bg-cyan-400/[0.08]',
                        'hover:text-cyan-100',
                        'hover:shadow-[0_8px_24px_rgba(34,211,238,0.08)]',
                      ].join(' ')}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Assinatura institucional */}
        <div className="mt-12 flex items-start gap-4 border-t border-white/10 pt-8">
          <div
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
          />

          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            A tecnologia é uma ferramenta. A arquitetura e o contexto de
            negócio determinam como ela deve ser utilizada.
          </p>
        </div>
      </Container>
    </section>
  );
}