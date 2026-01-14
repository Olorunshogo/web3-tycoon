"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode; // Default text when not loading (e.g. "Sign Up")
  className?: string;
}

export const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (
    {
      loading = false,
      loadingText = "Joining Waitlist...",
      children = "Join",
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        type="submit"
        disabled={loading || disabled}
        className={cn(
          "relative h-16 text-(--white) text-lg lg:text-xl overflow-hidden rounded-lg border border-cyan-400/60 bg-gradient-to-b from-cyan-600 to-cyan-800 px-8 py-3 font-bold shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:from-cyan-500 hover:to-cyan-700 hover:shadow-[0_0_15px_4px_rgba(0,255,255,0.5),0_8px_25px_2px_rgba(0,180,255,0.7)] focus:shadow-[0_0_25px_8px_rgba(0,255,240,0.6)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          (loading || disabled) && "cursor-not-allowed opacity-70",
          className,
        )}
        {...props}
      >
        {loading ? loadingText : children}
      </Button>
    );
  },
);

SubmitButton.displayName = "SubmitButton";
