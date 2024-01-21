"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVBAR_HEIGHT = 40;

const useFirstVisibleTitleId = (elements: NodeListOf<Element>): string | null => {
    let found = false;
    let elementId: string | null = null;

    elements.forEach((element) => {
        const { top, left, bottom, right } = element.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        const isVisible = top >= NAVBAR_HEIGHT && left >= 0 && bottom <= innerHeight && right <= innerWidth;

        if (!found && isVisible) {
            console.log(`First visible title : ${element.innerHTML}`);
            found = true;
            elementId = element.id;
        }
    });

    return elementId;
}

/**
 * Renders a list of the headings in the page for better access to sections of the current page.
 */
export const PageHeadings = () => {
    const pathname = usePathname();
    const [headings, setHeadings] = useState<{ content: string, id: string }[]>([]);
    const [firstVisibleId, setFirstVisibleId] = useState<string>("");

    useEffect(() => {
        const headingElements = document.querySelectorAll("[data-heading]");
        setFirstVisibleId(headingElements.item(0).id);
    }, [pathname])

    useEffect(() => {
        const headings: { content: string, id: string }[] = [];
        const ids: string[] = [];
        const headingElements = document.querySelectorAll("[data-heading]");

        headingElements.forEach((element) => {
            const content = element.innerHTML;
            const id = element.id;

            if (ids.includes(id)) {
                return;
            }

            headings.push({ content, id });
            ids.push(id);
        });

        setHeadings(headings);
    }, [pathname]);

    useEffect(() => {
        const run = () => {
            const headingElements = document.querySelectorAll("[data-heading]");
            const id = useFirstVisibleTitleId(headingElements);

            if (!id) {
                return;
            }

            setFirstVisibleId(id);
        }

        document.addEventListener("scroll", run);

        return () => {
            document.removeEventListener("scroll", run);
        }
    }, [])

    return (
        <aside className="relative left-0 w-60 h-full">
            <menu className="fixed py-20">
                <h2 className="font-bold mb-3">On this page</h2>
                {
                    headings.map(({ content, id }, index) => (
                        <li key={index}>
                            <Link href={`${pathname}#${id}`} className={`text-sm font-medium ${id === firstVisibleId ? "text-purple-500" : "text-gray-500 hover:text-gray-700"}`}>
                                {content}
                            </Link>
                        </li>
                    ))
                }
            </menu>
        </aside>
    );
};
