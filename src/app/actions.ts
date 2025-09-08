'use server';

import { suggestProfitableAiTools } from '@/ai/flows/suggest-profitable-ai-tools';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  // Here you would typically send an email.
  // For this example, we'll just log the data to the console.
  console.log('New contact form submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


export async function getAiToolSuggestion() {
  try {
    const suggestion = await suggestProfitableAiTools({});
    return { success: true, suggestion };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get suggestion. Please try again.' };
  }
}
