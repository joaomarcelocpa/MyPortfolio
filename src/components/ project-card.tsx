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
                <Card className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 transition hover:border-violet-500/40 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.4)]">
                    <div className="relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1120}
                            height={640}
                            className="aspect-video w-full object-contain bg-white/5 transition duration-300 group-hover:scale-[1.02]"
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
                        src={project.image}
                        alt={project.title}
                        width={1120}
                        height={640}
                        className="aspect-video w-full rounded-lg object-contain bg-white/5"
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