import { components } from "./components";

export const siteData = {
  brand: "Tempa UI",
  tagline: "Simple UI for Lazy Developers",
  description:
    "A collection of components that you can customize. Built with Astro, Typescript, and Tailwind CSS. Free & open source.",
  navigation: [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/docs/components" },
  ],
  sideNavigationDocs: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Components", href: "/docs/components" },
  ],
  componentsList: components.map(({ label, href }) => ({ label, href })),
};
