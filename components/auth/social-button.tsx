"use client";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface SocialButtonProps {
  children: React.ReactNode;
  first?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({ children, first }) => {
  const hiddenMessage = first
    ? "Not a bad choice"
    : "Hmmm good choice good choice";

  const handleSignIn = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <button
      onClick={() => handleSignIn(first ? "google" : "github")}
      className="group relative w-full md:w-3/4 bg-neutral-900 border border-neutral-400 rounded-md py-2 flex items-center justify-center space-x-2 hover:bg-teal hover:text-white hover:border-teal transition"
    >
      {children}
      <p
        className={`absolute ${
          first ? "right-0" : "left-0"
        } -z-10 group-hover:translate-y-8 opacity-0 group-hover:opacity-100 text-teal text-xs transition duration-200 ease-in`}
      >
        {hiddenMessage}
      </p>
    </button>
  );
};

export default SocialButton;
