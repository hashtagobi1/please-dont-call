"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SongReleaseSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Please fill in all fields");
      return;
    }
    // Here you would typically send the data to your backend
    console.log("Submitted:", { name, email });
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-background border-black  border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-black">
        Sign up for the release
      </h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-black" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label className="text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Keep Me Updated
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
      ) : (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            {"Thank you for signing up! We'll keep you updated on the release."}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
