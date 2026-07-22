import { Container } from '@/components/shared/container';

const processSteps = [
  {
    number: '01',
    title: 'Descoberta',
    description:
      'Entendemos o negócio, os desafios, os objetivos e as oportunidades para definir o problema certo a ser resolvido.',
  },
  {
    number: '02',
    title: 'Arquitetura',
    description:
      'Definimos a estratégia técnica, a arquitetura da solução e as tecnologias mais adequadas para cada contexto.',
  },
  {
    number: '03',
    title: 'Engenharia',
    description:
      'Construímos, integramos e validamos a solução com foco em qualidade, segurança, desempenho e escalabilidade.',
  },
  {
    number: '04',
    title: 'Evolução',
    description:
      'Monitoramos resultados, identificamos novas oportunidades e evoluímos continuamente a solução.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-[#050b18] py-24 sm:py-32"
    >
      {/* Grid tecnológico de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow esquerdo */}
      <div
        aria-hidden="true"
        className="absolute -left-48 top-20 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Glow direito */}
      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-0 h-[560px] w-[560px] rounded-full bg-blue-600/15 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Introdução */}
        <div className="max-w-3xl">
          <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Nosso processo
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Da estratégia à solução em produção
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Transformamos desafios de negócio em soluções digitais por meio de
            um processo estruturado, colaborativo e orientado a resultados.
          </p>
        </div>

        {/* Jornada */}
        <div className="relative mt-20">
          {/* Linha principal — desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[29px] hidden h-px bg-gradient-to-r from-cyan-400/20 via-cyan-400/60 to-blue-500/20 lg:block"
          />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <article key={step.number} className="group relative">
                {/* Marcador */}
                <div className="relative z-10 flex items-center">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-400/30 bg-[#07111f] transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>

                {/* Indicador inferior */}
                <div
                  aria-hidden="true"
                  className="mt-8 h-px w-12 bg-cyan-400/30 transition-all duration-300 group-hover:w-20 group-hover:bg-cyan-300"
                />
              </article>
            ))}
          </div>
        </div>

        {/* Assinatura do processo */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Estratégia, tecnologia e engenharia trabalhando de forma integrada
            durante todo o ciclo de evolução da solução.
          </p>
        </div>
      </Container>
    </section>
  );
}