export const InlineCode = ({ children }: { children: string }) => {
    return (
        <span className="bg-gray-700 text-white px-[8px] text-sm rounded-md">{children}</span>
    )
}