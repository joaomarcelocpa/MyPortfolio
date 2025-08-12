"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Mail, Loader2 } from "lucide-react"
import Section from "@/components/section"
import Reveal from "@/components/reveal"
import { useToast } from "@/hooks/use-toast"
import { sendEmail, type EmailData } from "@/lib/emailjs"
import type React from "react"
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ sectionRef }: ContactSectionProps) {

    const testEmailJS = async () => {
        try {
            const response = await emailjs.send(
                'service_fhm8ren',
                'template_5hnttkc',
                {
                    from_name: 'Joao Marcelo',
                    from_email: 'joaomarcelocpa1010@gmail.com',
                    message: 'Mensagem de teste',
                    to_email: 'joaomarcelocpa0303@gmail.com',
                },
                'X0VIQJAw7cCy4okKR'
            );
            console.log('Teste OK:', response);
            alert('Teste funcionou!');
        } catch (error) {
            console.error('Teste falhou:', error);
            alert('Teste falhou: ' + error);
        }
    };


    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const emailData: EmailData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        }

        // Validação básica
        if (!emailData.name || !emailData.email || !emailData.message) {
            toast({
                title: "Erro!",
                description: "Por favor, preencha todos os campos.",
                variant: "destructive",
            })
            setIsLoading(false)
            return
        }

        try {
            const success = await sendEmail(emailData)

            if (success) {
                toast({
                    title: "Mensagem enviada!",
                    description: `Obrigado, ${emailData.name}! Retornarei em breve.`,
                })
                e.currentTarget.reset()
            } else {
                throw new Error("Falha no envio")
            }
        } catch (error) {
            console.error("Erro ao enviar email:", error)
            toast({
                title: "Erro ao enviar!",
                description: "Tente novamente ou use um dos links diretos abaixo.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Section id="contato" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">Contato</h2>
                    <p className="text-white/70">Vamos conversar? Envie uma mensagem.</p>
                </header>

                <button onClick={testEmailJS}>Teste EmailJS</button>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Fale comigo</CardTitle>
                            <CardDescription className="text-white/70">
                                Envie sua mensagem diretamente para meu email. Respondo em até 24 horas!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <Input
                                    name="name"
                                    placeholder="Seu nome"
                                    required
                                    disabled={isLoading}
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="Seu e-mail"
                                    required
                                    disabled={isLoading}
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <Textarea
                                    name="message"
                                    placeholder="Sua mensagem"
                                    required
                                    disabled={isLoading}
                                    className="min-h-[120px] bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                />
                                <div className="flex items-center gap-3">
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-violet-600 hover:bg-violet-600/90 disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="mr-2 h-4 w-4" />
                                                Enviar
                                            </>
                                        )}
                                    </Button>
                                    <a
                                        className="text-sm text-violet-300 hover:underline"
                                        href={"mailto:joaomarcelocpa0303@gmail.com?subject=Contato%20pelo%20portf%C3%B3lio"}
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
                                <a href="mailto:joaomarcelocpa0303@gmail.com">
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