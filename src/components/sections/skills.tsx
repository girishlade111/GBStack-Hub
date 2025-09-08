import { Code2, Palette, Bot, Database, Server, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Modern Aesthetics'],
  },
  {
    title: 'AI & Data Science',
    icon: Bot,
    skills: ['Gemini API', 'OpenRouter', 'DeepSeek', 'Mistral', 'Prompt Engineering', 'Genkit'],
  },
  {
    title: 'Backend & Platforms',
    icon: Server,
    skills: ['Node.js', 'Firebase', 'Vercel', 'SQL', 'NoSQL'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              My Skills
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              My Tech Stack
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I leverage a versatile set of tools and technologies to build innovative solutions from concept to deployment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <Card key={category.title} className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="rounded-full bg-accent/10 p-3">
                  <category.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-foreground/80">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
