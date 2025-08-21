// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import profilePhotoSmall from "../../public/logos/favicon-jm.jpeg";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfólio - João Marcelo",
    description: "Meu portfólio pessoal, apresentando projetos e habilidades.",
    icons: {
        icon: profilePhotoSmall.src,
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <LanguageProvider>
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}