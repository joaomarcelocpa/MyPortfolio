import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Github, Instagram, Linkedin, Mail} from "lucide-react"
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import { useToast } from "@/hooks/use-toast"
import type React from "react"

interface ContactSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ sectionRef }: ContactSectionProps) {
    const { toast } = useToast()

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const name = data.get("name")
        toast({
            title: "Mensagem enviada!",
            description: `Obrigado, ${name || "visitante"} — retornarei em breve.`,
        })
        e.currentTarget.reset()
    }

    return (
        <Section id="contato" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Contato</h2>
                    <p className="text-white/70">Vamos conversar? Envie uma mensagem.</p>
                </header>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Fale comigo</CardTitle>
                            <CardDescription className="text-white/70">
                                Este formulário exibe um feedback no app. Você também pode usar os botões ao lado.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <Input
                                    name="name"
                                    placeholder="Seu nome"
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Sua mensagem"
                                    className="min-h-[120px] bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <div className="flex items-center gap-3">
                                    <Button type="submit" className="bg-violet-600 hover:bg-violet-600/90">
                                        Enviar
                                    </Button>
                                    <a
                                        className="text-sm text-violet-300 hover:underline"
                                        href={"mailto:joao@example.com?subject=Contato%20pelo%20portf%C3%B3lio"}
                                    >
                                        ou envie por e-mail
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Redes Sociais</CardTitle>
                            <CardDescription className="text-white/70">Links diretos</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://instagram.com/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://github.com/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://www.linkedin.com/in/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="joaomarcelocpa0303@gmail.com">
                                    <Mail className="mr-2 h-4 w-4" /> E-mail
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </Section>
    )
}