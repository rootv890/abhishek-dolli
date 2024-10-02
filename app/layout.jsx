import { Roboto } from 'next/font/google';
import './globals.css';
import './fonts.css';
import Navbar from '@/components/ui_comps/Navbar';

const roboto = Roboto( {
    subsets: ['latin'],
    weight: ['100', '300', '400', '500']
} );

export const metadata = {
    title: 'Abhishek Dolli',
    description: 'Freelance Video Editor'
};

export default function RootLayout ( { children } )
{
    return (
        <html lang="en">
            <body className={` bg-black text-white flex flex-col  `}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
