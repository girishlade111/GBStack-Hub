'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

const initialState = {
  message: '',
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Sending...' : 'Send Message'}
      {!pending && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );
}

const Contact = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Success!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container max-w-4xl px-4 md:px-6">
        <Card>
          <CardHeader className="text-center">
            <div className="inline-block mx-auto rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Contact
            </div>
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary mt-2">
              Get in Touch
            </CardTitle>
            <CardDescription className="mx-auto max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pt-2">
              Have a project in mind, want to collaborate, or just say hi? Drop me a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                   {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                   {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} />
                 {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message}</p>}
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
