import { InfoRounded } from "@mui/icons-material";

export const Information = ({ children }: { children: string }) => {
    return (
        <div className="relative w-full flex flex-col p-5 justify-center items-start bg-gray-200">
            <div className="mb-5">
                <InfoRounded className="fill-blue-600" />
                <span className="font-bold ml-3">Information</span>
            </div>
            <p className="text-sm text-justify">{children}</p>
        </div>
    )
}