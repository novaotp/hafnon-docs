import { NextStep } from "@/components/pages/guide";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Quick Start | Hafnon',
    description: 'Starting a new project in Hafnon.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col gap-10">
            <h1 className="font-semibold text-4xl">Advanced</h1>
            <p className="text-justify">Learn advanced tricks.</p>
            <NextStep label="Start with the basics" href="/guide/basics" />
        </div>
    )
}

export default Page;