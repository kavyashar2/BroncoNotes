"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-700">
        Capture, Collaborate, Conquer. Welcome to <span className="underline">BroncoNotes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        A collaborative, note-taking platform designed specifically for Santa Clara University students to organize and share notes to excel in their academic journey.
      </h3>
      <Button className="bg-red-700">
        Enter BroncoNotes
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  );
};
