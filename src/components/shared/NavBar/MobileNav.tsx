"use client";

import Link from "next/link";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { useMemo, useRef, useState } from "react";
import { data } from "./data";

export const MobileNavbar = () => {
    const menuRef = useRef<HTMLMenuElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleMenu = () => {
        setIsActive(prev => !prev);

        const body = document.getElementsByTagName("body")[0];

        const oldValue = isActive ? "overflow-y-hidden" : "overflow-y-scroll";
        const newValue = isActive ? "overflow-y-scroll" : "overflow-y-hidden";

        body.classList.replace(oldValue, newValue);
    }

    const closeMenu = () => {
        setIsActive(false);
    }

    const RenderedIcon = useMemo(() => {
        return isActive ? CloseRounded : MenuRounded;
    }, [isActive])

    return (
        <>
            <nav className={`lg:hidden fixed w-full h-20 px-10 py-5 flex justify-between items-center bg-white z-50 ease-in-out ${isActive ? "shadow-lg delay-500 duration-200" : "shadow-none delay-0 duration-200" }`}>
                <Link href="/" onClick={closeMenu} className="font-bold text-xl h-full flex items-center">
                    Hafnon
                </Link>
                <button onClick={handleMenu} className="relative h-full aspect-square">
                    <RenderedIcon className="text-3xl" />
                </button>
            </nav>
            <menu
                ref={menuRef}
                className={`absolute w-full h-[calc(100%-80px)] flex flex-col p-10
                            -top-[calc(100%-80px)] ${isActive ? "translate-y-[calc(100%+80px)]" : ""}
                            bg-white z-40 duration-700 ease-in-out gap-[10px]`}
            >
                {
                    data.map(({ label, href, newPage }, index) => {
                        return (
                            <li key={index}>
                                <Link href={href} onClick={closeMenu} target={newPage ? "_blank" : "_self"}>
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