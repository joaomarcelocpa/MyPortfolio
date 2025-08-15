#  👨‍💻 Portfólio Pessoal - João Marcelo

 **Clique aqui:** https://joaomarcelocpa.vercel.app

## 📋 Sobre o Projeto

Este é meu portfólio pessoal desenvolvido com as mais modernas tecnologias web. O site apresenta uma experiência visual imersiva com animações fluidas, design responsivo e uma interface intuitiva que destaca meus projetos, experiência e artigos científicos.

## 🛠️ Como Executar Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18.18.0 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos para execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/joaomarcelocpa/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## ✨ Características Principais

- **Design Moderno**: Interface com tema espacial utilizando vídeo de fundo e animações de estrelas
- **Totalmente Responsivo**: Adaptado para todos os dispositivos e tamanhos de tela
- **Animações Fluidas**: Implementadas with Framer Motion para uma experiência suave
- **Componentes Reutilizáveis**: Arquitetura modular com componentes bem estruturados
- **Performance Otimizada**: Construído com Next.js 15 e otimizações de imagem
- **Acessibilidade**: Seguindo boas práticas de acessibilidade web

## 🏗️ Tecnologias Utilizadas

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-000000?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-06B6D4?style=flat&logo=tailwindcss)

### Bibliotecas e Ferramentas
- **Framer Motion** - Animações e transições
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Class Variance Authority** - Utilitário para variantes de componentes
- **Tailwind Merge** - Otimização de classes CSS

## 📁 Estrutura Detalhada do Projeto

```
portfolio/
├── public/                          # Arquivos estáticos
│   ├── logos/                       # Imagens de logos e perfil
│   ├── projects/                    # Imagens dos projetos
│   ├── articles/                    # PDFs dos artigos
│   └── wireframes/                  # Wireframes das seções
├── src/
│   ├── app/                        # App Router do Next.js
│   │   ├── globals.css             # Estilos globais da aplicação
│   │   ├── layout.tsx              # Layout principal com metadados
│   │   └── page.tsx                # Página principal com todas as seções
│   ├── components/                 # Componentes React
│   │   ├── cards/                  # Cards para diferentes tipos de conteúdo
│   │   │   ├── article-card.tsx    # Card para exibição de artigos com preview de PDF
│   │   │   ├── project-card.tsx    # Card para projetos com modal detalhado
│   │   │   ├── skill-card.tsx      # Card para habilidades com barra de progresso
│   │   │   └── video-card.tsx      # Card para vídeos do YouTube integrado
│   │   ├── sections/               # Seções principais da página
│   │   │   ├── articles-section.tsx    # Seção de artigos científicos
│   │   │   ├── contact-section.tsx     # Seção de contato com formulário
│   │   │   ├── experience-section.tsx  # Seção de habilidades e tecnologias
│   │   │   ├── footer-section.tsx      # Rodapé com informações profissionais
│   │   │   ├── hero-section.tsx        # Seção principal de apresentação
│   │   │   ├── projects-section.tsx    # Seção de projetos desenvolvidos
│   │   │   └── videos-section.tsx      # Seção de vídeos demonstrativos
│   │   ├── ui/                     # Componentes de interface reutilizáveis
│   │   │   ├── badge.tsx           # Componente de badge/etiqueta
│   │   │   ├── button.tsx          # Componente de botão com variantes
│   │   │   ├── card.tsx            # Componente de card base
│   │   │   ├── dialog.tsx          # Componente de modal/diálogo
│   │   │   ├── input.tsx           # Componente de campo de entrada
│   │   │   ├── separator.tsx       # Componente de separador visual
│   │   │   ├── sheet.tsx           # Componente de painel lateral
│   │   │   ├── textarea.tsx        # Componente de área de texto
│   │   │   ├── toast.tsx           # Componente de notificação toast
│   │   │   └── toaster.tsx         # Provider para gerenciar toasts
│   │   ├── back-to-top.tsx         # Botão de voltar ao topo
│   │   ├── navbar.tsx              # Barra de navegação responsiva
│   │   ├── reveal.tsx              # Componente de animação de entrada
│   │   ├── section.tsx             # Wrapper para seções da página
│   │   └── stars-canvas.tsx        # Canvas com animação de estrelas
│   ├── hooks/                      # Hooks customizados
│   │   └── use-toast.tsx           # Hook para gerenciar notificações
│   └── lib/                        # Utilitários
│       └── utils.ts                # Funções utilitárias (cn para classes CSS)
```

## 🎨 Seções do Portfólio com Wireframes

### 🏠 **Hero Section**
Apresentação pessoal com foto, descrição profissional e links para redes sociais

![Wireframe Hero](wireframes/Hero.png)

### 💼 **Projetos**
Showcase dos principais projetos desenvolvidos durante minha trajetória como desenvolvedor com cards interativos e modais detalhados

![Wireframe Projetos](wireframes/Projects.png)

### 🎥 **Vídeos**
Demonstrações em vídeo dos projetos desenvolvidos, integradas diretamente do YouTube

![Wireframe Vídeos](wireframes/Videos.png)

### 📚 **Artigos**
Artigos científicos e trabalhos de pesquisa com visualização de PDF integrada

![Wireframe Artigos](wireframes/Articles.png)

### 💻 **Experiência**
Showcase das tecnologias e ferramentas que domino, com indicadores visuais de proficiência

![Wireframe Experiência](wireframes/Experience.png)

### 📞 **Contato**
Formulário de contato funcional e links diretos para redes sociais

![Wireframe Contato](wireframes/Contacts.png)


## ⚡ Performance

- ✅ **Core Web Vitals** otimizados
- ✅ **Lazy Loading** de imagens e componentes
- ✅ **Code Splitting** automático
- ✅ **Compressão** de assets
- ✅ **Otimização** de fontes com next/font

## 🔧 Features Técnicas

- 🎨 **Video Background** - Fundo de vídeo de galáxia imersivo
- 🌟 **Canvas Animation** - Animação de estrelas customizada
- 📱 **PWA Ready** - Preparado para instalação como app
- 🔄 **Auto-scroll** - Navegação suave entre seções
- 🔍 **SEO Optimized** - Meta tags e estrutura otimizada
- 📊 **Intersection Observer** - Detecção de seções visíveis

## 🌐 Redes Sociais

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://instagram.com/joaomarcelocpa/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joaomarcelocpa/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/joaomarcelocpa/)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:joaomarcelocpa0303@gmail.com)

## 🙋‍♂️ Sobre Mim

Sou estudante de **Engenharia de Software** na **PUC Minas** e desenvolvedor **Full-Stack** na **M2C Digital**. Apaixonado por tecnologia, sempre buscando aprender novas ferramentas e compartilhar conhecimento através de projetos open source.

---

<div align="center">
  <p>© 2025 - Todos os direitos reservados</p>
  
  ⭐ **Se gostou do projeto, deixe uma estrela!** ⭐
</div>
