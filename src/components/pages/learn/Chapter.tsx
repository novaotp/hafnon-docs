import { CodeBlock } from "@/components/shared/CodeBlock"

const Title = ({ urlId, children }: { urlId: string, children: React.ReactNode }) => {
    return (
        <h2 className="font-semibold text-3xl" id={urlId}>
            {children}
        </h2>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-justify">{children}</p>
    )
}

export const InlineCode = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="bg-gray-700 text-white px-[8px] rounded-md">{children}</span>
    )
}

export const Chapter = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="relative flex flex-col justify-center items-start my-10 gap-10">
            {children}
        </section>
    )
}

Chapter.Title = Title;
Chapter.Paragraph = Paragraph;
Chapter.InlineCode = InlineCode;
/** An alias for {@link CodeBlock} */
Chapter.Code = CodeBlock;