import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import ClientProviders from "@/components/shared/client-providers";
export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: `${APP_NAME}. ${APP_SLOGAN}`,
    },
    description: APP_DESCRIPTION,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-1 flex flex-col p-4'>
                <ClientProviders>{children}</ClientProviders>
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}