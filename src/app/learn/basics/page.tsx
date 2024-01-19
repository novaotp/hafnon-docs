import { Metadata } from "next";
import { Chapter, NextStep } from "@/components/pages/learn";
import { Block } from "@/components/shared/Block";

export const metadata: Metadata = {
    title: 'Basics | Learn - Hafnon',
    description: 'Learn the basics of the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col p-10">
            <h1 className="font-semibold text-4xl mb-10">Basics</h1>
            <p className="text-justify">In this section of the Learn guide, we'll cover the parts to make you write code on your own.</p>
            <Chapter>
                <Chapter.Title urlId="variables">Variables</Chapter.Title>
                <Chapter.Paragraph>
                    Variables are used to store data that can be used in your code.

                    You can declare a variable by putting a type, such as <Chapter.InlineCode>int</Chapter.InlineCode> , followed by a name, such as <Chapter.InlineCode>x</Chapter.InlineCode> , and then you can assign a value to it.
                </Chapter.Paragraph>
                <Chapter.Code filename="/variables.haf" />
                <Block.Information>All variables are immutable by default in Hafnon.</Block.Information>
            </Chapter>
            <NextStep label="Advanced foundations" href="/learn/advanced" />
        </div>
    )
}

export default Page;