import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Kaki Kagatan",
    description: "Portfolio site of Kaki Kagatan",
    robots: "index, follow",
    other: {
        "apple-mobile-web-app-title": "Kaki",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="m-4 justify-center items-center">
                {children}
                <Footer />
            </body>
        </html>
    );
}
