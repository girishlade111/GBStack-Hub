import { Instagram, Linkedin, Github, Codepen, Mail } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
    { href: 'https://www.instagram.com/girish_lade_/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/girish-lade-075bba201/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/girishlade111', icon: Github, label: 'GitHub' },
    { href: 'https://codepen.io/Girish-Lade-the-looper', icon: Codepen, label: 'CodePen' },
    { href: 'mailto:girishlade111@gmail.com', icon: Mail, label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="bg-muted/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 max-w-7xl sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Girish Lade. All Rights Reserved.
        </p>
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
    </footer>
  );
};

export default Footer;
