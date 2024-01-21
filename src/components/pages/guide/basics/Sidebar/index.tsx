"use client";

import Link from "next/link";
import { basicsData } from "./data";

const Chapter = ({ title, links }: { title: string, links: { href: string, label: string }[] }) => {
    return (
        <div>
            <h2 className="font-bold">{title}</h2>
            <ul>
                {
                    links.map(({ href, label }, index) => {
                        return (
                            <li key={index}>
                                <Link href={href}>{label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <aside className="relative w-96 h-full">
            <Chapter title="Basics" links={basicsData} />
        </aside>
    )
}