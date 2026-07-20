import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/constants/site';
import { Container } from '@/components/shared/container';

const navigation = [
    { label: 'Início', href: '#' },
    { label: 'Serviços', href: '#services' },
    { label: 'Processo', href: '#process' },
    { label: 'Contato', href: '#contact' },
];

export function Header() {
    return (
        <header className="border-b">
            <Container>
                <div className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src={siteConfig.company.logo}
                        alt={siteConfig.company.name}
                        width={220}
                        height={70}
                        priority
                        className="h-auto w-auto max-h-14"
                    />
                </Link>

                <nav className="flex items-center gap-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Button>{siteConfig.cta.primary}</Button>
            </div>
            </Container>
        </header>
    );
}