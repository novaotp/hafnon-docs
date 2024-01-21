import { Metadata } from "next";
import { Chapter, NextStep } from "@/components/pages/guide";
import { Block } from "@/components/shared/Block";

export const metadata: Metadata = {
    title: 'Basics | Hafnon',
    description: 'Learn the basics of the Hafnon language.',
}

const Page = () => {
    return (
        <div className="relative w-full flex flex-col gap-10">
            <h1 className="font-semibold text-4xl">Basics</h1>
            <p className="text-justify">In this section of the Learn guide, we'll cover the parts to make you write code on your own.</p>
            <Chapter title="Variables" urlId="variables">
                <Chapter.Paragraph>
                    Variables are used to store data that can be used in your code.

                    <br /><br />

                    You can declare a variable by putting a type, such as <Chapter.InlineCode>int</Chapter.InlineCode> , followed by a name, such as <Chapter.InlineCode>x</Chapter.InlineCode> , and then you can assign a value to it.
                </Chapter.Paragraph>
                <Chapter.Code filename="/variables/immutable.haf" />
                <Block.Information>All variables are immutable by default in Hafnon.</Block.Information>
                <Chapter.Paragraph>
                    If you'd like to make a variable mutable, use the <Chapter.InlineCode>mutable</Chapter.InlineCode> keyword.
                </Chapter.Paragraph>
                <Chapter.Code filename="/variables/mutable.haf" />
            </Chapter>
            <Chapter title="Comments" urlId="comments">
                <Chapter.Paragraph>
                    Comments are text that are not taken into account when compiling the source code.

                    <br /><br />

                    Here how you can add comments to your code :
                </Chapter.Paragraph>
                <Chapter.Code filename="/comments/singleline.haf" />
                <Chapter.Code filename="/comments/multiline.haf" />
            </Chapter>
            <NextStep label="Advanced foundations" href="/learn/advanced" />
        </div>
    )
}

export default Page;