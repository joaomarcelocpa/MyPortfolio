"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
    id: string
    className?: string
    children?: React.ReactNode
}

const Section = forwardRef<HTMLElement, Props>(function Section({ id, className, children }, ref) {
    return (
        <section
            id={id}
            ref={ref}
            className={cn("relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:py-20", "scroll-mt-24", className)}
            aria-labelledby={`${id}-title`}
        >
            {children}
        </section>
    )
})

export default Section
