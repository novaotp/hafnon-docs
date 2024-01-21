"use client";

import Link from "next/link";
import { data } from "./data";

export const DesktopNavbar = () => {
    return (
        <div className="hidden fixed w-full h-[60px] lg:flex justify-center border-b border-gray-200 z-50 bg-white">
            <nav className="relative w-full max-w-7xl h-full py-5 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl h-full flex items-center">
                    Hafnon
                </Link>
                <menu className="relative flex">
                    {
                        data.map(({ label, href, newPage }, index) => {
                            return (
                                <li key={index} className="mx-5">
                                    <Link href={href} target={newPage ? "_blank" : "_self"} className="py-1 hover:border-b-2 hover:border-black">
                                        {label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </menu>
            </nav>
        </div>
    )
}