import { NextStep } from "@/components/pages/learn";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Learn - Hafnon',
    description: 'Learn the foundations for the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col p-10 gap-10">
            <h1 className="font-semibold text-4xl">Learn</h1>
            <p className="text-justify">In the learning section, you'll gain an understanding of the basics of Hafnon and writing some scripts.</p>
            <NextStep label="Start with the basics" href="/learn/basics" />
        </div>
    )
}

export default Page;