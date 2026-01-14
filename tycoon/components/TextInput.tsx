import React, { forwardRef } from "react";
import { Input } from "./ui/input";
import { LucideIcon } from "lucide-react";

export type TextInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  required?: boolean;
  error?: string;
  icon?: LucideIcon;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label = "Text", required = false, className = "", error, icon: Icon, ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>

        <label className="flex items-center gap-1 text-sm font-bold font-medium text-gray-300">
          {label}
          {required && <span className="text-(--input-error-red)">*</span>}
        </label>

        <div className="relative">
          {Icon && (
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Icon size={18} className="text-(--cyan)" />
            </div>
          )}

          <Input
            ref={ref}
            type="text"
            aria-label={label}
            className={`h-14 w-full cursor-pointer rounded-2xl border-1 bg-gray-800/50 py-4 pr-5 pl-12 text-lg text-white transition-all placeholder:text-sm placeholder:text-gray-300 hover:border-cyan-500/70 hover:bg-gray-800/70 focus:cursor-text focus:border-(--cyan) focus:bg-gray-800/80 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.4)] focus:ring-1 focus:ring-cyan-400/30 focus:outline-none ${
              error ? "border-(--input-error-red)" : "border-cyan-700/50"
            }`}
            {...props}
          />
        </div>

        {error && <p className="text-sm text-(--input-error-red)">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
