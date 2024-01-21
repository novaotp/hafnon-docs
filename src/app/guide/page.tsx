import { Chapter, NextStep } from "@/components/pages/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Introduction | Hafnon",
    description: "Learn the foundations of the Hafnon language.",
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col gap-10">
            <h1 className="font-semibold text-4xl">Introduction</h1>
            <p className="text-justify">In the learning section, you&apos;ll gain an understanding of the basics of Hafnon and writing some scripts.</p>
            <Chapter title="What is Hafnon ?" urlId="what-is-hafnon">
                <Chapter.Paragraph>
                    Hafnon is a statically-typed, expressive, JIT-compiled language for optimal performance.
                </Chapter.Paragraph>
            </Chapter>
            <NextStep label="Quick Start a new project" href="/guide/quick-start" />
        </div>
    )
}

export default Page;