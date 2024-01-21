import { CodeBlock } from "@/components/shared/CodeBlock"

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-justify">{children}</p>
    )
}

export const InlineCode = ({ children }: { children: string }) => {
    return (
        <span className="bg-gray-700 text-white px-[8px] text-sm rounded-md">{children}</span>
    )
}

export const Chapter = ({ children, title, urlId }: { children: React.ReactNode, title: string, urlId: string }) => {
    return (
        <section className="relative flex flex-col justify-center items-start gap-10">
            <h2 className="font-medium text-3xl hover:underline cursor-pointer" id={urlId}>{title}</h2>
            {children}
        </section>
    )
}

Chapter.Paragraph = Paragraph;
Chapter.InlineCode = InlineCode;
/** An alias for {@link CodeBlock} */
Chapter.Code = CodeBlock;