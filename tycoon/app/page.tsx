"use client";

import { useState } from "react";
import { Sparkles, Wallet, AtSign } from "lucide-react";
import Image from "next/image";
import { TextInput } from "@/components/TextInput";
import { EmailInput } from "@/components/EmailInput";
import { SubmitButton } from "@/components/SubmitButton";
import { motion } from "framer-motion";

export default function Home() {
  const [form, setForm] = useState({
    email: "",
    walletAddress: "",
    telegramUsername: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    walletAddress: "",
    telegramUsername: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      walletAddress: "",
      telegramUsername: "",
    };
    let isValid = true;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.walletAddress.trim()) {
      newErrors.walletAddress = "Wallet address is required";
      isValid = false;
    }

    // Telegram is optional → no required check

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmitWaitlist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        email: form.email.trim(),
        walletAddress: form.walletAddress.trim(),
        telegramUsername: form.telegramUsername.trim() || null,
      };

      // TODO: Replace with your real API endpoint
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to join waitlist");
      }

      // Success
      alert(`Thanks for joining, future tycoon! We'll notify you at ${form.email}.`);

      // Reset form
      setForm({
        email: "",
        walletAddress: "",
        telegramUsername: "",
      });
    } catch (error: any) {
      console.error("Waitlist submission error:", error);
      alert(error.message || "Something went wrong. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-(--navbar-h)">
      {/* Background Image - fills the entire section */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-image.png"
          alt="Tycoon background"
          fill
          className="scale-105 -rotate-15 object-cover object-center brightness-[0.7] sm:scale-100 sm:-rotate-15"
          priority
          quality={85}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 -mt-(--navbar-h) flex min-h-screen flex-col items-center justify-center pt-20">
        <motion.div
          initial={{ scale: 0.92, y: 80, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="mx-auto h-full w-full max-w-xl rounded-md px-(--section-px) py-(--section-py) sm:px-(--section-px-sm) sm:py-(--section-py-sm) md:max-w-xl lg:max-w-2xl lg:px-(--section-px-lg) lg:py-(--section-py-lg)"
        >
          <form
            onSubmit={handleSubmitWaitlist}
            className="relative flex max-w-lg flex-col gap-6 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gray-900/80 p-8 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-10 w-10 text-(--cyan)" />
              </motion.div>

              <h1 className="font-manrope mx-auto flex-1 text-center text-4xl font-bold text-(--cyan) sm:text-5xl lg:text-6xl">
                JOIN TYCOON WAITLIST
              </h1>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <EmailInput
                name="email"
                label="Email Address"
                placeholder="damidolowo@gmail.com"
                required
                value={form.email}
                onChange={handleChange("email")}
                error={!!errors.email}
                autoComplete="email"
              />
              {errors.email && <p className="text-sm text-(--input-error-red)">{errors.email}</p>}
            </div>

            {/* Wallet Address */}
            <div className="flex flex-col gap-2">
              <TextInput
                name="walletAddress"
                label="Wallet Address"
                placeholder="0x1234...abcd"
                icon={Wallet}
                required
                value={form.walletAddress}
                onChange={handleChange("walletAddress")}
                error={errors.walletAddress}
              />
              {errors.walletAddress && (
                <p className="text-sm text-(--input-error-red)">{errors.walletAddress}</p>
              )}
            </div>

            {/* Telegram username */}
            <div className="flex flex-col gap-2">
              <TextInput
                name="telegramUsername"
                label="Telegram Username (optional)"
                placeholder="john_doe"
                icon={AtSign}
                value={form.telegramUsername}
                onChange={handleChange("telegramUsername")}
                error={errors.telegramUsername}
              />

              <div className="text-sm text-white">
                Enter your username <span className="font-bold">without</span> the @ — we'll add it
                for you
              </div>

              {errors.telegramUsername && (
                <p className="text-sm text-(--input-error-red)">{errors.telegramUsername}</p>
              )}
            </div>

            <SubmitButton disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </SubmitButton>

            <p className="text-center text-sm text-gray-300">
              We&apos;ll send you early access details soon. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
