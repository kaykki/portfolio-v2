import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import React from "react";
import { Props } from "@/utils/types";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Kaki Kagatan",
    description: "Portfolio site of Kaki Kagatan",
    robots: "index, follow",
    other: {
        "apple-mobile-web-app-title": "Kaki",
    },
};

// export default async function Project({
//     params,
// } : {
//     params: Props;
// }) {
//     const projectData = await fetchProjectData((await params).projectId);

//     return (
//         <>{Header(projectData.title.rendered)}</>
//     )

// }

export default function RootLayout({
    params,
    children,
}: Readonly<{
    children: React.ReactNode;
    params: Props;
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
