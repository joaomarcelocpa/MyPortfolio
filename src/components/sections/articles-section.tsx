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
        title: "Clean Architecture aplicada ao Front-end",
        description: "Princípios e exemplos práticos.",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
        id: "art-2",
        title: "Otimizando performance em aplicações React",
        description: "Estratégias de memoização e suspense.",
        pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
]

interface ArticlesSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ArticlesSection({ sectionRef }: ArticlesSectionProps) {
    return (
        <Section id="artigos" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Artigos</h2>
                    <p className="text-white/70">Leituras que escrevi — abrem em modal (PDF).</p>
                </header>
                <div className="grid gap-6 md:grid-cols-2">
                    {articles.map((a) => (
                        <ArticleCard key={a.id} article={a} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}