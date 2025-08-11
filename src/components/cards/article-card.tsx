import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText, ExternalLink, Eye } from "lucide-react"

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
        <Card className="group cursor-pointer overflow-hidden border-white/10 bg-white/5 transition hover:border-violet-500/40">
            {/* Preview do PDF */}
            <div className="relative aspect-[4/3] bg-white/5 border-b border-white/10">
                <iframe
                    src={`${article.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&zoom=50`}
                    className="w-full h-full pointer-events-none"
                    title={`Preview de ${article.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1">
                    <div className="flex items-center gap-1 text-xs text-white">
                        <FileText className="h-3 w-3" />
                        PDF
                    </div>
                </div>
            </div>

            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                    {article.title}
                </CardTitle>
                <CardDescription className="text-white/70 mt-3">{article.description}</CardDescription>
            </CardHeader>

            <CardContent className="pb-6">
                <div className="flex gap-2">
                    {/* Botão para abrir modal com PDF completo */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="flex-1 border-white/15 text-white hover:bg-white/10 bg-transparent"
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                Visualizar
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl max-h-[90vh] bg-black/80 text-white backdrop-blur border-white/10">
                            <DialogHeader>
                                <DialogTitle className="text-left">{article.title}</DialogTitle>
                            </DialogHeader>
                            <div className="w-full h-[70vh] min-h-[500px]">
                                <iframe
                                    src={article.pdfUrl}
                                    className="w-full h-full rounded-md border border-white/10"
                                    title={article.title}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Botão para abrir PDF em nova aba */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0 border-white/15 text-white hover:bg-white/10"
                        asChild
                    >
                        <a href={article.pdfUrl} target="_blank" rel="noreferrer" aria-label="Abrir PDF em nova aba">
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}