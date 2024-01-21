import { ToDocs, ToLearn } from "@/components/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home - Hafnon',
    description: 'The official documentation for the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col items-center p-10 gap-10">
            <h1 className="font-semibold text-4xl text-center">An expressive language for <span className="font-black">developers</span></h1>
            <p className="text-gray-500 text-center">A statically-typed, JIT-compiled language designed for optimal performance.</p>
            <div className="relative w-full flex flex-col gap-5">
                <ToDocs />
                <ToLearn />
            </div>
        </div>
    )
}

export default Page;
