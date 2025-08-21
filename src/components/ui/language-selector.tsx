"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

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
                <span className="text-2xl">🇧🇷</span>
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
                <span className="text-2xl">🇺🇸</span>
            </Button>
        </div>
    )
}