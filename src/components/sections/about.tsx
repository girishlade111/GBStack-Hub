import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const aboutPoints = [
  "Full-Stack Web & App Developer",
  "UI/UX Designer with a modern aesthetic",
  "AI Tools Maker & Prompt Engineer",
  "Data Science Enthusiast",
  "Creator of GBStack AI Dev Tools",
  "Practical, forward-thinking problem solver"
];

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 max-w-7xl">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">About Me</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            A Mission to Create
          </h2>
          <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a multi-skilled developer with a passion for building useful, high-quality applications. My work spans web development, AI, data science, and UX/UI design, with a mission to create free, AI-powered tools for developers under my brand, GBStack. I'm methodical, curious, and always thinking ahead.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-foreground/80">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
            <Card className="w-full max-w-sm overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/600"
                  alt="Girish Lade"
                  width={600}
                  height={600}
                  className="aspect-square object-cover"
                  data-ai-hint="professional developer portrait"
                />
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
