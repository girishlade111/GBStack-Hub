'use server';
/**
 * @fileOverview AI-powered tool suggestion flow.
 *
 * - suggestProfitableAiTools - A function that suggests potentially profitable niches for new AI tools.
 * - SuggestProfitableAiToolsInput - The input type for the suggestProfitableAiTools function (empty object).
 * - SuggestProfitableAiToolsOutput - The return type for the suggestProfitableAiTools function (string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProfitableAiToolsInputSchema = z.object({});
export type SuggestProfitableAiToolsInput = z.infer<typeof SuggestProfitableAiToolsInputSchema>;

const SuggestProfitableAiToolsOutputSchema = z.string();
export type SuggestProfitableAiToolsOutput = z.infer<typeof SuggestProfitableAiToolsOutputSchema>;

export async function suggestProfitableAiTools(input: SuggestProfitableAiToolsInput): Promise<SuggestProfitableAiToolsOutput> {
  return suggestProfitableAiToolsFlow(input);
}

const getTopNewsStories = ai.defineTool({
  name: 'getTopNewsStories',
  description: 'Retrieves the top news stories related to tech, crypto, and AI from today.',
  inputSchema: z.object({}),
  outputSchema: z.string(),
}, async () => {
  // TODO: Implement the actual retrieval of top news stories from a reliable source.
  // This is a placeholder implementation.
  return `{
      "tech": ["New AI model released", "Advancements in quantum computing"],
      "crypto": ["Bitcoin price surge", "Ethereum upgrade successful"],
      "ai": ["AI ethics debate", "AI in healthcare advancements"]
    }`;
});

const prompt = ai.definePrompt({
  name: 'suggestProfitableAiToolsPrompt',
  tools: [getTopNewsStories],
  input: {schema: SuggestProfitableAiToolsInputSchema},
  output: {schema: SuggestProfitableAiToolsOutputSchema},
  prompt: `You are an AI-powered tool that analyzes current trends in tech, crypto, and AI and suggests potentially profitable niches for new AI tools. You will retrieve the top news stories related to tech, crypto, and AI using the getTopNewsStories tool.

Based on these news stories, suggest 3 potentially profitable niches for new AI tools that the user can build. Provide a brief explanation for each suggestion.

News stories: {{ await tools.getTopNewsStories() }}`,
});

const suggestProfitableAiToolsFlow = ai.defineFlow(
  {
    name: 'suggestProfitableAiToolsFlow',
    inputSchema: SuggestProfitableAiToolsInputSchema,
    outputSchema: SuggestProfitableAiToolsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
