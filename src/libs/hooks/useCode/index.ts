"use server";

import { readFileSync } from "fs";

export const useCodeSync = (path: string): string => {
    return readFileSync(process.cwd() + path, { encoding: "utf8", flag: "r" });
}