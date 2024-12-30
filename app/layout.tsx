import type { Metadata } from "next";
import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";
import { ThirdwebProvider } from "thirdweb/react";
import { AppKitProvider } from "./context/AppKitContext";
import { AuthProvider } from "./context/AuthContext";
import { TradingProvider } from "./context/TradingContext";
import { ChatProvider } from "./context/ChatContext";

export const metadata: Metadata = {
  title: "Cognitive Finance",
  description: "Supercharging Your On-Chain Experience",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    url: "https://cognitivefinance.vercel.app",
    type: "website",
    title: "Cognitive Finance",
    description: "Supercharging Your On-Chain Experience",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/9fc9ef44-05b9-4184-afb5-3a46b7029c15.png?token=3D-kTH0krfjbiPiKPY-hgt1R7eQEkCqeqvNV9NuEakQ&height=693&width=1200&expires=33266819156",
        width: 1200,
        height: 693,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://cognitivefinance.vercel.app",
    title: "Cognitive Finance",
    description: "Supercharging Your On-Chain Experience",
    images: [
      "https://opengraph.b-cdn.net/production/images/9fc9ef44-05b9-4184-afb5-3a46b7029c15.png?token=3D-kTH0krfjbiPiKPY-hgt1R7eQEkCqeqvNV9NuEakQ&height=693&width=1200&expires=33266819156",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="font-Inter">
        <ThirdwebProvider>
          <AppKitProvider>
            <AuthProvider>
              <TradingProvider>
                <ChatProvider>
                  <GlobalProvider>{children}</GlobalProvider>
                </ChatProvider>
              </TradingProvider>
            </AuthProvider>
          </AppKitProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
