"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Reveal({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { margin: "0px 0px -10% 0px", once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
