import './globals.css';
import { poppins } from './fonts';
import { NavBar } from '@/components/shared/NavBar';
import { Footer } from '@/components/shared/Footer';

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body className={`${poppins.className} flex flex-col`}>
                <NavBar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout;
