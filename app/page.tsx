import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero/hero';
import { Services } from '@/components/sections/services/services';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}