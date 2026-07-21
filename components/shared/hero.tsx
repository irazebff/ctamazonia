import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081220]">
      {/* Grid tecnológico */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
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
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Glow direito */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-3xl"
      />

      {/* Fluxo tecnológico inspirado nos rios da Amazônia */}
      <div
        aria-hidden="true"
        className="absolute right-[-180px] top-1/2 hidden h-[500px] w-[760px] -translate-y-1/2 opacity-60 lg:block"
      >
        <div className="absolute left-0 top-[90px] h-[2px] w-[720px] rotate-[-8deg] rounded-full bg-gradient-to-r from-transparent via-cyan-400/60 to-blue-500/20" />

        <div className="absolute left-[20px] top-[145px] h-[2px] w-[700px] rotate-[-4deg] rounded-full bg-gradient-to-r from-transparent via-blue-400/50 to-cyan-300/20" />

        <div className="absolute left-[10px] top-[205px] h-[2px] w-[740px] rotate-[2deg] rounded-full bg-gradient-to-r from-transparent via-cyan-300/70 to-blue-500/20" />

        <div className="absolute left-[40px] top-[265px] h-[2px] w-[690px] rotate-[7deg] rounded-full bg-gradient-to-r from-transparent via-blue-500/50 to-cyan-300/20" />

        <div className="absolute left-[70px] top-[320px] h-[2px] w-[650px] rotate-[12deg] rounded-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        {/* Pontos do circuito */}
        <div className="absolute left-[330px] top-[166px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />

        <div className="absolute left-[455px] top-[213px] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

        <div className="absolute left-[545px] top-[280px] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

        <div className="absolute left-[610px] top-[122px] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
      </div>

      {/* Conteúdo */}
      <Container className="relative z-10 flex min-h-[680px] items-center py-24 lg:py-32">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
            {siteConfig.company.legalName}
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engenharia para{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transformar Negócios
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {siteConfig.company.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"
            >
              {siteConfig.cta.primary}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              {siteConfig.cta.secondary}
            </Button>
          </div>
          {/* Expertise */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Expertise
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-300 sm:text-base">
              <span>Engenharia de Software</span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-cyan-400 sm:block"
              />

              <span>Inteligência Artificial</span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-cyan-400 sm:block"
              />

              <span>Cloud</span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-cyan-400 sm:block"
              />

              <span>Integração</span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-cyan-400 sm:block"
              />

              <span>Dados</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}