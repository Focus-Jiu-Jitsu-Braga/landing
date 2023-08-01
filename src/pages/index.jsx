import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
} from '@/components/SocialIcons'
import image0 from '@/images/photos/0.jpg'
import image1 from '@/images/photos/1.jpg'
import image2 from '@/images/photos/2.jpg'
import image3 from '@/images/photos/3.jpg'
import image4 from '@/images/photos/4.jpg'
import image5 from '@/images/photos/5.jpg'
import image6 from '@/images/photos/6.jpg'
import image7 from '@/images/photos/7.jpg'
import image8 from '@/images/photos/8.jpg'
import image9 from '@/images/photos/9.jpg'
import image10 from '@/images/photos/10.jpg'
import image11 from '@/images/photos/11.jpg'
import image12 from '@/images/photos/12.jpg'
import image13 from '@/images/photos/13.jpg'
import image14 from '@/images/photos/14.jpg'
import image15 from '@/images/photos/15.jpg'
import image17 from '@/images/photos/17.jpg'
import image18 from '@/images/photos/18.jpg'
import image19 from '@/images/photos/19.jpg'
import image20 from '@/images/photos/20.jpg'
import image21 from '@/images/photos/21.jpg'
import image23 from '@/images/photos/23.jpg'
import image24 from '@/images/photos/24.jpg'
import image25 from '@/images/photos/25.jpg'
import image26 from '@/images/photos/26.jpg'
import image27 from '@/images/photos/27.jpg'
import image28 from '@/images/photos/28.jpg'
import image29 from '@/images/photos/29.jpg'
import image30 from '@/images/photos/30.jpg'
import image31 from '@/images/photos/31.jpg'
import image32 from '@/images/photos/32.jpg'
import image33 from '@/images/photos/33.jpg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos({ photos, rotations }) {
  const photosRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const photosContainer = photosRef.current;
    const totalWidth = photosContainer.scrollWidth;
    const containerWidth = photosContainer.offsetWidth;

    const slideAnimation = () => {
      if (!isPaused) {
        photosContainer.scrollLeft += 1;
        if (photosContainer.scrollLeft >= totalWidth / 2) {
          photosContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(slideAnimation, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  const tripledPhotos = [...photos, ...photos, ...photos];

  return (
    <div className="mt-16 sm:mt-20">
      <div
        ref={photosRef}
        className={clsx(
          'flex justify-start gap-5 overflow-hidden py-4 sm:gap-8 space-x-5 sm:space-x-8',
          'animate-slideAnimation',
        )}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {tripledPhotos.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Home | Braga Focus Jiu-Jitsu 
        </title>
        <meta
          name="description"
          content="A filial de Braga da equipa Campeã Nacional que forma Campeões Mundiais e Europeus"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl uppercase">
            Focus jiu jitsu Braga
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A filial de Braga da equipa Campeã Nacional que forma Campeões Mundiais e Europeus, situada na sede desportiva de Santa Tecla. 
            Estamos com inscrições abertas para todos os níveis e idades! Vem conhecer-nos!
          </p>
          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            /> */}
            <div className='flex'>
            <SocialLink
              href="https://instagram.com/focus.jiujitsubraga/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <a href="https://instagram.com/focus.jiujitsubraga/" className='pl-2 text-zinc-600 dark:text-zinc-400'>Follow on Instagram</a>
            </div>
            {/* <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            /> */}
            {/* <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      <Photos photos={[image21, image23, image18, image28, image29, image14, image26, image25]}  rotations={['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', '-rotate-2']} />
      <Photos photos={[image27, image17, image19, image20, image24, image30, image31, image10]}  rotations={['-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2', 'rotate-2']} />
      <Photos photos={[image9, image0, image8, image3, image2, image7, image4, image1]}  rotations={['rotate-2', '-rotate-2', 'rotate-2', '-rotate-2', '-rotate-2']} />
      <Photos photos={[image6, image11, image12, image15, image13, image5, image32, image33]}  rotations={['-rotate-2', 'rotate-2', '-rotate-2', 'rotate-2', 'rotate-2']} />
    </>
  )
}