import { Metadata } from "next";
import { Chapter, NextStep } from "@/components/pages/guide";
import { Block } from "@/components/shared/Block";
import { CodeBlock } from "@/components/shared/Code/Block";
import { Code } from "@/components/shared/Code";

export const metadata: Metadata = {
    title: 'Basics | Hafnon',
    description: 'Learn the basics of the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col">
            <h1 className="font-semibold text-4xl">Basics</h1>
            <p className="text-justify">In this section of the Learn guide, we&apos;ll cover the parts to make you write code on your own.</p>
            <Chapter title="Variables" urlId="variables">
                <Chapter.Paragraph>
                    Variables are used to store data that can be used in your code.

                    <br /><br />

                    You can declare a variable by putting a type, such as <Code.Inline>int</Code.Inline> , followed by a name, such as <Code.Inline>x</Code.Inline> , and then you can assign a value to it.
                </Chapter.Paragraph>
                <Code.Block>
                    int x = 0;
                </Code.Block>
                <Block.Information>All variables are immutable by default in Hafnon.</Block.Information>
                <Chapter.Paragraph>
                    If you&apos;d like to make a variable mutable, use the <Code.Inline>mutable</Code.Inline> keyword.
                </Chapter.Paragraph>
                <Code.Block>
                    mutable int x = 0;
                </Code.Block>
            </Chapter>
            <Chapter title="Comments" urlId="comments">
                <Chapter.Paragraph>
                    Comments are text that are not taken into account when compiling the source code.

                    <br /><br />

                    Here how you can add comments to your code :
                </Chapter.Paragraph>
                <Code.Block>
                    {`// This is a single-line comment`}
                </Code.Block>
                <Code.Block>
                {`/**

This is a multi-line comment.

It still works here !

*/`}
                </Code.Block>
            </Chapter>
            <NextStep label="Advanced foundations" href="/learn/advanced" />
        </div>
    )
}

export default Page;