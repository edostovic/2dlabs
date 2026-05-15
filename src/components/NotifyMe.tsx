"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bell } from "lucide-react";

export function NotifyMe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;

    setSaving(true);

    // Store to localStorage
    const existing = JSON.parse(localStorage.getItem("2dlabs_notify_emails") || "[]");
    existing.push({ email: email.trim(), timestamp: new Date().toISOString() });
    localStorage.setItem("2dlabs_notify_emails", JSON.stringify(existing));

    // Simulate a brief delay for UX
    setTimeout(() => {
      setSaving(false);
      setSubmitted(true);
    }, 500);
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          We&apos;ll let you know when Depths of Eternity launches. No spam, just the good stuff.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Badge variant="accent" className="mb-4">
        Stay Updated
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get notified when <span className="text-primary">Depths of Eternity</span> launches
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        Be the first to know about releases, updates, and new games from 2DLabs.
        No spam, unsubscribe anytime.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-12"
        />
        <Button
          type="submit"
          variant="default"
          size="lg"
          disabled={saving}
          className="h-12 whitespace-nowrap"
        >
          {saving ? (
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
              Saving...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Bell size={18} />
              Notify Me
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
