import { Container } from '@/components/shared/container';

const differentials = [
  {
    number: '01',
    title: 'Engenharia antes da tecnologia',
    description:
      'Partimos do problema de negócio para definir arquitetura, tecnologia e solução, evitando decisões técnicas sem propósito.',
  },
  {
    number: '02',
    title: 'Soluções sob medida',
    description:
      'Cada projeto é construído de acordo com o contexto, os objetivos e os desafios reais de cada organização.',
  },
  {
    number: '03',
    title: 'Visão integrada',
    description:
      'Conectamos software, inteligência artificial, cloud, dados e integração para construir soluções completas e sustentáveis.',
  },
  {
    number: '04',
    title: 'Evolução contínua',
    description:
      'Projetamos soluções preparadas para crescer, evoluir e acompanhar as novas necessidades do negócio.',
  },
];

export function Differentials() {
  return (
    <section
      id="differentials"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Grid tecnológico extremamente sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8, 145, 178, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8, 145, 178, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow superior direito */}
      <div
        aria-hidden="true"
        className="absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Glow inferior esquerdo */}
      <div
        aria-hidden="true"
        className="absolute -bottom-56 -left-56 h-[520px] w-[520px] rounded-full bg-blue-500/[0.06] blur-3xl"
      />

      <Container className="relative z-10">
        {/* Introdução */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
              Por que a CTAMAZÔNIA
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Tecnologia com propósito de negócio
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Mais do que implementar tecnologias, combinamos estratégia e
              engenharia para construir soluções digitais capazes de gerar
              valor real e evoluir junto com cada negócio.
            </p>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-20 grid md:grid-cols-2">
          {differentials.map((differential, index) => (
            <article
              key={differential.number}
              className={[
                'group relative border-slate-200',
                'py-10 md:p-10 lg:p-12',
                'transition-colors duration-300',
                'hover:bg-slate-50/70',

                index < 2 ? 'border-b' : '',
                index % 2 === 0 ? 'md:border-r' : '',

                index === 0 ? 'md:pl-0' : '',
                index === 1 ? 'md:pr-0' : '',
                index === 2 ? 'md:pl-0' : '',
                index === 3 ? 'md:pr-0' : '',
              ].join(' ')}
            >
              {/* Número + indicador */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.2em] text-cyan-600">
                  {differential.number}
                </span>

                <div
                  aria-hidden="true"
                  className="h-px w-8 bg-cyan-500/30 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-500"
                />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                {differential.title}
              </h3>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                {differential.description}
              </p>

              {/* Assinatura visual */}
              <div
                aria-hidden="true"
                className="mt-8 h-px w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:w-24"
              />
            </article>
          ))}
        </div>

        {/* Fechamento institucional */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="max-w-3xl text-sm leading-6 text-slate-500">
            Estratégia, arquitetura e engenharia conectadas para transformar
            tecnologia em capacidade real de negócio.
          </p>
        </div>
      </Container>
    </section>
  );
}