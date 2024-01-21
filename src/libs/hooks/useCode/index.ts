"use client";

import { useEffect, useState } from "react";
import { useCode } from "./server";

/**
 * Reads from a file in `/src/code-samples` and returns its contents.
 * @param filename The name of the file in `/src/code-samples`
 * @returns The content of the file
 */
export const useCodeSync = (filename: string): string | undefined => {
    const [content, setContent] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fileContents = useCode(filename);
        setContent(fileContents);
    }, [filename])

    return content;
}