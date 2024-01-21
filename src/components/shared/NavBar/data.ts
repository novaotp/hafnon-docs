interface LinkProps {
    href: string;
    label: string;
    newPage: boolean;
}

export const data: LinkProps[] = [
    {
        label: "Docs",
        href: "/guide",
        newPage: false
    },
    {
        label: "Playground",
        href: "/play",
        newPage: false
    },
    {
        label: "About",
        href: "/about",
        newPage: false
    },
    {
        label: "See on GitHub",
        href: "https://github.com/novaotp/hafnon-docs",
        newPage: true
    }
];