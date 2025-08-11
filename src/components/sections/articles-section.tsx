import Section from "@/components/section"
import Reveal from "@/components/reveal"
import ArticleCard from "../cards/article-card"

type Article = {
    id: string
    title: string
    description: string
    pdfUrl: string
}

const articles: Article[] = [
    {
        id: "art-1",
        title: "Análise da Precisão de IAs Generativas na Resolução de Equações Matemáticas",
        description: "Este trabalho investiga o desempenho de sistemas de inteligência artificial generativa na resolução de equações matemáticas complexas, com foco em integrais de diferentes níveis de dificuldade.",
        pdfUrl: "/artigo.pdf",
    }
]

interface ArticlesSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ArticlesSection({ sectionRef }: ArticlesSectionProps) {
    return (
        <Section id="artigos" ref={sectionRef}>
            <Reveal>
                <header className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Artigos</h2>
                    <p className="text-white/70 text-lg">
                        Artigos técnicos que escrevi sobre desenvolvimento, arquitetura e boas práticas.
                    </p>
                </header>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}