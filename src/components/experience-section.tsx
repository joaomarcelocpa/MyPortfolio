import Section from "@/components/section"
import Reveal from "@/components/reveal"
import SkillCard from "./skill-card"

const skills = [
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

interface ExperienceSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ExperienceSection({ sectionRef }: ExperienceSectionProps) {
    return (
        <Section id="experiencia" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Experiência</h2>
                    <p className="text-white/70">Linguagens, ferramentas e plataformas que utilizo.</p>
                </header>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((s) => (
                        <SkillCard key={s.name} name={s.name} logoUrl={s.url} />
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}