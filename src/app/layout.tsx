import type { Metadata } from 'next';
import { Inter, Roboto, Noto_Sans_JP } from 'next/font/google';

import { JoyUIThemeProvider } from '@/components/JoyUIThemeProvider';
import Sidebar from '@/components/Sidebar/Sidebar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <JoyUIThemeProvider>
          <Sidebar />
          {children}
        </JoyUIThemeProvider>
      </body>
    </html>
  );
}
