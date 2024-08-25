"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  const { isSignedIn, isLoaded, user } = useUser();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const allowedDomain = "@scu.edu";
      const emailAddresses = user?.emailAddresses || [];
      const isValidEmail = emailAddresses.some((emailObj) =>
        emailObj.emailAddress.endsWith(allowedDomain),
      );

      setIsAuthorized(isValidEmail);
    }
  }, [isSignedIn, isLoaded, user]);

  if (isLoaded && isSignedIn && !isAuthorized) {
    return (
      <div
        className={cn(
          "z-20 bg-background fixed top-0 flex items-center w-full p-6",
          scrolled && "border-b shadow-sm",
        )}
      >
        <div className="ml-4 flex-1" />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          <p className="text-red-700 font-medium">Access Denied</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "z-20 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="ml-4 flex-1" />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button className="bg-red-700" size="sm">
                Get BroncoNotes Free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter BroncoNotes</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
