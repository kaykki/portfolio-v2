import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";
import { Fredoka } from 'next/font/google';
import { Gabarito } from 'next/font/google';

export const metadata: Metadata = {
    title: "Kaki Kagatan",
    description: "Portfolio site of Kaki Kagatan",
    robots: "index, follow",
    other: {
        "apple-mobile-web-app-title": "Kaki",
    },
};

const fredoka = Fredoka({
    weight: '300',
    variable: '--font-fredoka'
})

const gabarito = Gabarito({
	weight: '600',
	variable: '--font-gabarito'
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <html lang="en">
            <body className={`${fredoka.variable} ${gabarito.variable}`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
