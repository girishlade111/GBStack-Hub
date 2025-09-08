import Link from 'next/link';
import { Instagram, Linkedin, Github, Codepen } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

const socialLinks = [
  {
    href: 'https://www.instagram.com/girish_lade_/',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/girish-lade-075bba201/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/girishlade111',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://codepen.io/Girish-Lade-the-looper',
    icon: Codepen,
    label: 'CodePen',
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-headline text-xl font-bold text-primary">GBStack Hub</span>
        </Link>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button key={href} variant="ghost" size="icon" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
