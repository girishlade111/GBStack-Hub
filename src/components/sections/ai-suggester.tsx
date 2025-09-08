import AiToolSuggesterClient from './ai-suggester-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

const AiToolSuggester = () => {
  return (
    <section id="ai-suggester" className="py-12 md:py-24 lg:py-32">
      <div className="container max-w-4xl px-4 md:px-6">
        <Card className="bg-primary text-primary-foreground shadow-xl">
          <CardHeader className="flex flex-row items-start gap-4">
             <div className="rounded-full bg-primary-foreground/10 p-3">
                <Bot className="h-8 w-8 text-primary-foreground" />
             </div>
             <div className="space-y-1.5">
                <CardTitle className="font-headline text-3xl">AI Tool Idea Generator</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Curious what to build next? This AI analyzes daily trends in tech, crypto, and AI to suggest profitable niches for new tools.
                </CardDescription>
             </div>
          </CardHeader>
          <CardContent>
            <AiToolSuggesterClient />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AiToolSuggester;
