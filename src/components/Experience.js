import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference = {ref}/>
         <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5, type:"spring"}}
         >
            
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
             target='_blank'
             className='text-primary capitalize dark:text-primaryDark'
                >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full  md:text-sm'>
                {work}
            </p>
         </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:['start end', 'center start']
        }
    )
  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
        <div ref={ref} className="W-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
               position='Intern' company='Numetry Technologies'
               companyLink='www.numetrytech.com'
               time='2024-Present'
               address='Pune' 
               work='Worked as a intern at numtry technologies  for 6 months responsible for developing Signup and signin page also
               make a responsible dashboard and sidebar. Creating many small websites that enhances my knowledge, knowing more about all the frontend and backend libaries 
               make me confidence to build amazing dynamic wesites '
                />
                <Details
               position='Web' company='DotPlus'
               companyLink='www.dotplus.com'
               time='2023'
               address='Patna' 
               work='Worked on a team responsible for developing new tools and perform  
                work and test, including improving the accuracy and relevance of search results and 
                developing new tools for MVC and visualization.'
                />
                {/* <Details
               position='Software Engineer' company='Google'
               companyLink='www.google.com'
               time='2022-Present'
               address='Pune' 
               work='Worked on a team responsible for developing new features for Googles 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                /> */}
                {/* <Details
               position='Software Engineer' company='Google'
               companyLink='www.google.com'
               time='2022-Present'
               address='Pune' 
               work='Worked on a team responsible for developing new features for Googles 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                />
                <Details
               position='Software Engineer' company='Google'
               companyLink='www.google.com'
               time='2022-Present'
               address='Pune' 
               work='Worked on a team responsible for developing new features for Googles 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization.'
                /> */}
            </ul>
        </div>
      
    </div>
  )
}

export default Experience;
