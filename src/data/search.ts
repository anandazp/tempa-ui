import { components, type ComponentInfo } from "./components";

export interface SearchEntry {
  title: string;
  path: string;
  description: string;
}

export const searchIndex: SearchEntry[] = [
  { title: "Home", path: "/", description: "Landing page" },
  { title: "Components", path: "/components", description: "All available UI components" },
  { title: "Introduction", path: "/docs", description: "About Tempa UI" },
  { title: "Installation", path: "/docs/installation", description: "Getting started guide" },
  ...components.map((c: ComponentInfo) => ({
    title: c.label,
    path: `/docs/components${c.href}`,
    description: c.description,
  })),
];
