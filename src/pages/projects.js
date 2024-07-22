import React from 'react'
import Head from 'next/head';
import Layout from '@/components/Layout';
import Animatedtext from '@/components/Animatedtext';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/A.png';
import project2 from '../../public/images/A2.png';
import project3 from '../../public/images/A3.png';
import project4 from '../../public/images/A5.png';
import project5 from '../../public/images/A4.png';
import project6 from '../../public/images/A6.png';
import {motion} from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between p-12 dark:bg-dark dark:border-light
        rounded-3xl border border-solid border-dark bg-light shadow-2xl  dark-border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes='(max-width:768px) 100vw,
            (max-width:1200px) 50vw,
            50vw'
            />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank'> <GithubIcon/> </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  sm:px-4 sm:text-base'> Visit Project </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid
         border-dark bg-light p-6 relative dark:bg-dark xs:p-4
          dark:text-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light dark:text-light md:-right-2 md:w-[101%] xs:h[102%] xs:rounded-[1.5rem]"/>

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto md:w-full md:h-4xl '
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-16  '>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm  lg:text-2xl '>{title}</h2>
            </Link>
            
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank'> <GithubIcon/> </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'> Visit</Link>
            </div>
            </div>
        </article>
    )
}
const projects = () => {
  return (
   <>
    <Head>
        <title>KnowledgeSeeker | Projects Page</title>
        <meta name='description' content='any description'/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <Animatedtext text='Imagination Trumps Knowledge!' 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl   ' />
            <div className="grid grid-cols-12 gap-24  gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className='col-span-12 '>
                    <FeaturedProject
                    title='School management Application'
                    img={project1}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>
                <div className='col-span-6  sm:col-span-12'>
                <Project
                    title='Amazon Clone'
                    img={project2}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title='Responsive Dashboard'
                    img={project3}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>

                <div className='col-span-12 '>
                <FeaturedProject
                    title='ECommerce Website'
                    img={project4}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>
                <div className='col-span-6  sm:col-span-12'>
                <Project
                    title='Travel App'
                    img={project5}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title='Product Page'
                    img={project6}
                    summary='This is based on live projects.'
                    link='/'
                    github='https://github.com/Akashkumar7488'
                    type='Featured Projects'
                    
                    />
                </div>
            </div>
        </Layout>
    </main>
   </>
  )
}

export default projects;
