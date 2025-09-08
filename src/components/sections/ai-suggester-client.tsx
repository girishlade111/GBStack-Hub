"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getAiToolSuggestion } from '@/app/actions';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface Suggestion {
  title: string;
  explanation: string;
}

const parseSuggestion = (text: string): Suggestion[] => {
  if (!text) return [];
  const suggestions: Suggestion[] = [];
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  let currentSuggestion: Partial<Suggestion> | null = null;

  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s*\*\*(.*?)\*\*/);
    if (match) {
      if (currentSuggestion && currentSuggestion.title) {
        suggestions.push(currentSuggestion as Suggestion);
      }
      currentSuggestion = { title: match[2].trim(), explanation: '' };
    } else if (currentSuggestion) {
      currentSuggestion.explanation = (currentSuggestion.explanation + ' ' + line.trim()).trim();
    }
  }

  if (currentSuggestion && currentSuggestion.title) {
    suggestions.push(currentSuggestion as Suggestion);
  }

  return suggestions.length > 0 ? suggestions : [{ title: "Suggestion Result", explanation: text }];
};


const AiToolSuggesterClient = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    setSuggestions([]);
    const result = await getAiToolSuggestion();
    if (result.success && result.suggestion) {
      setSuggestions(parseSuggestion(result.suggestion));
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <Button onClick={handleClick} disabled={loading} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Analyzing Trends...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-5 w-5" />
            Suggest Profitable Niches
          </>
        )}
      </Button>

      {error && <p className="text-destructive-foreground text-center">{error}</p>}
      
      {suggestions.length > 0 && (
        <div className="grid gap-4 md:grid-cols-1 pt-4">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="bg-primary-foreground text-primary animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
              <CardHeader>
                <CardTitle className="font-headline text-lg">{suggestion.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{suggestion.explanation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AiToolSuggesterClient;
