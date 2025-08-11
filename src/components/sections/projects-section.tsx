import Section from "@/components/section"
import Reveal from "@/components/reveal"
import ProjectCard from "../cards/project-card"
import logoEasyTraining from '../../../public/logo-easytraining.jpeg'
import logoGnosi from "../../../public/logo-gnosi.png"
import logoFabianaMoveis from "../../../public/logo-fabiana-moveis.png"
import logoM2CPainel from "../../../public/logo-m2c.png"
import logoXulambs from "../../../public/logo-xulambspark.jpeg"
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
    {
        id: "proj-4",
        title: "M2C Painel",
        description: "Plataforma de envio de SMS massivos e gestão de campanhas.",
        tags: ["React.js", "Nest.js", "PostgreSQL", "MongoDB", "OpenSearch" ,"Amazon AWS"],
        image: logoM2CPainel,
        details:
            "Aplicação web que promove fichas de academia gratuitas e personalizadas. Desenvolvida com tecnologias web fundamentais (HTML, CSS e JavaScript), oferece uma interface intuitiva para criação de treinos personalizados de acordo com as necessidades de cada usuário.",
    },
    {
        id: "proj-5",
        title: "Xulambs Park",
        description: "Sistema de gestão de parques de estacionamento e cobrança.",
        tags: ["Java", "Java FX ", "PostgreSQL", "Microsoft Azure"],
        image: logoXulambs,
        details:
            "Aplicação web que promove fichas de academia gratuitas e personalizadas. Desenvolvida com tecnologias web fundamentais (HTML, CSS e JavaScript), oferece uma interface intuitiva para criação de treinos personalizados de acordo com as necessidades de cada usuário.",
    },

]

interface ProjectsSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ProjectsSection({ sectionRef }: ProjectsSectionProps) {
    return (
        <Section id="projetos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Projetos</h2>
                    <p className="text-white/70">Meus projetos desenvolvidos durante a minha carreira:</p>
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