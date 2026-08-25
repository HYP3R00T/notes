import placeholder from "@/assets/placeholder.png"
import type { NavItem, SiteConfig, SocialLink } from "@/lib/types"

export const SITE: SiteConfig = {
  repo: "https://github.com/HYP3R00T/notes",
  title: "Notes",
  description: "Working notes on mathematics, physics, computer science, and the ideas that connect them.",
  image: placeholder,
  imageAlt: "Notes on mathematics, physics, and computer science",
  contentType: "website",
  twitterHandle: "@HYP3R00T",
  author: "Rajesh Das",
  lang: "en",
}

export const navItems: NavItem[] = []

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
