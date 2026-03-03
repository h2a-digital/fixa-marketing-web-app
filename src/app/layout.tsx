import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/globals.css';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Describe your tattoo idea in seconds, generate custom designs with AI, try them on your photos, and export favorites for later.',
  keywords: [
    'ai tattoo generator',
    'tattoo design app',
    'tattoo prompt',
    'tattoo try on',
    'tattoo overlay',
    'tattoo mockup',
    'tattoo design gallery',
    'custom tattoo design',
    'InkForge',
  ],
  authors: [{ name: site.company.name, url: env.SITE_URL }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Design',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Generate custom tattoo designs from text prompts, preview them with Try On, and export your favorites.',
    siteName: site.app.name,
    images: [
      {
        url: '/images/icon.png',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fixaapp',
    creator: '@hakim98bologna',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'From prompt to tattoo concept: generate, try on, save to gallery, and export references.',
    images: ['/images/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: { google: '' },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/apple-icon.png', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
