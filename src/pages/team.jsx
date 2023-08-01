import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@/components/Container';

import team from '/data/team-members.json';

export default function Team() {

    return (
        <div>
            <Head>
                <title>Equipa | Braga Focus Jiu-Jitsu </title>
                <meta name="description" content="Equipa" />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="text-center lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Equipa
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            Conheça os nossos atletas de Jiu Jitsu - uma equipa unida pela paixão ao desporto, determinada a superar desafios e alcançar novas conquistas nos tatamis. Juntos, formamos uma família unida pelo respeito, trabalho em equipa e aprendizagem contínua. Cada membro traz consigo a sua própria jornada, fortalecendo a nossa equipa com experiências diversas e uma determinação incansável.
                        </p>
                    </div>
                </div>
            </Container>

            <Container className="mt-16 sm:mt-32">
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center">
                        {team.map((entry) => (
                            <div key={entry.id} className="p-4 flex flex-col items-center">
                                <div className="aspect-w-1 aspect-h-1">
                                    <Image
                                        alt={entry.name}
                                        src={entry.image ? `/team/${entry.image}` : '/team/fallback.jpg'}
                                        width={190}
                                        height={190}
                                        className="rounded-2xl shadow bg-zinc-100 dark:bg-zinc-800"
                                    />
                                </div>
                                <h2 className="mt-2 text-center text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                                    {entry.name}
                                </h2>
                                <h2 className="text-center text-base tracking-tight text-zinc-800 dark:text-zinc-100">
                                    Faixa {entry.belt}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
