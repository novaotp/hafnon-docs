"use client";

import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { useRef, useState } from "react";
import Link from "next/link";
import { data } from "./data";

export const NavBar = () => {
    const menuRef = useRef<HTMLMenuElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleMenu = () => {
        setIsActive(prev => !prev);
    }

    return (
        <>
            <nav className="relative w-full h-20 px-10 py-5 flex justify-between items-center bg-white z-50">
                <Link href="/" onClick={handleMenu} className="font-bold text-xl h-full flex items-center">Hafnon</Link>
                <button onClick={handleMenu} className="relative h-full aspect-square">
                    {
                        isActive
                            ? <CloseRounded className="text-3xl" />
                            : <MenuRounded className="text-3xl" />
                    }
                </button>
            </nav>
            <menu
                ref={menuRef}
                className={`absolute w-full h-[calc(100%-80px)] flex flex-col px-10
                            -top-[calc(100%-80px)] ${isActive ? "translate-y-[calc(100%+80px)]" : ""}
                            bg-white z-40 duration-300 ease-in-out gap-[10px]`}
            >
                {
                    data.map(({ label, href, newPage }, index) => {
                        return (
                            <li key={index}>
                                <Link href={href} onClick={handleMenu} target={newPage ? "_blank" : "_self"}>
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