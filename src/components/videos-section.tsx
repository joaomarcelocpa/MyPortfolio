import Section from "@/components/section"
import Reveal from "@/components/reveal"
import VideoCard from "./video-card"

type Video = {
    id: string
    title: string
    youtubeId: string
    description: string
}

const videos: Video[] = [
    {
        id: "vid-1",
        title: "Vídeo de apresentação - Fabiana Móveis",
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

interface VideosSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function VideosSection({ sectionRef }: VideosSectionProps) {
    return (
        <Section id="videos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Vídeos</h2>
                    <p className="text-white/70">Meu conteúdo produzido no YouTube:</p>
                </header>
                <div className="grid gap-6 md:grid-cols-2">
                    {videos.map((v) => (
                        <VideoCard key={v.id} video={v} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}