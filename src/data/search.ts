export interface SearchEntry {
  title: string;
  path: string;
  description: string;
}

export const searchIndex: SearchEntry[] = [
  { title: "Home", path: "/", description: "Landing page" },
  { title: "Components", path: "/components", description: "All available UI components" },
  { title: "Button", path: "/docs/components/button", description: "Button for cta, outline, and link" },
  { title: "Sidebar", path: "/docs/components/sidebar", description: "Collapsible sidebar navigation" },
  { title: "Tabs", path: "/docs/components/tabs", description: "Tabbed content panels" },
  { title: "Breadcrumbs", path: "/docs/components/breadcrumbs", description: "Navigation breadcrumb trail" },
  { title: "Alert", path: "/docs/components/alert", description: "Alert messages with variants" },
  { title: "Card", path: "/docs/components/card", description: "Content card with variants" },
  { title: "Modal", path: "/docs/components/modal", description: "Modal dialog overlay" },
];
