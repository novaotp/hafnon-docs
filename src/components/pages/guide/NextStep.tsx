import { OpenInNewRounded } from "@mui/icons-material";
import Link from "next/link";

interface NextStepProps {
    label: string;
    href: string;
}

export const NextStep = ({ label, href }: NextStepProps) => {
    return (
        <Link href={href} className="relative w-full h-10 bg-purple-700 text-white flex justify-center items-center">
            {label}
            &nbsp;
            <OpenInNewRounded />
        </Link>
    )
}