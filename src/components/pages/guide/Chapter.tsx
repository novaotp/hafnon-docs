
const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-justify">{children}</p>
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