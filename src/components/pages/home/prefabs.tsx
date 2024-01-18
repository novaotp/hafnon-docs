"use client";

import Link from "next/link";

interface ToProps {
    href: string;
    label: string;
    accent?: "primary" | "secondary";
}

const To = ({ href, label, accent = "primary" }: ToProps) => {
    const color = accent === "primary" ? "bg-purple-700 text-white" : "bg-white text-purple-700 border border-purple-700";

    return (
        <Link href={href} className={`relative w-full h-[40px] ${color} uppercase flex justify-center items-center text-md`}>
            {label}
        </Link>
    )
}

export const ToDocs = () => {
    return (
        <To href="/docs" label="Get Started" accent="primary" />
    )
}

export const ToLearn = () => {
    return (
        <To href="/learn" label="Learn" accent="secondary" />
    )
}