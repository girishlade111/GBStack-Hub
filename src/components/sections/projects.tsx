import type { Repo } from '@/app/page';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, GitFork, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const featuredProjects = [
  {
    title: "GBStack",
    description: "My personal brand and platform for AI-integrated developer tools. A central hub for free, useful tools designed to improve developer workflows and productivity.",
    image: "https://picsum.photos/600/400?random=1",
    imageHint: "abstract code",
    link: "https://github.com/girishlade111",
    tags: ["Branding", "AI", "Developer Tools"],
  },
  {
    title: "AI Website Builder",
    description: "Inspired by bolt.new, this tool uses the Gemini API to generate and stream live code for websites. Features include a dual editor/preview, prompt history, and more.",
    image: "https://picsum.photos/600/400?random=2",
    imageHint: "website builder interface",
    link: "https://github.com/girishlade111",
    tags: ["Gemini API", "React", "Live Streaming"],
  },
  {
    title: "Multi-LLM AI Agent",
    description: "A custom AI agent built to leverage multiple LLMs like DeepSeek, Mistral, and Gemini. This project explores advanced agentic workflows and prompt engineering techniques.",
    image: "https://picsum.photos/600/400?random=3",
    imageHint: "ai agent network",
    link: "https://github.com/girishlade111",
    tags: ["AI Agent", "OpenRouter", "LLM"],
  },
];

const ProjectCard = ({ repo }: { repo: Repo }) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <CardTitle className="font-headline text-xl">{repo.name}</CardTitle>
      <CardDescription>{repo.description || "No description provided."}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      {repo.language && (
        <span className="inline-block bg-accent/10 text-accent px-2 py-1 text-xs font-semibold rounded-full">
          {repo.language}
        </span>
      )}
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div className="flex gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          <span>{repo.forks_count}</span>
        </div>
      </div>
      <Button variant="ghost" size="sm" asChild>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const Projects = ({ repos }: { repos: Repo[] }) => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              My Work
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the key projects I've been working on.
            </p>
          </div>
        </div>
        <div className="grid gap-8 py-12 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={project.imageHint}
                    />
                </CardContent>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <Button variant="link" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
    
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
        
        {repos.length > 0 && (
          <>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mt-16">
              <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                More From GitHub
              </h3>
            </div>
            <div className="grid gap-4 py-12 md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
