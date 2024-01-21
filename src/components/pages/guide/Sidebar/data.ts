interface SidebarLinkGroup {
    name: string;
    links: { href: string, label: string }[];
}

export const sidebarData: SidebarLinkGroup[] = [
    {
        name: 'Getting Started',
        links: [
            { label: "Introduction", href: "/guide" },
            { label: "Quick Start", href: "/guide/quick-start" }
        ]
    },
    {
        name: 'Essentials',
        links: [
            { label: "Basics", href: "/guide/basics" },
            { label: "Advanced", href: "/guide/advanced" }
        ]
    },
]