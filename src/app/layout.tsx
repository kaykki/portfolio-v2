import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";
import { Props } from "@/utils/types";
import { Fredoka } from 'next/font/google';

export const metadata: Metadata = {
    title: "Kaki Kagatan",
    description: "Portfolio site of Kaki Kagatan",
    robots: "index, follow",
    other: {
        "apple-mobile-web-app-title": "Kaki",
    },
};

const fredoka = Fredoka({
    weight: '300'
})

export default function RootLayout({
    params,
    children,
}: Readonly<{
    children: React.ReactNode;
    params: Props;
}>) {
    return (
        <html lang="en">
            <body className={`${fredoka.className} m-4 justify-center items-center`}>
                
                {children}
                <Footer />
            </body>
        </html>
    );
}
