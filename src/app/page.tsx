import { ToDocs, ToLearn } from "@/components/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home - Hafnon',
    description: 'The official documentation for the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col items-center p-10 gap-5">
            <h1 className="font-bold text-5xl">Hafnon</h1>
            <p className="text-gray-500">A statically-typed, JIT-compiled language designed for optimal performance.</p>
            <ToDocs />
            <ToLearn />
        </div>
    )
}

export default Page;
