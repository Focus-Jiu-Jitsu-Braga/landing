import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/instructors/castro.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-red-500 dark:text-zinc-200 dark:hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>
          Professor | Braga Focus Jiu-Jitsu 
        </title>
        <meta
          name="description"
          content="João Castro"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              João Castro
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Professor João Castro, começou o mundo das lutas quando tinha 17 iniciando na luta livre brasileiro, com o professor Carlos Pereira em Guimarães, mantendo o contacto com a luta livre até aos dias de hoje, durante esse trajecto consagrou-se algumas vezes campeão nacional atingindo o podio também várias vezes, ganhando também por duas vezes consecutivas o desafio da luta livre contra o jiu jitsu em Portugal.
              </p>
              <p>
                Em 2012 começou a praticar também jiu jitsu, com o professor Manoel Neto em matosinhos, nas faixas coloridas conquistou também o título de campeão europeu,internacional e nacional por várias vezes, em Dezembro de 2015 recebeu a faixa preta pelas mãos do seu professor, no campeonato nacional desse mesmo ano foi vice campeão na categoria e campeão no absoluto adulto, após entrar na categoria de master, já conquistou também alguns pódios e também já se consagrou campeão nacional e internacional em campeonatos organizados pela ibjjf e pela fpjjb.
              </p>
              <p>
              Começou o trajeto como professor de luta livre em 2005 aos 23 anos em Braga.
Hoje em dia além de continuar em braga está em Ponte de lima e Guimarães que é  a sua cidade natal. Iniciou as aulas de jiu jitsu em 2013.
Já vão quase duas décadas como professor, tem turmas divididas em varias faixas etárias, e alunos dos 3 aos 79 anos. 
              </p>
              <p>
              Durante este percurso formou 10 faixas pretas, mais de uma dezena faixas marrons, mais de duas dezenas de faixas roxas e mais de quatro dezenas de faixas azuis. Vários dos seus alunos já foram campeões nacionais, internacionais, e europeus em campeonatos organizados pela ibjjf e fpjjb. 
              </p>
              <p>
              Ajudar o próximo a conquistar as suas próprias batalhas é o seu objetivo principal.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              <SocialLink href="https://www.instagram.com/castro_gmr/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink> */}
              {/* <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink> */}
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
