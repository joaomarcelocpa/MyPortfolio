// src/components/cards/video-card.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Video = {
    id: string
    title: string
    youtubeId: string
    description: string
}

interface VideoCardProps {
    video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
    const { t } = useLanguage()

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
                    {t('videos.youtube')}
                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-white">{video.title}</CardTitle>
                <CardDescription className="text-white/70">{video.description}</CardDescription>
            </CardHeader>
        </Card>
    )
}