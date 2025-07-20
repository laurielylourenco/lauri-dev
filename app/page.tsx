"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Menu, Music, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a29] text-[#ffffff] font-mono">
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-10"></div>

      <MobileHeader />
      <DesktopHeader />

      <main className="px-4 md:px-12 py-8 md:py-12 max-w-6xl mx-auto">
        {/* Hero section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16 md:mb-24">
          <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 border-2 border-[#ffffff] rounded-md transform rotate-3"></div>
            <div className="absolute inset-0 bg-[#2d2d3d] rounded-md transform -rotate-3 overflow-hidden">
              <Image
                src="https://laurielylourenco.github.io/img/lauri.png"
                alt="Profile"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-[#2d2d3d] rounded-md text-sm mb-2">
              <span className="text-[#c5c5ff]">{">"}</span> hello world
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              olá, meu nome é <span className="text-[#c5c5ff]">Lauriely</span>
            </h2>
            <p className="text-base md:text-lg text-[#b3b3cc] max-w-xl">
              Desenvolvimento contínuo ☁️, café constante ☕
            </p>
            <div className="flex gap-3 pt-2 justify-center md:justify-start">

              <Link href="#contact" scroll={true}>
                <Button
                  variant="outline"
                  className="rounded-sm border-[#ffffff] text-[#ffffff] hover:bg-[#2d2d3d] text-sm md:text-base"
                >
                  <Mail className="mr-2 h-4 w-4" /> Contato
                </Button>
              </Link>
              <Link href="#projects" scroll={true}>
                <Button className="rounded-sm bg-[#c5c5ff] text-[#1a1a29] hover:bg-[#a6a6ff] text-sm md:text-base">
                  Projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="mb-16 md:mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-[#c5c5ff] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold">quem sou eu ?</h2>
            <div className="h-px bg-[#2d2d3d] flex-grow ml-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="leading-relaxed text-sm md:text-base">
                Sou desenvolvedora full-stack em uma fábrica de software há quatro anos, quero cada vez mais ter um foco em backend. Atualmente, estou cursando Ciência da Computação, e sinto que estou apenas no início da minha jornada no mundo do desenvolvimento. Tenho uma paixão crescente por participar de projetos complexos é buscar melhorar
              </p>
              <p className="leading-relaxed text-sm md:text-base">
                Deixando os códigos de lado, você pode me encontrar explorando novas músicas, lendo um bom livro com uma xícara de chá ou revendo Harry Potter ou Senhor dos Anéis.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">habilidades e ferramentas</h3>

              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  PHP
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  Laravel
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  Node.js
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  TypeScript
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  Postgresql
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  Linux
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  React
                </span>
                <span className="px-2 py-1 md:px-3 md:py-2 bg-[#2d2d3d] border border-[#c5c5ff] text-[#ffffff] rounded-md text-xs md:text-sm">
                  Git
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="mb-16 md:mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-[#c5c5ff] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold">educação</h2>
            <div className="h-px bg-[#2d2d3d] flex-grow ml-2"></div>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 border-l-2 border-[#2d2d3d]">
              <div className="absolute w-3 h-3 bg-[#c5c5ff] rounded-full -left-[7px] top-1"></div>
              <div className="space-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h3 className="text-base md:text-lg font-semibold">Bacharelado em Ciência da Computação</h3>
                  <span className="text-xs md:text-sm text-[#b3b3cc]">2020 - atual</span>
                </div>
                <p className="text-[#b3b3cc] text-sm">Universidade Federal de Juiz de Fora</p>
                <p className="text-xs md:text-sm mt-2">
                  Atualmente, estou cursando Ciência da Computação, onde é abordado conceitos e práticas para o desenvolvimento de habilidades no âmbito da tecnologia. Optei pelo período noturno para conciliar essa busca pelo conhecimento com minhas responsabilidades diurnas de trabalho. Estar nesta fase da graduação representa a oportunidade de aprimorar minha compreensão teórica e prática.
                </p>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-[#2d2d3d]">
              <div className="absolute w-3 h-3 bg-[#c5c5ff] rounded-full -left-[7px] top-1"></div>
              <div className="space-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h3 className="text-base md:text-lg font-semibold">Tecnica de Informatica</h3>
                  <span className="text-xs md:text-sm text-[#b3b3cc]">2018 - 2019</span>
                </div>
                <p className="text-[#b3b3cc] text-sm">Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas</p>
                <p className="text-xs md:text-sm mt-2">
                  Durante meu curso técnico em Informática, fui exposta muitos conhecimentos essenciais para a área. Desde as bases da programação, incluindo conceitos básicos até a compreensão da arquitetura MVC, passei por uma sólida formação. Além disso, adquiri conhecimentos práticos sobre sistemas operacionais Linux, práticas de modelagem, gerenciamento de banco de dados e manutenção de computadores. Também obtive uma compreensão de redes de computadores. Essa experiência técnica diversificada foi fundamental para consolidar minha base de habilidades e me preparar para os desafios profissionais no campo da tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="mb-16 md:mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-[#c5c5ff] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold">projetos</h2>
            <div className="h-px bg-[#2d2d3d] flex-grow ml-2"></div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 md:mb-8 bg-[#2d2d3d] w-full overflow-x-auto flex whitespace-nowrap">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[#c5c5ff] data-[state=active]:text-[#1a1a29] text-xs md:text-sm"
              >
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-[#c5c5ff] data-[state=active]:text-[#1a1a29] text-xs md:text-sm"
              >
                Web
              </TabsTrigger>
              <TabsTrigger
                value="linux"
                className="data-[state=active]:bg-[#c5c5ff] data-[state=active]:text-[#1a1a29] text-xs md:text-sm"
              >
                Linux
              </TabsTrigger>
              {/* <TabsTrigger
                value="ferramentas"
                className="data-[state=active]:bg-[#c5c5ff] data-[state=active]:text-[#1a1a29] text-xs md:text-sm"
              >
                Ferramentas
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => p.category === "web")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="linux" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => p.category === "linux")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="ferramentas" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter((p) => p.category === "ferramentas")
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Articles section */}
        <section id="articles" className="mb-16 md:mb-24 scroll-mt-20">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-[#c5c5ff] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold">artigos</h2>
            <div className="h-px bg-[#2d2d3d] flex-grow ml-2"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <div className="p-4 md:p-5 border border-[#2d2d3d] rounded-md hover:border-[#c5c5ff] transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <h3 className="text-base md:text-lg font-semibold">Tutorial OCI8 + PHP 7.4 – O Guia para não bater a cabeça na tela</h3>
                <span className="text-xs md:text-sm text-[#b3b3cc]">Abril 2025</span>
              </div>
              <p className="text-xs md:text-sm text-[#b3b3cc] mb-3">
                Passei algumas horas apanhando pra fazer essa lib funcionar no PHP 7.4, então compartilhei o passo a passo que funcionou pra mim.
              </p>
              <Link target="_blank" href="https://dev.to/laurielylourenco/tutorial-oci8-php-74-o-guia-para-nao-bater-a-cabeca-na-tela-3hak" className="text-xs md:text-sm flex items-center text-[#c5c5ff] hover:underline">
                Ler artigo <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="p-4 md:p-5 border border-[#2d2d3d] rounded-md hover:border-[#c5c5ff] transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <h3 className="text-base md:text-lg font-semibold">Implementando uma Tabela Hash em PHP para Armazenar Dados de Artilheiros do Brasileirão</h3>
                <span className="text-xs md:text-sm text-[#b3b3cc]">Nov 2024</span>
              </div>
              <p className="text-xs md:text-sm text-[#b3b3cc] mb-3">
                Esse tópico de programação foi algo que encontrei na faculdade, e achei que não teria entrado em contato com esse assunto se não fosse por ela
                então escrevi sobre para auto lembrar.
              </p>
              <Link target="_blank" href="https://dev.to/laurielylourenco/implementando-uma-tabela-hash-em-php-para-armazenar-dados-de-artilheiros-do-brasileirao-35om" className="text-xs md:text-sm flex items-center text-[#c5c5ff] hover:underline">
                Ler artigo <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="p-4 md:p-5 border border-[#2d2d3d] rounded-md hover:border-[#c5c5ff] transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                <h3 className="text-base md:text-lg font-semibold">Criando um script de sorteio a partir de um CSV com PHP</h3>
                <span className="text-xs md:text-sm text-[#b3b3cc]">Março 2024</span>
              </div>
              <p className="text-xs md:text-sm text-[#b3b3cc] mb-3">
                No ano 2024, tive a oportunidade de desenvolver um mini script para conduzir um sorteio na minha empresa. Neste artigo, vou compartilhar o código que utilizei o elefantinho.
              </p>
              <Link target="_blank" href="https://dev.to/laurielylourenco/criando-um-script-de-sorteio-a-partir-de-um-csv-com-php-3n6f" className="text-xs md:text-sm flex items-center text-[#c5c5ff] hover:underline">
                Ler artigo <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-12 scroll-mt-20">
          
          <div className="flex items-center gap-2 mb-12 md:mb-8">
            <div className="w-2 h-2 bg-[#c5c5ff] rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold">contato</h2>
            <div className="h-px bg-[#2d2d3d] flex-grow ml-2"></div>
          </div>

          <div className="grid grid-cols-1 place-items-center gap-8">
            
            <div className="space-y-4 flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-semibold">Vamos conversar!</h3>
              <p className="text-xs md:text-sm text-[#b3b3cc] max-w-md">
                Tem um projeto em mente ou quer apenas dizer oi? Entre em contato e entrarei em contato o mais breve possível.
              </p>

              <div className="flex flex-col items-center gap-3 pt-4">
                <Link
                  href="mailto:laurielylourenco@gmail.com"
                  className="flex items-center gap-2 hover:text-[#c5c5ff] transition-colors text-xs md:text-sm"
                >
                  <Mail className="h-4 w-4" /> laurielylourenco@gmail.com
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/laurielylourenco"
                  className="flex items-center gap-2 hover:text-[#c5c5ff] transition-colors text-xs md:text-sm"
                >
                  <Github className="h-4 w-4" /> github.com/laurielylourenco
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/laurielylourenco/"
                  className="flex items-center gap-2 hover:text-[#c5c5ff] transition-colors text-xs md:text-sm"
                >
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/laurielylourenco
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2d2d3d] py-6 px-4 md:px-12 text-center text-[#b3b3cc]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Link target="_blank"
            href="https://github.com/laurielylourenco"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2d2d3d] hover:border-[#c5c5ff] hover:text-[#c5c5ff] transition-colors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link target="_blank"
            href="https://www.linkedin.com/in/laurielylourenco/"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2d2d3d] hover:border-[#c5c5ff] hover:text-[#c5c5ff] transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:laurielylourenco@gmail.com"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2d2d3d] hover:border-[#c5c5ff] hover:text-[#c5c5ff] transition-colors"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
        <p className="text-xs md:text-sm">© {new Date().getFullYear()} Lauriely.</p>

      </footer>
    </div>
  )
}


function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="md:hidden border-b border-[#2d2d3d] py-4 px-4 flex justify-between items-center sticky top-0 bg-[#1a1a29] z-20">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#c5c5ff] rounded-full"></div>
        <h1 className="text-lg font-bold tracking-tight">lauriely.dev</h1>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-1 rounded-md hover:bg-[#2d2d3d] transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a1a29] border-b border-[#2d2d3d] py-4 px-6 z-30">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#c5c5ff] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#education"
                  className="hover:text-[#c5c5ff] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  educação
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-[#c5c5ff] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  projeto
                </Link>
              </li>
              <li>
                <Link
                  href="#articles"
                  className="hover:text-[#c5c5ff] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  artigos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#c5c5ff] transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}


function DesktopHeader() {
  return (
    <header className="hidden md:flex border-b border-[#2d2d3d] py-4 px-12 justify-between items-center sticky top-0 bg-[#1a1a29] z-20">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#c5c5ff] rounded-full"></div>
        <h1 className="text-lg font-bold tracking-tight">lauriely.dev</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="#about" className="hover:text-[#c5c5ff] transition-colors">
              sobre
            </Link>
          </li>
          <li>
            <Link href="#education" className="hover:text-[#c5c5ff] transition-colors">
              educação
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-[#c5c5ff] transition-colors">
              projetos
            </Link>
          </li>
          <li>
            <Link href="#articles" className="hover:text-[#c5c5ff] transition-colors">
              artigos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#c5c5ff] transition-colors">
              contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


const projects = [
  {
    title: "Veri",
    description: "Projeto está em contrução a ideia é um sistema web que permite a coleta e análise de feedbacks de funcionários e clientes.",
    image: "https://avatars.githubusercontent.com/u/958072?s=280&v=4?height=300&width=500",
    tags: ["PHP", "Laravel", "Backend", "API"],
    link: "https://github.com/laurielylourenco/veri",
    category: "web",
  },
  {
    title: "Bluesky for Terminal",
    description: "Gosto muito de criar ferramentas é este projeto é uma ferramenta de linha de comando que permite fazer posts na plataforma Bluesky diretamente pelo terminal. Ele utiliza a biblioteca atproto para interagir com a API de Bluesky e o Click para a interface de linha de comando.",
    image: "https://raw.githubusercontent.com/laurielylourenco/bsky-for-terminal/refs/heads/main/image.png?height=300&width=500",
    tags: ["Linux", "Python", "API"],
    link: "https://github.com/laurielylourenco/bsky-for-terminal",
    category: "linux",
  },
  {
    title: "twitter-for-terminal",
    description: "Essa foi minha primeira ferramenta de linha de comando a ideia que voce possa postar tweets direto do seu terminal é tambem listar sua timeline mais recente.Esse projeto foi desenvolvido com Laravel-zero um micro-framework para construir aplicativos de linha de comando.",
    image: "https://raw.githubusercontent.com/laurielylourenco/twitter-for-terminal/refs/heads/master/public/img/foto.jpg?height=300&width=500",
    tags: ["Linux", "Laravel", "PHP", "API"],
    link: "https://github.com/laurielylourenco/twitter-for-terminal",
    category: "linux",
  },
  {
    title: "Nodeithil",
    description: "Este repositório contém uma API REST básica desenvolvida com Node.js, Express, TypeScript, MongoDB e Zod para validação de entrada.",
    image: "https://raw.githubusercontent.com/laurielylourenco/Nodeithil/refs/heads/main/2.png?height=300&width=500",
    tags: ["Node.js", "TypeScript", "MongoDB", "Express"],
    link: "https://github.com/laurielylourenco/Nodeithil",
    category: "web",
  },
  ,
  {
    title: "Forca",
    description: "Jogo da Forca desenvolvido com React + TypeScript.Atualmente é uma versão single-player, mas em breve será transformado em um jogo multiplayer em tempo real com WebSocket!",
    image: "/forca.png?height=300&width=500",
    tags: ["React", "TypeScript", "CSS"],
    link: "https://forca-gamma.vercel.app/",
    category: "web",
  },
]

function ProjectCard({ project }: any) {
  return (
    <Card className="overflow-hidden border-[#2d2d3d] bg-[#1a1a29]">
      <div className="relative h-40 md:h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 md:p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag: any, index: any) => (
            <span key={index} className="text-xs px-2 py-1 bg-[#2d2d3d] rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base md:text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-xs md:text-sm text-[#b3b3cc] mb-4">{project.description}</p>
        <Link href={project.link} className="text-xs md:text-sm flex items-center text-[#c5c5ff] hover:underline">
          View project <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
