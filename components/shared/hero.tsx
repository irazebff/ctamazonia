import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';

export function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            Centro Tecnológico da Amazônia
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {siteConfig.company.slogan}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            {siteConfig.company.description}
          </p>

          <div className="mt-10 flex gap-4">
            <Button>
              {siteConfig.cta.primary}
            </Button>

            <Button variant="outline">
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}