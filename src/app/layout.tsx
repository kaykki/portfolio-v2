import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Kaki Kagatan",
    description: "Portfolio site of Kaki Kagatan",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="Kaki" />
            </head>
            <body className="m-4">
                {children}
                <Footer />
            </body>
        </html>
    );
}
