"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { motion, useScroll, useSpring } from "framer-motion"
import galaxiaBackground from '../../public/galaxia.jpg'

import Navbar from "@/components/navbar"
import StarsCanvas from "@/components/stars-canvas"
import BackToTop from "@/components/back-to-top"
import HeroSection from "@/components/sections/hero-section"
import ProjectsSection from "@/components/sections/projects-section"
import VideosSection from "@/components/sections/videos-section"
import ArticlesSection from "@/components/sections/articles-section"
import ExperienceSection from "@/components/sections/experience-section"
import ContactSection from "@/components/sections/contact-section"
import FooterSection from "@/components/sections/footer-section"

const sections = [
    { id: "sobre", label: "Sobre" },
    { id: "projetos", label: "Projetos" },
    { id: "videos", label: "Vídeos" },
    { id: "artigos", label: "Artigos" },
    { id: "experiencia", label: "Experiência" },
    { id: "contato", label: "Contato" },
] as const

export default function Page() {
    const [active, setActive] = useState<string>("sobre")
    const refs = useMemo(
        () =>
            Object.fromEntries(
                sections.map((s) => [s.id, { id: s.id, ref: { current: null as HTMLElement | null } }] as const),
            ),
        [],
    ) as Record<string, { id: string; ref: { current: HTMLElement | null } }>

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
                if (visible?.target?.id) setActive(visible.target.id)
            },
            { rootMargin: "0px 0px -60% 0px", threshold: [0.25, 0.5, 0.75, 1] },
        )
        for (const s of sections) {
            const el = document.getElementById(s.id)
            if (el) observer.observe(el)
        }
        return () => observer.disconnect()
    }, [])

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 })

    return (
        <main className="relative min-h-screen text-white antialiased overflow-x-hidden">
            {/* Background: galaxy image + gradient + stars canvas */}
            <div className="fixed inset-0 -z-20">
                <Image src={galaxiaBackground} alt="Fundo de galáxia" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a0b2e]/70 to-black/90" />
            </div>
            <StarsCanvas />

            {/* Animated scroll progress bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed left-0 right-0 top-0 h-[3px] origin-left z-50 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500"
            />

            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl animate-pulse" />
            <div className="pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-violet-700/25 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />

            {/* Navbar */}
            <Navbar
                sections={sections as any}
                activeId={active}
                onJump={(id: string) => {
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
            />

            {/* Sections */}
            <HeroSection sectionRef={refs.sobre?.ref as any} />
            <ProjectsSection sectionRef={refs.projetos?.ref as any} />
            <VideosSection sectionRef={refs.videos?.ref as any} />
            <ArticlesSection sectionRef={refs.artigos?.ref as any} />
            <ExperienceSection sectionRef={refs.experiencia?.ref as any} />
            <ContactSection sectionRef={refs.contato?.ref as any} />

            <FooterSection />
            <BackToTop />
            <Toaster />
        </main>
    )
}