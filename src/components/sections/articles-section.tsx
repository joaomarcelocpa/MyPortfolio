// src/components/sections/articles-section.tsx
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import ArticleCard from "../cards/article-card"
import { useLanguage } from "@/contexts/language-context"

type Article = {
    id: string
    title: string
    description: string
    pdfUrl: string
}

interface ArticlesSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ArticlesSection({ sectionRef }: ArticlesSectionProps) {
    const { t } = useLanguage()

    const articles: Article[] = [
        {
            id: "art-1",
            title: t('articles.ai.title'),
            description: t('articles.ai.description'),
            pdfUrl: "/articles/artigo.pdf",
        }
    ]

    return (
        <Section id="artigos" ref={sectionRef}>
            <Reveal>
                <header className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">{t('articles.title')}</h2>
                    <p className="text-white/70 text-lg">
                        {t('articles.description')}
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