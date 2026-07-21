'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';

const navigation = [
  { label: 'Início', href: '#' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    console.log('Menu toggle clicked. Current state:', isMenuOpen);
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="relative z-50 border-b bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center"
            onClick={closeMenu}
          >
            <Image
              src={siteConfig.company.logo}
              alt={siteConfig.company.name}
              width={220}
              height={70}
              priority
              className="h-auto max-h-12 w-auto max-w-[190px] sm:max-h-14 sm:max-w-[220px]"
            />
          </Link>

          {/* Navegação Desktop */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Navegação principal"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-cyan-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link href="#contact">
              <Button>{siteConfig.cta.primary}</Button>
            </Link>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-border transition-colors hover:bg-muted active:scale-95 md:hidden"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border py-5 md:hidden"
          >
            <nav
              className="flex flex-col"
              aria-label="Navegação mobile"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4">
              <Link href="#contact" onClick={closeMenu}>
                <Button className="w-full">
                  {siteConfig.cta.primary}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}