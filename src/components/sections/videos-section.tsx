// src/components/sections/videos-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import VideoCard from "../cards/video-card"
import { useLanguage } from "@/contexts/language-context"

type Video = {
    id: string
    title: string
    youtubeId: string
    description: string
}

interface VideosSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function VideosSection({ sectionRef }: VideosSectionProps) {
    const { t } = useLanguage()

    const videos: Video[] = [
        {
            id: "vid-1",
            title: t('videos.fabiana.title'),
            youtubeId: "4R1hQCg9AQ8",
            description: t('videos.fabiana.description'),
        },
        {
            id: "vid-2",
            title: t('videos.gnosi.title'),
            youtubeId: "dG2RQ9XAAqE",
            description: t('videos.gnosi.description'),
        },
    ]

    return (
        <Section id="videos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">{t('videos.title')}</h2>
                    <p className="text-white/70">{t('videos.description')}</p>
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