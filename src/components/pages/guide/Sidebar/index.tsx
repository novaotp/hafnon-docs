"use client";

import Link from "next/link";
import { sidebarData } from "./data";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="relative left-0 w-60 h-full border-r border-gray-200">
            <menu className="fixed py-20">
                {
                    sidebarData.map(({ name, links }, index) => {
                        return (
                            <div key={index} className="mb-5">
                                <h2 className="font-bold mb-3">{name}</h2>
                                <ul>
                                    {
                                        links.map(({ href, label }, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={href} className={`text-sm font-medium ${pathname === href ? "text-purple-500" : "text-gray-500 hover:text-gray-700"}`}>
                                                        {label}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </menu>
        </aside>
    )
}