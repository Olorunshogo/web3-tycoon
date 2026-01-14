import React from "react";
import { forwardRef } from "react";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

export type EmailInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: boolean | string;
};

export const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ label = "Email", required = false, className = "", error, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <label className="flex items-center gap-1 text-sm font-bold font-medium text-gray-300">
          {label}
          {required && <span className="text-(--input-error-red)">*</span>}
        </label>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Mail size={22} className="text-(--cyan)" />
          </div>

          <Input
            ref={ref}
            type="email"
            aria-label={label}
            className={`w-full border-1 cursor-pointer focus:cursor-text hover:border-cyan-500/70 h-14 rounded-2xl border-1 bg-gray-800/50 py-4 pr-5 pl-12 text-lg text-white placeholder:text-gray-300 placeholder:text-sm transition-all hover:bg-gray-800/70 focus:border-(--cyan) focus:bg-gray-800/80 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.4)] focus:ring-1 focus:ring-cyan-400/30 focus:outline-none ${
              error ? "border-(--input-error-red)" : "border-cyan-700/50"
            }`}
            {...props}
          />
        </div>

        {typeof error === "string" && <p className="text-sm text-(--input-error-red)">{error}</p>}
      </div>
    );
  },
);

EmailInput.displayName = "EmailInput";
