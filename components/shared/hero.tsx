import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081220]">
      {/* Glow superior */}
      <div
        aria-hidden="true"
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      {/* Glow lateral */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-3xl"
      />

      <Container className="relative z-10 flex min-h-[680px] items-center py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">
            {siteConfig.company.legalName}
          </span>

          {/* Headline */}
          <h1 className="mt-7 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Engenharia para{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transformar Negócios
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            {siteConfig.company.description}
          </p>

          {/* Actions */}
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
        </div>
      </Container>
    </section>
  );
}