import { InfoRounded } from "@mui/icons-material"

export const Information = ({ children }: { children: string }) => {
    return (
        <div className="relative w-full flex flex-col p-5 justify-center items-start bg-gray-200">
            <p className="font-bold mb-5"><InfoRounded className="fill-blue-600" /> Information</p>
            <p>{children}</p>
        </div>
    )
}