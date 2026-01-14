"use client";

import { useState } from "react";
import Link from "next/link";
import AppLogo from "./AppLogo";
import { X, Menu, Home, Globe } from "lucide-react";
import { Button } from "./ui/button";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Header() {
  const handleConnectWallet = async () => {
    alert("Connect Wallet clicked");
    console.log("Celo selected");
  };

  const handleCeloSelect = async () => {
    alert("Celo selected");
    console.log("Celo selected");
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-[1000] w-full border-b-1 border-[#003B3E]/50 bg-[#010F10] backdrop-blur-xl">
        <div className="mx-auto flex h-(--navbar-h) w-full max-w-7xl items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg)">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Home Link And Wallet Connect Button */}
            <div className="hidden items-center gap-4 md:flex">
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
                onClick={handleConnectWallet}
              >
                Connect
              </Button>
            </div>

            {/* Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer hover:bg-black md:hidden"
                >
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="z-60 max-h-90 overflow-y-auto rounded-t-3xl border-t border-(--green-border)/50 bg-(--green-bg) p-6 backdrop-blur-2xl">
                <div className="absolute top-8 right-6">
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer rounded-full p-2 text-(--white) transition-all duration-300 ease-in-out hover:bg-(--green-bg) hover:text-(--white) md:hidden"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </DrawerClose>
                </div>
                <Link
                  href="/"
                  className="flex w-fit items-center gap-4 pt-8 text-lg font-bold text-(--white) lg:text-xl"
                >
                  <Home className="h-6 w-6" />
                  Home
                </Link>
                <div className="mx-auto w-full max-w-md">
                  <div className="font-orbitran flex w-full flex-col items-center justify-center gap-6 p-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-20 w-full rounded-md border-1 border-(--green-border)/50 bg-transparent px-6 py-3 text-xl text-(--cyan) shadow-md backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-(--green-border)/70 hover:bg-transparent hover:text-(--cyan)"
                      onClick={handleCeloSelect}
                    >
                      <Globe className="h-12 w-12" />
                      Celo
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-20 w-full rounded-md border-1 border-(--cyan) bg-(--cyan)/20 px-6 py-3 text-xl text-(--cyan) shadow-md backdrop-blur-xl transition-all duration-300 ease-in-out hover:bg-(--cyan)/30 hover:text-(--cyan)"
                      onClick={handleConnectWallet}
                    >
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>
    </>
  );
}
