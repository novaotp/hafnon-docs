import { Sidebar } from "@/components/pages/guide/Sidebar";
import { ChildrenProps } from "@/types";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="relative w-full mx-auto flex-grow flex justify-center">
            <Sidebar />
            <div className="relative w-full max-w-3xl h-full p-20">
                {children}
            </div>
        </div>
    )
}

export default Layout;