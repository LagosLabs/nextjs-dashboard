import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Lagos Labs Dashboard',
    default: 'Lagos Labs Dashboard'
  },
  description: 'The Unofficial Lagos Labs Dashboard built from a fork of the Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://lagoslabs.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
