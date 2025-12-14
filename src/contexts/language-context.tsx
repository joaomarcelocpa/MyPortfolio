"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Dicionários de tradução
const translations = {
    pt: {
        // Navbar
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.videos': 'Vídeos',
        'nav.articles': 'Artigos',
        'nav.experience': 'Experiência',
        'nav.contact': 'Contato',
        'nav.menu': 'Menu',
        'nav.close': 'Fechar',
        'nav.profile.title': 'Software Engineer and Developer',

        // Hero Section
        'hero.badge': 'Olá, eu sou',
        'hero.description': 'Estudante de Engenharia de Software na PUC Minas e desenvolvedor full-stack na M2C Digital. Apaixonado por programação, otimização e design de aplicações web modernas. Buscando sempre aprender e compartilhar conhecimento.',
        'hero.view.projects': 'Ver projetos',
        'hero.contact': 'Entrar em contato',
        'hero.puc.course': 'Engenharia de Software',
        'hero.m2c.role': 'Desenvolvedor FullStack',

        // Projects Section
        'projects.title': 'Projetos',
        'projects.description': 'Meus projetos desenvolvidos durante a minha jornada:',
        'projects.view.project': 'Ver Projeto',
        'projects.about.title': 'Sobre o Projeto',
        'projects.technologies': 'Tecnologias',

        // Project Details
        'project.fabiana.description': 'Sistema de Gerenciamento de rotas de entrega com integração Google Maps API.',
        'project.fabiana.details': 'Sistema completo de gerenciamento de rotas de entrega desenvolvido para a empresa Fabiana Móveis e Eletro. O sistema conta com geração automática de rotas de entrega otimizadas através da API do Google Maps, melhorando a eficiência logística da empresa.',

        'project.gnosi.description': 'Plataforma de cursos voltada para compartilhamento de conteúdos de tecnologia.',
        'project.gnosi.details': 'Plataforma educacional completa para cursos de tecnologia, organizada em módulos e aulas. Sistema robusto desenvolvido com React.js no frontend e Java Spring Boot no backend, proporcionando uma experiência de aprendizado estruturada e intuitiva.',

        'project.easytraining.description': 'Sistema de geração de fichas de treino personalizadas e gratuitas.',
        'project.easytraining.details': 'Aplicação web que promove fichas de academia gratuitas e personalizadas. Desenvolvida com tecnologias web fundamentais (HTML, CSS e JavaScript), oferece uma interface intuitiva para criação de treinos personalizados de acordo com as necessidades de cada usuário.',

        'project.m2c.description': 'Plataforma de controle e gestão de recursos para campanhas de mensagens SMS.',
        'project.m2c.details': 'Sistema avançado de gestão de campanhas SMS com recursos de controle de recursos, relatórios detalhados e análise de performance. Desenvolvido com tecnologias modernas para garantir escalabilidade e eficiência.',

        'project.huni.description': 'Plataforma de revenda e envio de mensagens SMS massivos',
        'project.huni.details': 'Plataforma robusta para revenda de SMS com recursos de envio em massa, gestão de clientes e relatórios detalhados. Sistema desenvolvido para alta performance e confiabilidade.',

        'project.parking.description': 'Sistema de gestão de parques de estacionamento e cobrança.',
        'project.parking.details': 'Sistema desktop para gestão completa de estacionamentos, incluindo controle de entrada/saída, cálculo automático de tarifas e relatórios gerenciais. Desenvolvido em Java com interface JavaFX.',

        'project.scheilla.description': 'Sistema de gestão de doações e promoção de eventos de um centro espírita',
        'project.scheilla.details': 'Sistema de gestão abrangente desenvolvido para o Grupo Espírita Scheilla, um centro espírita. O software inclui funcionalidades para agendamento de eventos, gerenciamento de membros e promoção de conteúdos, aprimorando a eficiência operacional e o engajamento da comunidade do centro.',

        'project.virtus.title': 'Virtus Moeda Estudantil',
        'project.virtus.description': 'Plataforma de trocas de moedas estudantil para alunos e instituições de ensino.',
        'project.virtus.details': 'Sistema completo de moeda estudantil desenvolvido para alunos, professores e empresas, permitindo a gestão de vantagens e transações entre alunos, professores e estabelecimentos parceiros. A plataforma visa incentivar o mérito estudantil dentro do ambiente acadêmico.',

        'project.rentalcar.description': 'Sistema de gestão de locadora de veículos com controle de frota e reservas.',
        'project.rentalcar.details': 'Aplicação web para gestão de serviços de locação de veículos, incluindo gerenciamento de frota, sistema de reservas e gestão de clientes. Desenvolvido com tecnologias web modernas para proporcionar uma experiência eficiente e amigável.',

        // Videos Section
        'videos.title': 'Vídeos',
        'videos.description': 'Meu conteúdo produzido no YouTube:',
        'videos.youtube': 'YouTube',
        'videos.fabiana.title': 'Vídeo de apresentação - Fabiana Móveis',
        'videos.fabiana.description': 'Vídeo de apresentação do projeto Fabiana Móveis, mostrando as funcionalidades principais da aplicação desenvolvida para otimizar as rotas de entrega da empresa.',
        'videos.gnosi.title': 'Vídeo de apresentação - Gnosi',
        'videos.gnosi.description': 'Vídeo de apresentação do projeto Gnosi, mostrando as principais funcionalidades do desenvolvimento do software da plataforma de ensino e cursos online gratuita.',
        'videos.gruposcheilla.title': 'Vídeo de apresentação - Grupo Espírita Scheilla',
        'videos.gruposcheilla.description': 'Vídeo de apresentação do projeto Grupo Espírita Scheilla, detalhando as funcionalidades e o impacto do software desenvolvido para a gestão e promoção do centro espírita.',

        // Articles Section
        'articles.title': 'Artigos',
        'articles.description': 'Artigos científicos e trabalhos de pesquisa que participei:',
        'articles.view': 'Visualizar',
        'articles.pdf': 'PDF',
        'articles.open.tab': 'Abrir PDF em nova aba',
        'articles.ai.title': 'Análise da Precisão de IAs Generativas na Resolução de Equações Matemáticas',
        'articles.ai.description': 'Este trabalho investiga o desempenho de sistemas de inteligência artificial generativa na resolução de equações matemáticas, com foco em integrais de diferentes níveis de dificuldade',

        // Experience Section
        'experience.title': 'Experiência',
        'experience.description': 'Linguagens, ferramentas e plataformas que utilizo:',

        // Contact Section
        'contact.title': 'Contato',
        'contact.description': 'Vamos conversar? Envie uma mensagem.',
        'contact.form.title': 'Fale comigo',
        'contact.form.description': 'Envie uma mensagem diretamente para meu email.',
        'contact.form.name': 'Seu nome',
        'contact.form.email': 'Seu e-mail',
        'contact.form.message': 'Sua mensagem',
        'contact.form.send': 'Enviar Mensagem',
        'contact.form.sending': 'Enviando...',
        'contact.form.email.link': 'ou envie por e-mail',
        'contact.social.title': 'Redes Sociais',
        'contact.social.description': 'Links diretos',
        'contact.social.instagram': 'Instagram',
        'contact.social.github': 'GitHub',
        'contact.social.linkedin': 'LinkedIn',
        'contact.social.email': 'E-mail',

        // Footer
        'footer.developer': 'Desenvolvedor • M2C Digital',
        'footer.student': 'Engenharia de Software • PUC Minas',
        'footer.rights': 'Todos os direitos reservados.',

        // Toast Messages
        'toast.message.sent': 'Mensagem enviada com sucesso!',
        'toast.message.thanks': 'Obrigado, {name}! Entrarei em contato em breve.',
        'toast.message.thanks.default': 'Obrigado! Entrarei em contato em breve.',
        'toast.error.title': 'Erro',
        'toast.error.required.fields': 'Por favor, preencha todos os campos obrigatórios.',
        'toast.error.invalid.email': 'Por favor, insira um email válido.',
        'toast.error.send.failed': 'Erro ao enviar mensagem. Tente novamente ou use o email direto.',

        // Back to Top
        'back.to.top': 'Voltar ao topo',

        // Language Selector
        'language.portuguese': 'Português',
        'language.english': 'English',
    },
    en: {
        // Navbar
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.videos': 'Videos',
        'nav.articles': 'Articles',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'nav.menu': 'Menu',
        'nav.close': 'Close',
        'nav.profile.title': 'Software Engineer and Developer',

        // Hero Section
        'hero.badge': 'Hello, I am',
        'hero.description': 'Software Engineering student at PUC Minas and full-stack developer at M2C Digital. Passionate about programming, optimization and modern web application design. Always seeking to learn and share knowledge.',
        'hero.view.projects': 'View projects',
        'hero.contact': 'Get in touch',
        'hero.puc.course': 'Software Engineering',
        'hero.m2c.role': 'FullStack Developer',

        // Projects Section
        'projects.title': 'Projects',
        'projects.description': 'My projects developed during my journey:',
        'projects.view.project': 'View Project',
        'projects.about.title': 'About the Project',
        'projects.technologies': 'Technologies',

        // Project Details
        'project.fabiana.description': 'Delivery route management system with Google Maps API integration.',
        'project.fabiana.details': 'Complete delivery route management system developed for Fabiana Móveis e Eletro company. The system features automatic generation of optimized delivery routes through Google Maps API, improving the company\'s logistics efficiency.',

        'project.gnosi.description': 'Course platform focused on sharing technology content.',
        'project.gnosi.details': 'Complete educational platform for technology courses, organized in modules and classes. Robust system developed with React.js on the frontend and Java Spring Boot on the backend, providing a structured and intuitive learning experience.',

        'project.easytraining.description': 'Personalized and free workout plan generation system.',
        'project.easytraining.details': 'Web application that provides free and personalized gym workout plans. Developed with fundamental web technologies (HTML, CSS and JavaScript), it offers an intuitive interface for creating customized workouts according to each user\'s needs.',

        'project.m2c.description': 'Control and resource management platform for SMS message campaigns.',
        'project.m2c.details': 'Advanced SMS campaign management system with resource control features, detailed reports and performance analysis. Developed with modern technologies to ensure scalability and efficiency.',

        'project.huni.description': 'SMS resale and mass messaging platform',
        'project.huni.details': 'Robust platform for SMS resale with mass sending features, customer management and detailed reports. System developed for high performance and reliability.',

        'project.parking.description': 'Parking lot management and billing system.',
        'project.parking.details': 'Desktop system for complete parking management, including entry/exit control, automatic fare calculation and management reports. Developed in Java with JavaFX interface.',

        'project.scheilla.description': 'Donation management and event promotion system for a Spiritist center.',
        'project.scheilla.details': 'Comprehensive management system developed for Grupo Espírita Scheilla, a spiritist center. The software includes features for event scheduling, member management, and content promotion, enhancing the center\'s operational efficiency and community engagement.',

        'project.virtus.title': 'Virtus Student Currency',
        'project.virtus.description': 'Student currency exchange platform for students and educational institutions.',
        'project.virtus.details': 'Complete student currency system developed for students, teachers and companies, allowing the management of benefits and transactions between students, teachers and partner establishments. The platform aims to encourage student merit within the academic environment.',

        'project.rentalcar.description': 'Car rental management system with fleet control and reservation features.',
        'project.rentalcar.details': 'Web application for managing car rental services, including fleet management, reservation system, and customer management. Developed with modern web technologies to provide an efficient and user-friendly experience.',

        // Videos Section
        'videos.title': 'Videos',
        'videos.description': 'My content produced on YouTube:',
        'videos.youtube': 'YouTube',
        'videos.fabiana.title': 'Presentation video - Fabiana Móveis',
        'videos.fabiana.description': 'Presentation video of the Fabiana Móveis project, showing the main functionalities of the application developed to optimize the company\'s delivery routes.',
        'videos.gnosi.title': 'Presentation video - Gnosi',
        'videos.gnosi.description': 'Presentation video of the Gnosi project, showing the main functionalities of the software development of the free online teaching and courses platform.',
        'videos.gruposcheilla.title': 'Presentation video - Grupo Espírita Scheilla',
        'videos.gruposcheilla.description': 'Presentation video of the Grupo Espírita Scheilla project, detailing the functionalities and impact of the software developed for the management and promotion of the spiritist center.',

        // Articles Section
        'articles.title': 'Articles',
        'articles.description': 'Scientific articles and research papers I participated in:',
        'articles.view': 'View',
        'articles.pdf': 'PDF',
        'articles.open.tab': 'Open PDF in new tab',
        'articles.ai.title': 'Analysis of Generative AI Accuracy in Mathematical Equation Solving',
        'articles.ai.description': 'This work investigates the performance of generative artificial intelligence systems in solving mathematical equations, focusing on integrals of different difficulty levels',

        // Experience Section
        'experience.title': 'Experience',
        'experience.description': 'Languages, tools and platforms I use:',

        // Contact Section
        'contact.title': 'Contact',
        'contact.description': 'Let\'s talk? Send a message.',
        'contact.form.title': 'Talk to me',
        'contact.form.description': 'Send a message directly to my email.',
        'contact.form.name': 'Your name',
        'contact.form.email': 'Your email',
        'contact.form.message': 'Your message',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.email.link': 'or send by email',
        'contact.social.title': 'Social Networks',
        'contact.social.description': 'Direct links',
        'contact.social.instagram': 'Instagram',
        'contact.social.github': 'GitHub',
        'contact.social.linkedin': 'LinkedIn',
        'contact.social.email': 'Email',

        // Footer
        'footer.developer': 'Developer • M2C Digital',
        'footer.student': 'Software Engineering • PUC Minas',
        'footer.rights': 'All rights reserved.',

        // Toast Messages
        'toast.message.sent': 'Message sent successfully!',
        'toast.message.thanks': 'Thank you, {name}! I\'ll get back to you soon.',
        'toast.message.thanks.default': 'Thank you! I\'ll get back to you soon.',
        'toast.error.title': 'Error',
        'toast.error.required.fields': 'Please fill in all required fields.',
        'toast.error.invalid.email': 'Please enter a valid email address.',
        'toast.error.send.failed': 'Error sending message. Please try again or use direct email.',

        // Back to Top
        'back.to.top': 'Back to top',

        // Language Selector
        'language.portuguese': 'Português',
        'language.english': 'English',
    }
}

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>('pt')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string, variables?: Record<string, string>): string => {
        let translation = translations[language][key as keyof typeof translations[typeof language]] || key

        if (variables && typeof translation === 'string') {
            Object.entries(variables).forEach(([variable, value]) => {
                translation = translation.replace(`{${variable}}`, value)
            })
        }

        return translation
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}