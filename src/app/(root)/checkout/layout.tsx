import type { Metadata } from "next";
import "../../globals.css";
import { HelpCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className='p-4'>
            <header className='bg-card mb-4 border-b'>
                <div className='max-w-6xl mx-auto flex justify-between items-center'>
                    <Link href='/public'>
                        <Image
                            src='/icons/logo.svg'
                            alt='logo'
                            width={70}
                            height={70}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </Link>
                    <div>
                        <h1 className='text-3xl'>Checkout</h1>
                    </div>
                    <div>
                        <Link href='/page/help'>
                            <HelpCircle className='w-6 h-6' />
                        </Link>
                    </div>
                </div>
            </header>
            <ClientProviders>{children}</ClientProviders>
        </div>
        </body>
        </html>
    );
}