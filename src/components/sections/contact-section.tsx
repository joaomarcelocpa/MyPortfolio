import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Mail, Send, AlertCircle } from "lucide-react"
import Section from "@/components/layout/section"
import Reveal from "@/components/layout/reveal"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { EMAILJS_CONFIG, validateEmailJSConfig } from "@/lib/emailjs"
import emailjs from '@emailjs/browser'
import type React from "react"
import { useState } from "react"

interface ContactSectionProps {
    sectionRef: React.RefObject<HTMLElement>
}

export default function ContactSection({ sectionRef }: ContactSectionProps) {
    const { toast } = useToast()
    const { t } = useLanguage()
    const [isLoading, setIsLoading] = useState(false)

    const isEmailJSConfigured = validateEmailJSConfig()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        const name = formData.get("name") as string || ""
        const email = formData.get("email") as string || ""
        const message = formData.get("message") as string || ""

        if (!name.trim() || !email.trim() || !message.trim()) {
            toast({
                title: t('toast.error.title') || "Erro",
                description: t('toast.error.required.fields') || "Por favor, preencha todos os campos obrigatórios.",
                variant: "destructive"
            })
            setIsLoading(false)
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            toast({
                title: t('toast.error.title') || "Erro",
                description: t('toast.error.invalid.email') || "Por favor, insira um email válido.",
                variant: "destructive"
            })
            setIsLoading(false)
            return
        }

        if (!isEmailJSConfigured) {
            toast({
                title: t('toast.error.title') || "Erro",
                description: "EmailJS não está configurado. Use o email direto.",
                variant: "destructive"
            })
            setIsLoading(false)
            return
        }

        try {
            const templateParams = {
                user_name: name,
                user_email: email,
                message: message,
                to_name: 'João Marcelo',
                reply_to: email,
                from_name: name
            }

            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            )

            console.log('Email enviado com sucesso:', result.text)

            toast({
                title: t('toast.message.sent'),
                description: name
                    ? t('toast.message.thanks').replace('{name}', name)
                    : t('toast.message.thanks.default'),
            })

            form.reset()

        } catch (error) {
            console.error('Erro ao enviar email:', error)

            toast({
                title: t('toast.error.title') || "Erro",
                description: t('toast.error.send.failed') || "Erro ao enviar mensagem. Tente novamente ou use o email direto.",
                variant: "destructive"
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Section id="contato" ref={sectionRef}>
            <Reveal>
                <header className="mb-6">
                    <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
                    <p className="text-white/70">{t('contact.description')}</p>
                </header>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2">
                                {t('contact.form.title')}
                                {!isEmailJSConfigured && (
                                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                                )}
                            </CardTitle>
                            <CardDescription className="text-white/70">
                                {isEmailJSConfigured
                                    ? t('contact.form.description')
                                    : "EmailJS não configurado. Use o email direto ou configure as variáveis de ambiente."
                                }
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <Input
                                    name="name"
                                    placeholder={t('contact.form.name')}
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    required
                                    disabled={isLoading}
                                />
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder={t('contact.form.email')}
                                    className="bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    required
                                    disabled={isLoading}
                                />
                                <Textarea
                                    name="message"
                                    placeholder={t('contact.form.message')}
                                    className="min-h-[120px] bg-black/30 border-white/10 text-white placeholder:text-white/40"
                                    required
                                    disabled={isLoading}
                                />
                                <div className="flex items-center gap-3">
                                    <Button
                                        type="submit"
                                        className="bg-violet-600 hover:bg-violet-600/90"
                                        disabled={isLoading || !isEmailJSConfigured}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                                                {t('contact.form.sending') || 'Enviando...'}
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                {t('contact.form.send')}
                                            </>
                                        )}
                                    </Button>
                                    <a
                                        className="text-sm text-violet-300 hover:underline"
                                        href={`mailto:joaomarcelocpa0303@gmail.com?subject=${encodeURIComponent('Contato pelo portfólio')}&body=${encodeURIComponent('Olá João Marcelo,\n\nGostaria de entrar em contato.\n\nAtenciosamente,\n')}`}
                                    >
                                        {t('contact.form.email.link')}
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">{t('contact.social.title')}</CardTitle>
                            <CardDescription className="text-white/70">{t('contact.social.description')}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3">
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://instagram.com/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Instagram className="mr-2 h-4 w-4" /> {t('contact.social.instagram')}
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://github.com/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> {t('contact.social.github')}
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="https://www.linkedin.com/in/joaomarcelocpa/" target="_blank" rel="noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" /> {t('contact.social.linkedin')}
                                </a>
                            </Button>
                            <Button
                                variant="outline"
                                className="justify-start border-white/15 text-white hover:bg-white/10 bg-transparent"
                                asChild
                            >
                                <a href="mailto:joaomarcelocpa0303@gmail.com">
                                    <Mail className="mr-2 h-4 w-4" /> {t('contact.social.email')}
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </Section>
    )
}