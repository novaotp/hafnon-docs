"use server";

import { readFileSync } from "fs";

export const useCode = (filename: string) => {
    filename = filename.startsWith("/") ? filename : "/" + filename;
    return readFileSync(process.cwd() + "/src/code-samples" + filename, { encoding: "utf8", flag: "r" })
}