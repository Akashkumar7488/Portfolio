import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid
    font-medium text-lg dark:text-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between dark:text-light dark:border-light lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build With <span className='text-2xl text-red-700 px-1 dark:text-primaryDark'>&#9825;</span> <Link href='https://knowledgeseeker.com' target={'_blank'} className='underline underline-offset-2'>Knowledge Seeker</Link>
            </div>
            <Link  href='https://knowledgeseeker.com' target={'_blank'} className='underline underline-offset-2'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
