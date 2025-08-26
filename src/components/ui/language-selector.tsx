"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import brazilFlag from "/public/logos/bandeira-brasil.jpg"
import euaFlag from "/public/logos/bandeira-eua.jpg"

export default function LanguageSelector() {
    const { language, setLanguage, t } = useLanguage()

    return (
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 p-1 backdrop-blur">
            <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-2 text-xs transition-all ${
                    language === 'pt'
                        ? 'bg-gradient-to-r from-green-500/20 to-yellow-500/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setLanguage('pt')}
                title={t('language.portuguese')}
            >
                <Image
                    src={brazilFlag}
                    alt="Bandeira do Brasil"
                    width={20}
                    height={14}
                    className="object-cover rounded-sm"
                />
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className={`h-8 px-2 text-xs transition-all ${
                    language === 'en'
                        ? 'bg-gradient-to-r from-blue-500/20 to-red-500/20 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setLanguage('en')}
                title={t('language.english')}
            >
                <Image
                    src={euaFlag}
                    alt="Bandeira dos EUA"
                    width={20}
                    height={14}
                    className="object-cover rounded-sm"
                />
            </Button>
        </div>
    )
}