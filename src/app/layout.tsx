import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import profilePhotoSmall from "../../public/logos/favicon-jm.jpeg";
import { LanguageProvider } from "@/contexts/language-context"; // ✅ MANTIDO!

// Fontes originais (mantidas)
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// ✅ NOVAS FONTES ADICIONADAS (sem quebrar nada)
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: 'swap',
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: 'swap',
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
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
            className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
        >
        {/* ✅ LANGUAGE PROVIDER MANTIDO! */}
        <LanguageProvider>
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}