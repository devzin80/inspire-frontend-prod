import { Geist, Geist_Mono, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Providers from '@/redux/Provider'


const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})
const bornomala = localFont({
    src: [
        {
            path: '../public/fonts/bornomala/Bornomala-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/bornomala/Bornomala-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-bornomala',
    display: 'swap', //
})
export const metadata = {
    title: 'Inspire Online',
    description: 'Next Gen Learning Platform for GEN-Z',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} ${bornomala.variable} antialiased bg-[#F7F9FC]`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
