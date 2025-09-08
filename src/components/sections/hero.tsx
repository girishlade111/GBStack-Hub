import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="container max-w-7xl text-center">
        <p className="text-base font-semibold text-accent">Girish Lade</p>
        <h1 className="font-headline mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Developer, Designer & AI Builder
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
          Driven by innovation and utility, I build AI-powered tools for developers, design modern user experiences, and bring complex ideas to life through code.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
