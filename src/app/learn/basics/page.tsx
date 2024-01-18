import { NextStep } from "@/components/pages/learn";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { useCodeSync } from "@/libs/hooks/useCode";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Basics | Learn - Hafnon',
    description: 'Learn the basics of the Hafnon language.',
}

const Page = () => {
    const code = useCodeSync("/src/app/learn/basics/code.haf");

    return (
        <div className="relative w-full flex flex-col p-10 gap-10">
            <h1 className="font-semibold text-4xl">Basics</h1>
            <p className="text-justify">In this section of the Learn guide, we'll cover the parts to make you write code on your own.</p>
            <CodeBlock code={code} />
            <NextStep label="Advanced foundations" href="/learn/advanced" />
        </div>
    )
}

export default Page;