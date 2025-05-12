
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { User, Lock, LogIn } from "lucide-react"; // Changed Mail to User

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { useToast } from "@/hooks/use-toast";

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }), // Changed email to username
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

export function LoginForm() {
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "", // Changed email to username
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Login data:", values);
    toast({
      title: "Login Submitted",
      description: "Check the console for form data. In a real app, this would log you in.",
    });
    // form.reset(); // Optionally reset form
  }

  return (
    <Card className="w-full max-w-md shadow-xl bg-pink-500/[.10] backdrop-blur-md border-border">
      <CardHeader className="items-center text-center">
        <Logo className="mb-4 h-10 w-auto" />
        <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
        <CardDescription>Log in to explore the space.</CardDescription> {/* Changed AuthFlow to STAR-LORD & Sign in to Log in */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username" // Changed name from email to username
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel> {/* Changed label */}
                   <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /> {/* Changed icon */}
                      <Input type="text" placeholder="Enter your username" {...field} className="pl-10 bg-background/70" /> {/* Changed type and placeholder */}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                   <div className="relative">
                      <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input type="password" placeholder="••••••••" {...field} className="pl-10 bg-background/70" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                'Logging In...'
              ) : (
                 <>
                   <LogIn className="mr-2 h-5 w-5" />
                   Login
                 </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

