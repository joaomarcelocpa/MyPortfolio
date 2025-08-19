import Image from "next/image"
import type { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

type Project = {
    id: string
    title: string
    description: string
    tags: string[]
    image: string | StaticImageData
    link?: string
    details: string
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-white/5 transition border-transparent">
                    <div className="relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1120}
                            height={640}
                            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.05]"
                        />
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
            <DialogContent className="max-w-3xl bg-slate-900/95 backdrop-blur-sm border-slate-600/30 text-white">
                <DialogHeader className="space-y-2 pb-4">
                    <DialogTitle className="text-2xl font-semibold text-white">
                        {project.title}
                    </DialogTitle>
                    <p className="text-slate-300 leading-relaxed">
                        {project.description}
                    </p>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Imagem com tamanho reduzido mas sem corte */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={360}
                                className="w-full h-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Layout com duas colunas */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Coluna esquerda - Detalhes */}
                        <div className="md:col-span-2">
                            <div className="border-l-4 border-violet-500 pl-4">
                                <h3 className="text-lg font-medium text-white mb-3">
                                    Sobre o Projeto:
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {project.details}
                                </p>
                            </div>
                        </div>

                        {/* Coluna direita - Tecnologias */}
                        <div className="space-y-4">
                            <div>

                                <h3 className="text-lg font-medium text-white mb-3 tracking-wide">
                                    Tecnologias:
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium px-3 py-1"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Botão de ação */}
                            {project.link && (
                                <Button
                                    asChild
                                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium mt-4"
                                >
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver Projeto
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}