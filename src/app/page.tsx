import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import AiToolSuggester from '@/components/sections/ai-suggester';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

async function getGithubProjects(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/girishlade111/repos?sort=updated&per_page=6', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!res.ok) {
      console.error('Failed to fetch GitHub repos:', res.statusText);
      return [];
    }
    const data: Repo[] = await res.json();
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export default async function Home() {
  const repos = await getGithubProjects();

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects repos={repos} />
        <AiToolSuggester />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
