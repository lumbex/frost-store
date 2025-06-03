import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from '@/lib/constants'
import {Toaster} from "sonner";
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
          <Toaster />
          <main className='flex-1 flex flex-col'>{children}</main>
          <Footer />
      </div>
      </body>
    </html>
  );
}
