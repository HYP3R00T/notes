import placeholder from "@/assets/placeholder.png"
import type { NavItem, SiteConfig, SocialLink } from "@/lib/types"

export const SITE: SiteConfig = {
  repo: "https://github.com/HYP3R00T/devcontainer-astro-template",
  title: "Astro Template",
  description:
    "A reusable Astro starter with stronger layout primitives, and a cleaner foundation for content-driven projects.",
  image: placeholder,
  imageAlt: "Preview of the Astro template starter",
  contentType: "website",
  twitterHandle: "@HYP3R00T",
  lang: "en",
}

export const navItems: NavItem[] = [{ href: "/", label: "Home" }]

export const SOCIAL_LINKS = [
  {
    name: "github",
    href: "https://github.com/HYP3R00T",
    active: true,
    linkTitle: "Visit the GitHub profile",
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/in/rajesh-kumar-das",
    active: false,
    linkTitle: "Connect on LinkedIn",
  },
  {
    name: "mail",
    href: "mailto:hello@example.com",
    active: false,
    linkTitle: "Send an email",
  },
] satisfies SocialLink[]
