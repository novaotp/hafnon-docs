import './globals.css';
import { poppins } from './fonts';
import { Navbar } from '@/components/shared/NavBar';
import { ChildrenProps } from '@/types';

const RootLayout = ({ children }: ChildrenProps) => {
    return (
        <html lang="en">
            <body className={`${poppins.className} flex flex-col overflow-y-scroll`}>
                <Navbar />
                <main className="relative w-full max-w-7xl mx-auto mt-20 flex-grow flex">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout;
