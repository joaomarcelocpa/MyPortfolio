// src/components/layout/navbar.tsx
"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "@/components/ui/language-selector"
import profilePhotoSmall from "../../../public/logos/favicon-jm.jpeg"

type SectionLink = { id: string; label: string }

export default function Navbar({
                                   sections,
                                   activeId,
                                   onJump,
                               }: {
    sections: readonly SectionLink[]
    activeId?: string
    onJump?: (id: string) => void
}) {
    const [open, setOpen] = useState(false)
    const { t } = useLanguage()

    // Mapear os IDs das seções para as chaves de tradução
    const getSectionLabel = (sectionId: string) => {
        const labelMap: Record<string, string> = {
            sobre: t('nav.about'),
            projetos: t('nav.projects'),
            videos: t('nav.videos'),
            artigos: t('nav.articles'),
            experiencia: t('nav.experience'),
            contato: t('nav.contact'),
        }
        return labelMap[sectionId] || sectionId
    }

    return (
        <header className="sticky top-0 z-40 w-full">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/10 bg-black/50 backdrop-blur">
                        <Image src={profilePhotoSmall} alt="João Marcelo" width={36} height={36} className="..." />
                    </div>
                    <div className="leading-tight">
                        <div className="font-semibold text-white">João Marcelo</div>
                        <div className="text-xs text-white/60">{t('nav.profile.title')}</div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div className="hidden items-center gap-3 md:flex">
                    <nav className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/30 p-1 backdrop-blur">
                        {sections.map((s) => {
                            const active = activeId === s.id
                            return (
                                <Button
                                    key={s.id}
                                    variant="ghost"
                                    className={cn(
                                        "h-9 px-3 text-sm text-white hover:bg-white/10",
                                        active && "bg-gradient-to-r from-fuchsia-500/20 to-violet-600/20",
                                    )}
                                    onClick={() => onJump?.(s.id)}
                                >
                                    {getSectionLabel(s.id)}
                                </Button>
                            )
                        })}
                    </nav>

                    <LanguageSelector />
                </div>

                {/* Mobile nav */}
                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSelector />

                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="border-white/15 text-white hover:bg-white/10 bg-transparent"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="border-white/10 bg-black/70 text-white backdrop-blur">
                            <SheetHeader>
                                <SheetTitle className="text-left">{t('nav.menu')}</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 flex flex-col gap-2">
                                {sections.map((s) => (
                                    <SheetClose asChild key={s.id}>
                                        <Button
                                            variant={activeId === s.id ? "default" : "outline"}
                                            className={cn(
                                                "justify-start",
                                                activeId === s.id
                                                    ? "bg-violet-600 hover:bg-violet-600/90"
                                                    : "border-white/15 text-white hover:bg-white/10 bg-transparent",
                                            )}
                                            onClick={() => onJump?.(s.id)}
                                        >
                                            {getSectionLabel(s.id)}
                                        </Button>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </header>
    )
}