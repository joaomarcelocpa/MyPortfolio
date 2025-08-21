// src/components/sections/projects-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import ProjectCard from "../cards/project-card"
import { useLanguage } from "@/contexts/language-context"
import logoEasyTraining from '../../../public/projects/logo-easytraining.png'
import logoGnosi from "../../../public/projects/logo-gnosi.png"
import logoFabianaMoveis from "../../../public/projects/logo-fabianam.png"
import logoM2CPainel from "../../../public/projects/logo-m2c.png"
import logoXulambs from "../../../public/projects/logo-xulambs.png"
import logoHuni from "../../../public/projects/logo-huni.png"
import type { StaticImageData } from "next/image"

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    image: string | StaticImageData
    link?: string
    details: string
}

interface ProjectsSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
    const { t } = useLanguage()

    const projects: Project[] = [
        {
            id: "proj-1",
            title: "Fabiana Móveis",
            description: t('project.fabiana.description'),
            tags: ["Next.js", "Nest.js", "Google Maps API", "PostgreSQL", "Amazon AWS"],
            image: logoFabianaMoveis,
            details: t('project.fabiana.details'),
        },
        {
            id: "proj-2",
            title: "Gnosi",
            description: t('project.gnosi.description'),
            tags: ["React.js", "Java SpringBoot", "PostgreSQL", "Microsoft Azure"],
            image: logoGnosi,
            details: t('project.gnosi.details'),
        },
        {
            id: "proj-3",
            title: "Easy Training",
            description: t('project.easytraining.description'),
            tags: ["HTML", "CSS", "JavaScript", "JSON"],
            image: logoEasyTraining,
            link: "https://easy-training-diogobrunoros-projects.vercel.app/",
            details: t('project.easytraining.details'),
        },
        {
            id: "proj-4",
            title: "M2C Painel",
            description: t('project.m2c.description'),
            tags: ["React.js", "Nest.js", "PostgreSQL", "MongoDB", "OpenSearch", "Amazon AWS"],
            image: logoM2CPainel,
            details: t('project.m2c.details'),
        },
        {
            id: "proj-5",
            title: "Huni BR",
            description: t('project.huni.description'),
            tags: ["React.js", "Nest.js", "PostgreSQL", "MongoDB", "OpenSearch", "Amazon AWS"],
            image: logoHuni,
            details: t('project.huni.details'),
        },
        {
            id: "proj-6",
            title: "Java Parking",
            description: t('project.parking.description'),
            tags: ["Java", "Java FX", "PostgreSQL", "Microsoft Azure"],
            image: logoXulambs,
            link: "https://github.com/joaomarcelocpa/JavaParking",
            details: t('project.parking.details'),
        },
    ]

    return (
        <Section id="projetos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
                    <p className="text-white/70">{t('projects.description')}</p>
                </header>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}