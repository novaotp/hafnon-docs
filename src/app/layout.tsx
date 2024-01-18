import './globals.css';
import { poppins } from './fonts';
import { NavBar } from '@/components/shared/NavBar';

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <NavBar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout;
