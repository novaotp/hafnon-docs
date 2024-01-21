'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ContentCopyRounded, VerifiedRounded } from '@mui/icons-material';
import { useCode } from '@/libs/hooks/useCode/server';

interface CodeBlockProps {
    /** The name of the file in `/src/code-samples`. */
    filename: string;
}

export const CodeBlock = ({ filename }: CodeBlockProps) => {
    const codeRef = useRef<HTMLPreElement>(null);
    const [hasCopied, setHasCopied] = useState<boolean>(false);
    const [content, setContent] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fileContents = useCode(filename);
        setContent(fileContents);
    }, [filename])

    const handleCopy = async () => {
        if (!codeRef.current) return;

        setHasCopied(true);

        await navigator.clipboard.writeText(codeRef.current.innerHTML);

        setTimeout(() => setHasCopied(false), 1200);
    }

    const RenderedIcon = useMemo(() => {
        return hasCopied ? VerifiedRounded : ContentCopyRounded;
    }, [hasCopied])

    return (
        <div className="relative bg-gray-700 w-full flex flex-col items-center justify-start">
            <div className="relative w-full h-12 border-b-2 border-white">
                <div className="relative w-full h-full px-5 flex justify-between items-center">
                    <span className="text-slate-200">Hafnon</span>
                    <button className="relative w-6 aspect-square bg-none border-none" onClick={handleCopy}>
                        <RenderedIcon className="relative w-full aspect-square fill-[#c5c5c5] hover:fill-[#999999]" />
                    </button>
                </div>
            </div>
            <div className="relative p-5 w-full flex items-center justify-start">
                <pre ref={codeRef} className="relative w-full text-slate-200 overflow-x-auto">
                    { content ?? "" }
                </pre>
            </div>
        </div>
    )
}