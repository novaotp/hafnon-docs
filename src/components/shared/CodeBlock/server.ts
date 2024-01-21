"use server";

import { } from "fs";
import { readFile } from "fs/promises";

export const fetchCode = async (filename: string): Promise<string> => {
    filename = filename.startsWith("/") ? filename : "/" + filename;

    return await readFile(process.cwd() + "/src/code-samples" + filename, { encoding: "utf8", flag: "r" });
}