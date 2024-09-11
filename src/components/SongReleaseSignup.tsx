"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import jsonp from "jsonp";
import { AlertCircle, Phone } from "lucide-react";
import { useState } from "react";
import SuccessMsg from "./SuccessMsg";

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

    const url =
      "https://hashtagobi.us19.list-manage.com/subscribe/post?u=4df1b380107ad91f9019eb9f9&amp;id=c4a4a06b53&amp;f_id=003457e4f0";
    jsonp(`${url}&EMAIL=${email}&FNAME=${name}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
      // do something with response
      // alert(msg);
    });
    console.log("Submitted:", { name, email });
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-background border-black  border rounded-lg shadow-lg">
      {!submitted ? (
        <>
          <h2 className="text-xl font-bold mb-4 text-center text-black">
            Sign up for the release
          </h2>
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

              <div aria-hidden="true" className="hidden">
                <input
                  type="text"
                  name="b_4df1b380107ad91f9019eb9f9_c4a4a06b53"
                  value=""
                />
              </div>
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
        </>
      ) : (
        <>
          <SuccessMsg />
          <div className="mt-10 text-center animate-pulse">
            <a
              className="underline gap-4 flex items-center justify-center"
              href="tel:+447716483233"
            >
              <Phone />
              +44 7716 483233
            </a>
          </div>
        </>
      )}
    </div>
  );
}
