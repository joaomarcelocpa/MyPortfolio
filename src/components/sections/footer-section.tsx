// src/components/sections/footer-section.tsx
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import pucMinasLogo from '../../../public/logos/logo-pucminas.png'
import m2cDigitalLogo from '../../../public/logos/logo-m2cdigital.png'

export default function FooterSection() {
    const { t } = useLanguage()

    return (
        <footer className="relative z-10 px-4 py-12">
            <Separator className="mb-8 bg-white/10" />
            <div className="mx-auto max-w-4xl text-center">
                {/* Informações profissionais e acadêmicas */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-4">
                    <div className="flex items-center gap-3">
                        <Image src={m2cDigitalLogo} alt="M2C Digital" width={32} height={32} className="rounded-sm" />
                        <span className="text-sm text-white/70">{t('footer.developer')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image src={pucMinasLogo} alt="PUC Minas" width={32} height={32} className="rounded-sm" />
                        <span className="text-sm text-white/70">{t('footer.student')}</span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-xs text-white/50 mt-6">
                    © {new Date().getFullYear()} João Marcelo • {t('footer.rights')}
                </div>
            </div>
        </footer>
    )
}