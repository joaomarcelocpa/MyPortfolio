// src/components/sections/hero-section.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Rocket, Sparkles } from "lucide-react"
import pucMinasLogo from '../../../public/logos/logo-pucminas.png'
import m2cDigitalLogo from '../../../public/logos/logo-m2cdigital.png'
import profilePhoto from '../../../public/logos/profile-picture.jpeg'
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import { useLanguage } from "@/contexts/language-context"

interface HeroSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function HeroSection({ sectionRef }: HeroSectionProps) {
    const { t } = useLanguage()

    return (
        <Section id="sobre" ref={sectionRef} className="relative">
            <Reveal>
                <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
                    <div className="space-y-6 order-2 md:order-1">
                        <Badge className="text-sm w-fit bg-violet-500 hover:bg-violet-500/90">
                            <Sparkles className="mr-2 h-3.5 w-3.5" />
                            {t('hero.badge')}
                        </Badge>
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight title-poppins">
                            João Marcelo Carvalho Pereira Araújo
                        </h1>
                        <p className="text-base leading-relaxed text-white/80">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button
                                className="bg-violet-600 hover:bg-violet-600/90"
                                onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                <Rocket className="mr-2 h-4 w-4" />
                                {t('hero.view.projects')}
                            </Button>
                            <Button
                                variant="outline"
                                className="border-violet-500/50 text-white hover:bg-white/10 bg-transparent"
                                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                {t('hero.contact')}
                            </Button>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="hover:bg-white/10" asChild>
                                    <a href="https://github.com/joaomarcelocpa/" target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <Github className="h-5 w-5" />
                                    </a>
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:bg-white/10" asChild>
                                    <a href="https://www.linkedin.com/in/joaomarcelocpa/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Image src={pucMinasLogo} alt="PUC Minas" width={36} height={36} className="..." />
                                <div className="text-sm text-white/80">
                                    <div className="font-medium">PUC Minas</div>
                                    <div className="text-white/60">{t('hero.puc.course')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src={m2cDigitalLogo} alt="M2C Digital" width={36} height={36} className="..." />
                                <div className="text-sm text-white/80">
                                    <div className="font-medium">M2C Digital</div>
                                    <div className="text-white/60">{t('hero.m2c.role')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container da imagem com responsividade ajustada */}
                    <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 md:h-85 md:w-85 order-1 md:order-2 md:-translate-y-18">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-600/40 to-fuchsia-500/30 blur-2xl" />
                        <div className="relative rounded-3xl border border-white/10 bg-black/30 p-1 backdrop-blur">
                            <Image src={profilePhoto} alt="João Marcelo" width={640} height={640} className="rounded-xl" />
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}