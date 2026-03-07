import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const headingFont = Rajdhani({
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://macmagic-ai.github.io"),
  title: "Algarve SimRacing | Portugal's Premier Sim Racing Experience",
  description:
    "Professional simulator rentals, coaching, streaming-ready rigs and private events in Portimao near Autodromo Internacional do Algarve.",
  applicationName: "Algarve SimRacing",
  alternates: {
    canonical: "https://macmagic-ai.github.io/algarvesimracing-web",
  },
  keywords: [
    "Algarve SimRacing",
    "sim racing Portugal",
    "simulator rental Portimao",
    "iRacing Algarve",
    "Assetto Corsa Algarve",
    "sim racing coaching",
  ],
  openGraph: {
    title: "Algarve SimRacing",
    description:
      "Where Virtual Meets Reality. Elite sim racing sessions, events, and coaching in Portimao.",
    url: "https://macmagic-ai.github.io/algarvesimracing-web",
    siteName: "Algarve SimRacing",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/algarvesimracing-web/assets/008-900x900-1.jpg",
        width: 900,
        height: 900,
        alt: "Algarve SimRacing simulator action setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algarve SimRacing",
    description:
      "Portugal's Premier Sim Racing Experience in Portimao. Book your session now.",
    images: ["/algarvesimracing-web/assets/008-900x900-1.jpg"],
  },
  icons: {
    icon: "/algarvesimracing-web/assets/ASR_favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
