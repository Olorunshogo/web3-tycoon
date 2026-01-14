"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "./AppLogo";
import { X, Menu, Home } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { sideNavLinks } from "@/app/store/store";

export default function Header() {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const sidebarVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants: Variants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b-1 border-(--cyan) backdrop-blur-sm">
        <div className="mx-auto flex h-(--navbar-h) w-full max-w-7xl items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg)">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-md border-1 border-(--cyan) px-4 py-2 shadow-md backdrop-blur-md"
            >
              <Home className="h-5 w-5 text-(--white)" />
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="w-fit cursor-pointer bg-(--cyan) px-6 py-3 text-black"
              onClick={() => setIsSidebarOpen(true)}
            >
              Connect
            </Button>

            {/* Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer hover:bg-black sm:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-white/20 backdrop-blur-md lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.aside
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 z-50 h-full w-full transform bg-black/95 shadow-lg transition-all duration-300 ease-in-out sm:w-1/2 lg:hidden lg:w-1/3"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={sidebarRef}
                className="flex h-full flex-col gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex h-full flex-col gap-4">
                  {/* Header */}
                  <div className="flex h-(--navbar-h) w-full items-center justify-between gap-4 p-3 backdrop-blur-sm">
                    <div className="relative flex items-center gap-2">
                      <Link
                        href="/"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          console.log(isSidebarOpen);
                        }}
                      >
                        <AppLogo />
                      </Link>
                    </div>

                    <Button
                      variant="ghost"
                      className="flex w-fit items-center justify-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-(--input-error-red)"
                      onClick={() => {
                        setIsSidebarOpen(false);
                        console.log(isSidebarOpen);
                      }}
                    >
                      <X className="h-6 w-6 text-white hover:text-red-700" />
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="w-full p-4">
                    <ul className="grid w-full grid-cols-1 gap-6">
                      {sideNavLinks.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;
                        return (
                          <li key={href}>
                            <Link
                              href={href}
                              className={`${
                                isActive
                                  ? "group bg-[#E8EEE9] text-(--heading-colour)"
                                  : "text-(--text-colour) hover:bg-[#E8EEE9]"
                              } flex items-center gap-4 border-b border-(--border-gray) p-4 text-xl`}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              {Icon && (
                                <Icon
                                  className={`h-5 w-5 text-(--debridger-green-dark) transition-all duration-300 ease-in-out ${isActive ? "fill-current" : "group-hover:fill-current"}`}
                                />
                              )}
                              <span>{label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* Authentication Links */}
                  {/* <div className="flex flex-wrap items-center gap-4 p-4">
                    <SecondaryLink href="/signin" label="Login" className="" />

                    <PrimaryLink href="/signup" label="Sign Up" />
                  </div> */}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
