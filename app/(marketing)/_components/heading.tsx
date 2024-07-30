"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 mx-auto">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-700">
        Capture, Collaborate, Conquer. Welcome to{" "}
        <span className="underline">BroncoNotes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        A collaborative, note-taking platform designed specifically for Santa
        Clara University students to organize and share notes to excel in their
        academic journey.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button className="bg-red-700" asChild>
          <Link href="/documents">
            Enter BroncoNotes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get BroncoNotes free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
