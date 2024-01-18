"use client";

import { MenuRounded, CloseRounded } from "@mui/icons-material"
import { useRef, useState } from "react"
import { data } from "./data";
import Link from "next/link";

export const NavBar = () => {
    const menuRef = useRef<HTMLMenuElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleMenu = () => {
        if (!menuRef.current) return;

        const isHidden = !menuRef.current.classList.contains("translate-y-[calc(100%+80px)]");

        isHidden
            ? menuRef.current.classList.add("translate-y-[calc(100%+80px)]")
            : menuRef.current.classList.remove("translate-y-[calc(100%+80px)]");

        setIsActive(prev => !prev);
    }

    return (
        <>
            <nav className="relative w-full h-20 px-10 py-5 flex justify-between items-center bg-white z-50">
                <button onClick={handleMenu} className="relative h-full aspect-square">
                    {
                        isActive
                            ? <CloseRounded className="text-3xl" />
                            : <MenuRounded className="text-3xl" />
                    }
                </button>
            </nav>
            <menu ref={menuRef} className="absolute w-full h-[calc(100%-80px)] -top-[calc(100%-80px)] flex flex-col bg-white z-40 duration-300 ease-in-out">
                {
                    data.map(({ label, href, newPage }) => {
                        return (
                            <li>
                                <Link href={href} target={newPage ? }>
                                    {label}
                                </Link>
                            </li>
                        )
                    })
                }
            </menu>
        </>
    )
}