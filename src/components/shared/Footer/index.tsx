import { CopyrightRounded } from "@mui/icons-material";

export const Footer = () => {
    return (
        <footer className="relative w-full p-10 flex flex-col justify-center gap-5">
            <h2 className="font-semibold text-xl">Hafnon</h2>
            <p className="text-xs">An expressive and simple language for your everyday productivity.</p>
            <p className="text-xs"><CopyrightRounded />2024-2024 by Sajidur Rahman</p>
        </footer>
    )
}