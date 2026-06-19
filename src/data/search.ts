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
  { title: "Button", path: "/docs/components/button", description: "Button for CTA, outline, and link" },
  { title: "Sidebar", path: "/docs/components/sidebar", description: "Collapsible sidebar navigation" },
  { title: "Tabs", path: "/docs/components/tabs", description: "Tabbed content panels" },
  { title: "Breadcrumbs", path: "/docs/components/breadcrumbs", description: "Navigation breadcrumb trail" },
  { title: "Alert", path: "/docs/components/alert", description: "Alert messages with variants" },
  { title: "Card", path: "/docs/components/card", description: "Content card with multiple layout variants" },
  { title: "Dropdown", path: "/docs/components/dropdown", description: "Toggleable menu with click or hover trigger" },
  { title: "Accordion", path: "/docs/components/accordion", description: "Expandable content panels" },
  { title: "Bento Grid", path: "/docs/components/bento-grid", description: "Asymmetric grid layout with varied tile sizes" },
  { title: "Modal", path: "/docs/components/modal", description: "Modal dialog overlay" },
  { title: "Mockup", path: "/docs/components/mockup", description: "Device frames for laptop, mobile, and browser" },
];
