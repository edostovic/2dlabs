"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    // Simulate form submission (placeholder — wire up to your backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="What's this about?"
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what's on your mind..."
          required
          className="w-full min-h-[140px]"
        />
      </div>
      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={sending}
        className="w-full sm:w-auto"
      >
        {sending ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send size={16} />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
