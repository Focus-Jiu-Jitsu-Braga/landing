import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'

import schedule from "/data/schedule.json";
import { Container } from "@/components/Container";
import DefaultPhoto from "@/components/DefaultPhoto";


import castro from '@/images/instructors/castro.jpg'

export default function Schedule() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Horário | Braga Focus Jiu-Jitsu </title>
        <meta
          name="description"
          content="Horário"
        />
      </Head>

      <Container>
      <main className="flex w-full flex-1 flex-col my-auto mt-10 xl:mt-0">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Mapa de Aulas
          </h1>
        </div>

        <div class="xl:grid xl:grid-cols-2">
        {schedule.map((day) => (
          <div className="sm:flex sm:py-4" key={day}>
            <div className="py-4 sm:py-0 sm:p-10 flex-shrink-0 sm:mr-4">
              <p className="text-zinc-800 dark:text-zinc-100 text-4xl font-extrabold">{day.date}</p>
            </div>
            <div className="overflow-x-auto flex gap-4 pb-4 sm:pb-0 sm:py-4">
              {day.activities.map((activity) => (
                <div className="flex flex-col" key={activity}>
                  <div className="text-zinc-800 dark:text-zinc-100 text-md">
                    {activity.start} - {activity.end}
                  </div>
                  <>
                      <div className="cursor-pointer group w-80 mt-2 relative rounded-lg border border-gray-300 bg-gray1 border-gray2 px-6 py-5 shadow-sm hover:border-red-500">
                        <div className="flex justify-between items-center">
                          <p className="text-zinc-800 dark:text-zinc-100 text-xl font-bold">
                            {activity.title}
                          </p>
                          {activity.emoji}
                        </div>
                        <div className="mt-4 text-base text-zinc-600 dark:text-zinc-400 text-sm">
                          {activity.location}
                        </div>
                        {activity.instructors &&
                          ((activity.instructors.length > 1 && (
                            <>
                              <div className="flex group-hover:hidden items-center -space-x-5 mt-4">
                                {activity.instructors.map((instructor) => (
                                  <div className="flex-shrink-0" key={instructor}>
                                    {(instructor.photo && (
                                      /* eslint-disable @next/next/no-img-element */
                                    <Image
                                      src={castro}
                                      alt=""
                                      className="h-10 w-10 rounded-full"
                                    />
                                    )) || <DefaultPhoto name={instructor.name} />}
                                  </div>
                                ))}
                              </div>
                              <div className="hidden group-hover:block items-center mt-4">
                                {activity.instructors.map((instructor) => (
                                  <div
                                    className="flex items-center space-x-3 mt-4"
                                    key={instructor}
                                  >
                                    <div className="flex-shrink-0">
                                      {(instructor.photo && (
                                        /* eslint-disable @next/next/no-img-element */
                                        <Image
                                          src={castro}
                                          alt=""
                                          className="h-10 w-10 rounded-full"
                                        />
                                      )) || (
                                        <DefaultPhoto name={instructor.name} />
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="focus:outline-none">
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        />
                                        <p className="text-sm font-medium text-base text-zinc-600 dark:text-zinc-400">
                                          {instructor.name}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )) ||
                            activity.instructors.map((instructor) => (
                              <div
                                className="flex items-center space-x-3 mt-4"
                                key={instructor}
                              >
                                <div className="flex-shrink-0">
                                  {(instructor.photo && (
                                    /* eslint-disable @next/next/no-img-element */
                                    <Image
                                      src={castro}
                                      alt=""
                                      className="h-10 w-10 rounded-full"
                                    />
                                  )) || <DefaultPhoto name={instructor.name} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="focus:outline-none">
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    />
                                    <p className="text-sm font-medium text-base text-zinc-600 dark:text-zinc-400">
                                      {instructor.name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )))}
                      </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </main>
      </ Container>
    </div>
  );
}