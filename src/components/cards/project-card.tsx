// src/components/cards/project-card.tsx
import Image from "next/image"
import type { StaticImageData } from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowUpRight, Code2, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

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
    const { t } = useLanguage()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden bg-white/5 transition-all duration-300 border-transparent hover:border-violet-500/20 hover:shadow-2xl hover:shadow-violet-500/10">
                    <div className="relative overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1120}
                            height={640}
                            className="aspect-video w-full object-cover transition-all duration-500 group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
                                <ArrowUpRight className="h-4 w-4 text-white" />
                            </div>
                        </div>
                    </div>
                    <CardHeader className="pb-4">
                        <CardTitle className="text-white group-hover:text-white transition-colors duration-300">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-white/70 leading-relaxed">
                            {project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} className="bg-violet-600/70 hover:bg-violet-600 text-xs font-medium px-2 py-1">
                                    {tag}
                                </Badge>
                            ))}
                            {project.tags.length > 3 && (
                                <Badge className="bg-white/10 text-white/60 text-xs font-medium px-2 py-1">
                                    +{project.tags.length - 3}
                                </Badge>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </DialogTrigger>

            <AnimatePresence>
                <DialogContent className="max-w-3xl bg-gradient-to-br from-slate-900/98 via-slate-800/95 to-slate-900/98 backdrop-blur-xl border border-white/10 text-white overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                            scale: { duration: 0.3 }
                        }}
                        className="relative"
                    >
                        {/* Header com gradiente */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent pointer-events-none" />

                        <DialogHeader className="space-y-3 pb-4 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                className="flex items-center gap-3"
                            >
                                <div className="bg-violet-500/20 p-2 rounded-lg">
                                    <Code2 className="h-4 w-4 text-violet-400" />
                                </div>
                                <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15, duration: 0.4 }}
                            >
                                <DialogTitle className="text-xl font-semibold text-white">
                                    {project.title}
                                </DialogTitle>
                                <p className="text-slate-300 leading-relaxed mt-2 text-sm">
                                    {project.description}
                                </p>
                            </motion.div>
                        </DialogHeader>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Imagem em destaque */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-md relative">
                                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-1">
                                        <div className="bg-black/40 rounded-lg overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={400}
                                                height={240}
                                                className="w-full h-auto object-contain rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Conteúdo principal */}
                            <div className="grid lg:grid-cols-3 gap-6">
                                {/* Detalhes do projeto */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="lg:col-span-2 space-y-4"
                                >
                                    <div className="relative">
                                        <div className="absolute -left-1 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-violet-600 rounded-full" />
                                        <div className="pl-5">
                                            <h3 className="text-base font-medium text-white mb-3">
                                                {t('projects.about.title')}
                                            </h3>
                                            <p className="text-slate-300 leading-relaxed text-sm">
                                                {project.details}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Sidebar com tecnologias e ações */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                    className="space-y-4"
                                >
                                    {/* Tecnologias */}
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                        <h3 className="text-base font-medium text-white mb-3 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-violet-500 rounded-full" />
                                            {t('projects.technologies')}
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag, index) => (
                                                <motion.div
                                                    key={tag}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                                                >
                                                    <Badge className="bg-gradient-to-r from-violet-600/80 to-violet-600/80 hover:from-violet-600 hover:to-violet-600 text-white text-xs font-medium px-2.5 py-1 transition-all duration-200">
                                                        {tag}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botão de ação */}
                                    {project.link && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.45, duration: 0.4 }}
                                        >
                                            <Button
                                                asChild
                                                className="w-full bg-gradient-to-r from-violet-600 to-violet-600 hover:from-violet-700 hover:to-violet-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/25 group text-sm"
                                            >
                                                <a href={project.link} target="_blank" rel="noreferrer">
                                                    <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
                                                    {t('projects.view.project')}
                                                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                                </a>
                                            </Button>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </DialogContent>
            </AnimatePresence>
        </Dialog>
    )
}