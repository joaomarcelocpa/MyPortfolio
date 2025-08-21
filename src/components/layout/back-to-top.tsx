// src/components/layout/back-to-top.tsx
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BackToTop() {
    const [show, setShow] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 600)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    if (!show) return null
    return (
        <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 bg-violet-600 hover:bg-violet-600/90 shadow-lg"
            aria-label={t('back.to.top')}
        >
            <ChevronUp className="h-5 w-5" />
        </Button>
    )
}