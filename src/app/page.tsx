"use client"

import type React from "react"

import Image from "next/image"
import type { StaticImageData } from "next/image"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, ExternalLink, FileText, PlayCircle, Rocket, Sparkles } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import pucMinasLogo from '../public/logo-pucminas.png'
import m2cDigitalLogo from '../public/logo-m2cdigital.png'
import galaxiaBackground from '../public/galaxia.jpg'
import profilePhoto from '../public/foto-perfil.jpg'
import logoEasyTraining from '../public/logo-easytraining.jpeg'
import logoGnosi from "../public/logo-gnosi.png"
import logoFabianaMoveis from "../public/logo-fabiana-moveis.png"


import Navbar from "@/components/navbar"
import Section from "@/components/section"
import Reveal from "@/components/reveal"
import StarsCanvas from "@/components/stars-canvas"
import BackToTop from "@/components/back-to-top"

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    image: string | StaticImageData
    link?: string
    details: string
}

type Video = {
    id: string
    title: string
    youtubeId: string
    description: string
}

type Article = {
    id: string
    title: string
    description: string
    pdfUrl: string
}

const projects: Project[] = [
    {
        id: "proj-1",
        title: "Fabiana Móveis",
        description: "Sistema de Gerenciamento de rotas de entrega com integração Google Maps API.",
        tags: ["Next.js", "Nest.js", "Google Maps API", "PostgreSQL", "Amazon AWS"],
        image: logoFabianaMoveis,
        details:
            "Sistema completo de gerenciamento de rotas de entrega desenvolvido para a empresa Fabiana Móveis e Eletro. O sistema conta com geração automática de rotas de entrega otimizadas através da API do Google Maps, melhorando a eficiência logística da empresa.",
    },
    {
        id: "proj-2",
        title: "Gnosi",
        description: "Plataforma de cursos voltada para compartilhamento de conteúdos de tecnologia.",
        tags: ["React.js", "Java Spring Boot", "PostgreSQL", "Microsoft Azure"],
        image: logoGnosi,
        details: "Plataforma educacional completa para cursos de tecnologia, organizada em módulos e aulas. Sistema robusto desenvolvido com React.js no frontend e Java Spring Boot no backend, proporcionando uma experiência de aprendizado estruturada e intuitiva.",
    },
    {
        id: "proj-3",
        title: "Easy Training",
        description: "Sistema de geração de fichas de treino personalizadas e gratuitas.",
        tags: ["HTML", "CSS", "JavaScript", "JSON"],
        image: logoEasyTraining,
        link: "https://easy-training-diogobrunoros-projects.vercel.app/",
        details:
            "Aplicação web que promove fichas de academia gratuitas e personalizadas. Desenvolvida com tecnologias web fundamentais (HTML, CSS e JavaScript), oferece uma interface intuitiva para criação de treinos personalizados de acordo com as necessidades de cada usuário.",
    },
]

const videos: Video[] = [
    {
        id: "vid-1",
        title: "Vídeo de apresentação - Fabiana Móveis",
        youtubeId: "4R1hQCg9AQ8",
        description: "Vídeo de Apresentação do projeto Fabiana Móveis, mostrando as funcionalidades principais da aplicação desenvolvida para otimizar as rotas de entrega da empresa.",
    },
    {
        id: "vid-2",
        title: "Vídeo de apresentação - Gnosi",
        youtubeId: "dG2RQ9XAAqE",
        description: "Vídeo de Apresentação do projeto Gnosi, mostrando as principais funcionalidades do software que simula uma plataforma de cursos online.",
    },
]

const articles: Article[] = [
    {
        id: "art-1",
        title: "Clean Architecture aplicada ao Front-end",
        description: "Princípios e exemplos práticos.",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
        id: "art-2",
        title: "Otimizando performance em aplicações React",
        description: "Estratégias de memoização e suspense.",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
]

// Tecnologias com logos via Devicon (CDN)
const skills = [
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

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

    // Scroll spy
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

    // Scroll progress bar
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 })

    const { toast } = useToast()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const name = data.get("name")
        toast({
            title: "Mensagem enviada!",
            description: `Obrigado, ${name || "visitante"} — retornarei em breve.`,
        })
        e.currentTarget.reset()
    }

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

            {/* Floating decorative orbs */}
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

            {/* Hero/Sobre */}
            <Section id="sobre" ref={refs.sobre?.ref as any} className="relative">
                <Reveal>
                    <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
                        <div className="space-y-6">
                            <Badge className="w-fit bg-violet-500 hover:bg-violet-500/90">
                                <Sparkles className="mr-2 h-3.5 w-3.5" />
                                Olá, eu sou
                            </Badge>
                            <h1 className="text-5xl font-extrabold tracking-tight sm:text-5xl">
                                João Marcelo Carvalho Pereira Araújo
                            </h1>
                            <p className="text-base leading-relaxed text-white/80">
                                Estudante de Engenharia de Software na PUC Minas e desenvolver full-stack na M2C Digital. Apaixonado por
                                programação, otimização e design de aplicações web modernas. Buscando sempre aprender e compartilhar conhecimento.
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button
                                    className="bg-violet-600 hover:bg-violet-600/90"
                                    onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    <Rocket className="mr-2 h-4 w-4" />
                                    Ver projetos
                                </Button>
                                <Button variant="outline" className="border-violet-500/50 text-white hover:bg-white/10 bg-transparent">
                                    <a href="mailto:joao@example.com" className="flex items-center">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Entrar em contato
                                    </a>
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
                            <div className="mt-4 flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Image src={pucMinasLogo} alt="PUC Minas" width={36} height={36} className="..." />
                                    <span className="text-sm text-white/80">PUC Minas  ㅤㅤㅤㅤㅤㅤEngenharia de Software</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src={m2cDigitalLogo} alt="M2C Digital" width={36} height={36} className="..." />
                                    <span className="text-sm text-white/80">M2C Digital ㅤㅤㅤㅤㅤ Desenvolvedor FullStack</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-52 w-52 sm:h-64 sm:w-64">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-600/40 to-fuchsia-500/30 blur-2xl" />
                            <div className="relative rounded-2xl border border-white/10 bg-black/30 p-1 backdrop-blur">
                                <Image src={profilePhoto} alt="João Marcelo" width={640} height={640} className="rounded-xl" />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* Projetos */}
            <Section id="projetos" ref={refs.projetos?.ref as any}>
                <Reveal>
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold">Projetos</h2>
                        <p className="text-white/70">Alguns trabalhos recentes — clique no card para ver detalhes.</p>
                    </header>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                </Reveal>
            </Section>

            {/* Vídeos */}
            <Section id="videos" ref={refs.videos?.ref as any}>
                <Reveal>
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold">Vídeos</h2>
                        <p className="text-white/70">Conteúdo do YouTube incorporado.</p>
                    </header>
                    <div className="grid gap-6 md:grid-cols-2">
                        {videos.map((v) => (
                            <VideoCard key={v.id} video={v} />
                        ))}
                    </div>
                </Reveal>
            </Section>

            {/* Artigos */}
            <Section id="artigos" ref={refs.artigos?.ref as any}>
                <Reveal>
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold">Artigos</h2>
                        <p className="text-white/70">Leituras que escrevi — abrem em modal (PDF).</p>
                    </header>
                    <div className="grid gap-6 md:grid-cols-2">
                        {articles.map((a) => (
                            <ArticleCard key={a.id} article={a} />
                        ))}
                    </div>
                </Reveal>
            </Section>

            {/* Experiência e Habilidades */}
            <Section id="experiencia" ref={refs.experiencia?.ref as any}>
                <Reveal>
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold">Experiência</h2>
                        <p className="text-white/70">Linguagens, ferramentas e plataformas que utilizo.</p>
                    </header>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {skills.map((s) => (
                            <SkillCard key={s.name} name={s.name} logoUrl={s.url} />
                        ))}
                    </div>
                </Reveal>
            </Section>

            {/* Contato */}
            <Section id="contato" ref={refs.contato?.ref as any}>
                <Reveal>
                    <header className="mb-6">
                        <h2 className="text-3xl font-bold">Contato</h2>
                        <p className="text-white/70">Vamos conversar? Envie uma mensagem.</p>
                    </header>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="bg-white/5 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-white">Fale comigo</CardTitle>
                                <CardDescription className="text-white/70">
                                    Este formulário exibe um feedback no app. Você também pode usar os botões ao lado.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-3" onSubmit={handleSubmit}>
                                    <Input
                                        name="name"
                                        placeholder="Seu nome"
                                        className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    />
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Seu e-mail"
                                        className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    />
                                    <Textarea
                                        name="message"
                                        placeholder="Sua mensagem"
                                        className="min-h-[120px] bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    />
                                    <div className="flex items-center gap-3">
                                        <Button type="submit" className="bg-violet-600 hover:bg-violet-600/90">
                                            Enviar
                                        </Button>
                                        <a
                                            className="text-sm text-violet-300 hover:underline"
                                            href={"mailto:joao@example.com?subject=Contato%20pelo%20portf%C3%B3lio"}
                                        >
                                            ou envie por e-mail
                                        </a>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/5 border-white/10">
                            <CardHeader>
                                <CardTitle className="text-white">Redes</CardTitle>
                                <CardDescription className="text-white/70">Links diretos</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <Button
                                    variant="outline"
                                    className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                    asChild
                                >
                                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                                        <Github className="mr-2 h-4 w-4" /> GitHub
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                    asChild
                                >
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </a>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                    asChild
                                >
                                    <a href="mailto:joao@example.com">
                                        <Mail className="mr-2 h-4 w-4" /> E-mail
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </Reveal>
            </Section>

            {/* Footer */}
            <footer className="relative z-10 px-4 py-12">
                <Separator className="mb-6 bg-white/10" />
                <div className="flex flex-col items-center gap-2 text-center text-sm text-white/60">
                    <div className="flex items-center gap-2">
                        <Image src={m2cDigitalLogo} alt="M2C Digital" width={36} height={36} className="..." />
                        <span>Desenvolvedor na M2C Digital</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={pucMinasLogo} alt="PUC Minas" width={36} height={36} className="..." />
                        <span>Estudante de Eng. Software • PUC Minas</span>
                    </div>
                    <span>© {new Date().getFullYear()} João Marcelo • Todos os direitos reservados.</span>
                </div>
            </footer>

            <BackToTop />

            <Toaster />
        </main>
    )
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 transition hover:border-violet-500/40 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.4)]">
                    <div className="relative">
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={1120}
                            height={640}
                            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-white">{project.title}</CardTitle>
                        <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((t) => (
                                <Badge key={t} className="bg-violet-600/70 hover:bg-violet-600">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-black/70 text-white backdrop-blur border-white/10">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={1120}
                        height={640}
                        className="aspect-video w-full rounded-lg object-cover"
                    />
                    <p className="text-white/80">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                            <Badge key={t} variant="secondary" className="bg-white/10 text-white">
                                {t}
                            </Badge>
                        ))}
                    </div>
                    {project.link && (
                        <Button asChild className="bg-violet-600 hover:bg-violet-600/90">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Ver Projeto
                            </a>
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

function VideoCard({ video }: { video: Video }) {
    return (
        <Card className="overflow-hidden border-white/10 bg-white/5">
            <div className="relative">
                <div className="aspect-video w-full">
                    <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                    <PlayCircle className="mr-1 inline h-3.5 w-3.5" />
                    YouTube
                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-white">{video.title}</CardTitle>
                <CardDescription className="text-white/70">{video.description}</CardDescription>
            </CardHeader>
        </Card>
    )
}

function ArticleCard({ article }: { article: Article }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 transition hover:border-violet-500/40">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-white">
                            <FileText className="h-5 w-5 text-violet-300" />
                            {article.title}
                        </CardTitle>
                        <CardDescription className="text-white/70">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <Button variant="outline" className="border-white/15 text-white hover:bg-white/10 bg-transparent">
                            Abrir PDF
                        </Button>
                    </CardContent>
                </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-black/80 text-white backdrop-blur border-white/10">
                <DialogHeader>
                    <DialogTitle>{article.title}</DialogTitle>
                </DialogHeader>
                <div className="aspect-[3/4] w-full">
                    <iframe title={article.title} src={article.pdfUrl} className="h-full w-full rounded-md" />
                </div>
            </DialogContent>
        </Dialog>
    )
}

function SkillCard({ name, logoUrl }: { name: string; logoUrl: string }) {
    return (
        <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-violet-500/40 hover:bg-white/[0.07]">
            <img
                src={logoUrl || "/placeholder.svg"}
                alt={`Logo ${name}`}
                width={28}
                height={28}
                className="h-7 w-7 rounded-sm object-contain"
            />
            <div className="flex-1">
                <div className="font-medium text-white">{name}</div>
                <div className="mt-2 h-1.5 w-full rounded bg-white/10">
                    <div className="h-1.5 rounded bg-gradient-to-r from-fuchsia-500 to-violet-600 transition-all duration-500 group-hover:w-[92%] w-4/5" />
                </div>
            </div>
        </div>
    )
}