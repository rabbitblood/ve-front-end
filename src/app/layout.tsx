import React from "react";
import PopUp from "@/components/atoms/PopUp/PopUp";
import StoreProvider from "@/components/redux/StoreProvider";
import "@/css/overwrite/react-image-gallery/react-image-gallery.css";
import {
  generalTitleMetaData,
  generalDescriptionMetaData,
  generalKeywordsMetaData,
  featureImageUrl,
} from "@/data/SEOData";
import { Metadata, Viewport } from "next";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

import "@/css/home.css";

export const metadata: Metadata = {
  title: `${generalTitleMetaData}`,
  description: `${generalDescriptionMetaData}`,
  keywords: generalKeywordsMetaData,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://vestudio.ca/",
    siteName: `${generalTitleMetaData}`,
    description: `${generalDescriptionMetaData}`,
    images: [`${featureImageUrl}`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  userScalable: false,
  minimumScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/icon.png" />
          <meta
            name="p:domain_verify"
            content="7e1cf25294ccc72af6f7d6c9213634e5"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Hahmlet:wght@100..900&family=Oranienbaum&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {children}
          <PopUp />
        </body>
      </html>
    </StoreProvider>
  );
}
