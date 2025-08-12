interface SkillCardProps {
    name: string
    logoUrl: string
}

export default function SkillCard({ name, logoUrl }: SkillCardProps) {
    // Lista de ícones que precisam ficar brancos (ícones que são naturalmente pretos)
    const whiteIcons = ['GitHub', 'Draw.io']
    const shouldBeWhite = whiteIcons.includes(name)

    return (
        <div className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition hover:border-violet-500/40 hover:bg-white/[0.07]">
            <img
                src={logoUrl || "/placeholder.svg"}
                alt={`Logo ${name}`}
                width={28}
                height={28}
                className={`h-7 w-7 rounded-sm object-contain ${
                    shouldBeWhite ? 'brightness-0 invert' : ''
                }`}
            />
            <div className="flex-1">
                <div className="font-medium text-white">{name}</div>
                <div className="mt-2 h-1.5 w-full rounded bg-white/10">
                    <div className="h-1.5 rounded bg-gradient-to-r from-fuchsia-500 to-violet-600 transition-all duration-500 group-hover:w-[92%] w-4/5" />
                </div>
            </div>
        </div>
    )
}