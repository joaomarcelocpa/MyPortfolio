import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText } from "lucide-react"

type Article = {
    id: string
    title: string
    description: string
    pdfUrl: string
}

interface ArticleCardProps {
    article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
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