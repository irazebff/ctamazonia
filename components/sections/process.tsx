'use client';

import { motion, useReducedMotion } from 'framer-motion';

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

const introVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const introItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const journeyVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  const initialState = shouldReduceMotion ? 'visible' : 'hidden';

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
        <motion.div
          className="max-w-3xl"
          variants={introVariants}
          initial={initialState}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          <motion.span
            variants={introItemVariants}
            className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            Nosso processo
          </motion.span>

          <motion.h2
            variants={introItemVariants}
            className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Da estratégia à solução em produção
          </motion.h2>

          <motion.p
            variants={introItemVariants}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Transformamos desafios de negócio em soluções digitais por meio de
            um processo estruturado, colaborativo e orientado a resultados.
          </motion.p>
        </motion.div>

        {/* Jornada */}
        <motion.div
          className="relative mt-20"
          variants={journeyVariants}
          initial={initialState}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* Fluxo tecnológico — desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[29px] hidden h-px overflow-hidden lg:block"
          >
            {/* Linha base */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-cyan-400/50 to-blue-500/20" />

            {/* Pulso de energia */}
            <motion.div
              className="absolute top-1/2 h-[2px] w-28 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200 to-transparent blur-[0.5px]"
              initial={{ left: '-10%', opacity: 0 }}
              animate={
                shouldReduceMotion
                  ? { left: '24%', opacity: 0.45 }
                  : {
                      left: ['-10%', '100%'],
                      opacity: [0, 0.9, 0.9, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 4.8,
                      ease: 'linear',
                      repeat: Infinity,
                      repeatDelay: 1.4,
                    }
              }
            />
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <motion.article
                key={step.number}
                variants={stepVariants}
                className="group relative"
              >
                {/* Technology node */}
                <div className="relative z-10 flex items-center">
                  <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-cyan-400/30 bg-[#07111f] transition-all duration-300 group-hover:border-cyan-300 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    {/* Anel interno */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-[5px] rounded-full border border-cyan-400/10 transition-colors duration-300 group-hover:border-cyan-300/30"
                    />

                    {/* Núcleo */}
                    <span className="relative z-10 text-sm font-semibold tracking-[0.18em] text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                      {step.number}
                    </span>

                    {/* Ponto de conexão */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.45)] transition-all duration-300 group-hover:bg-cyan-300 group-hover:shadow-[0_0_12px_rgba(103,232,249,0.8)]"
                    />
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
              </motion.article>
            ))}
          </div>
        </motion.div>

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