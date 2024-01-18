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
                <p className="font-bold text-xl">Hafnon</p>
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
                className={`absolute w-full h-[calc(100%-80px)] -top-[calc(100%-80px)]
                            ${isActive ? "translate-y-[calc(100%+80px)]" : ""} flex flex-col
                            bg-white z-40 duration-300 ease-in-out`}
            >
                {
                    data.map(({ label, href, newPage }) => {
                        return (
                            <li>
                                <Link href={href} target={newPage ? "_blank" : "_self"}>
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