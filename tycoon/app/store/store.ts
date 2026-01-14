import { Home, Info, Gamepad2, Users, MailPlus, Twitter, Github, Disc, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

// Header Links
export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Gameplay",
    href: "/gameplay",
    icon: Gamepad2,
  },
  {
    label: "Community",
    href: "/community",
    icon: Users,
  },
  {
    label: "Join Waitlist",
    href: "/join-waitlist",
    icon: MailPlus,
  },
];

export const sideNavLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Gameplay",
    href: "/gameplay",
    icon: Gamepad2,
  },
  {
    label: "Community",
    href: "/community",
    icon: Users,
  },
  {
    label: "Join Waitlist",
    href: "/join-waitlist",
    icon: MailPlus,
  },
];

// Footer Links
export const supportLinks: NavLink[] = [
  { label: "Help center", href: "/contact#help" },
  { label: "Feedback", href: "/contact#feedback" },
  { label: "Tweet Us", href: "/contact#tweet" },
];

export const footer2Links: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy#privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Legal", href: "/privacy" },
  { label: "Site Map", href: "/" },
];


// SocialLinks 

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  color?: string; // Tailwind hover color classes
}

export const socialLinks: SocialLink[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/yourhandle",
    icon: Twitter,
    color: "hover:text-sky-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourrepo",
    icon: Github,
    color: "hover:text-neutral-800 dark:hover:text-neutral-200",
  },
  {
    label: "Discord",
    href: "https://discord.gg/yourinvite",
    icon: Disc,
    color: "hover:text-indigo-500",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@yourchannel",
    icon: Youtube,
    color: "hover:text-red-500",
  },
];

