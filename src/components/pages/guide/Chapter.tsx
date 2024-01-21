const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-justify">{children}</p>
    )
}

export const Chapter = ({ children, title, urlId }: { children: React.ReactNode, title: string, urlId: string }) => {
    return (
        <section className="relative flex flex-col justify-center items-start gap-10">
            <div className="relative w-full flex justify-start">
                <h2 id={urlId} data-heading className="w-full border-t pt-[80px] mt-[50px] border-gray-200 font-medium text-3xl cursor-pointer">
                    {title}
                </h2>
            </div>
            {children}
        </section>
    )
}

Chapter.Paragraph = Paragraph;