import type { Metadata } from "next";
import "../globals.css";

import { APP_COPYRIGHT } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
export const metadata: Metadata = {
    title: {
        template: `%s | ${APP_NAME}`,
        default: `${APP_NAME}. ${APP_SLOGAN}`,
    },
    description: APP_DESCRIPTION,
}

import ClientProviders from "@/components/shared/client-providers";


export default async function AuthLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className='flex flex-col items-center min-h-screen highlight-link  '>
            <header className='mt-8'>
                <Link href='/'>
                    <Image
                        src='/icons/logo.svg'
                        alt='logo'
                        width={64}
                        height={64}
                        priority
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </Link>
            </header>
            <main className='mx-auto max-w-sm min-w-80 p-4'>
                <ClientProviders>{children}</ClientProviders>
            </main>
            <footer className=' flex-1 mt-8  bg-gray-800 w-full flex flex-col gap-4 items-center p-8 text-sm'>
                <div className='flex justify-center space-x-4'>
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'> Privacy Notice</Link>
                    <Link href='/page/help'> Help </Link>
                </div>
                <div>
                    <p className='text-gray-400'>{APP_COPYRIGHT}</p>
                </div>
            </footer>
        </div>
        </body>
        </html>

    )
}