"use client";

import Link from "next/link";
import AppLogo from "./AppLogo";
import { PhoneIcon, MailIcon, MapPin, type LucideIcon } from "lucide-react";


let devYear: number = 2024;
let currentYear: number = new Date().getFullYear();

export default function Footer() {
  const displayYear = currentYear > devYear ? `${devYear} - ${currentYear}` : `${devYear}`;

  return (
    <footer className="font-openSans relative">
      <div className="mx-auto grid h-full w-full max-w-7xl gap-8 rounded-lg border-3 border-(--border-gray) px-(--section-px) py-(--section-py) sm:px-(--section-px-sm) sm:py-(--section-py-sm) lg:px-(--section-px-lg) lg:py-(--section-py-lg)">
        {/* Footer 1 */}
        <div className="flex flex-col items-center justify-between gap-2 py-2 text-(--text-colour) lg:flex-row">
          <p className="flex items-center gap-1 text-sm lg:text-lg">
            <span>&copy; Copyright </span>
            <span>{displayYear}</span>
            <span>All Rights Reserved</span>
          </p>

        </div>
      </div>
    </footer>
  );
}
