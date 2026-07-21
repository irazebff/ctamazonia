'use client';

import { motion } from 'framer-motion';

import { Container } from '@/components/shared/container';
import { services } from '@/constants/services';

/**
 * Controla o stagger (entrada sequencial)
 * dos elementos filhos.
 */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/**
 * Animação padrão utilizada na introdução
 * e nos cards da seção.
 */
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
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

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      <Container className="relative z-10">
        {/* Introdução */}
        <motion.div
          className="max-w-3xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          <motion.span
            variants={itemVariants}
            className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600"
          >
            Nossas soluções
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Tecnologia para transformar desafios em resultados
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Combinamos engenharia de software, inteligência artificial, cloud,
            dados e integração para criar soluções digitais alinhadas aos
            objetivos de cada negócio.
          </motion.p>
        </motion.div>

        {/* Grid de serviços */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={itemVariants}
              className={[
                'group relative overflow-hidden rounded-2xl',
                'border border-slate-200 bg-white',
                'p-8 sm:p-10',
                'transition-all duration-300',
                'hover:-translate-y-1',
                'hover:border-cyan-300',
                'hover:shadow-xl',
                'hover:shadow-cyan-950/5',
                index === services.length - 1 ? 'md:col-span-2' : '',
              ].join(' ')}
            >
              {/* Glow interno do card */}
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/20"
              />

              {/* Conteúdo do card */}
              <div className="relative">
                <span className="text-sm font-semibold tracking-[0.2em] text-cyan-600">
                  {service.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <span>Explorar solução</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}