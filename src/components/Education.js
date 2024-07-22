import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info}) => {
    const ref = useRef(null);

    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference = {ref}/>
         <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5, type:"spring"}}
         >
            
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
                </h3>
            <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
         </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:['start end', 'center start']
        }
    )
  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
        <div ref={ref} className="W-[75%] mx-auto relative">
            <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               

               <Details
               type='Currently Completed MAster of Computer Application' 
               time='2022-2024'
               place='Patna' 
               info='Amity Patna'
                />

                <Details
               type='Done Graduation from Oriental College Patna' 
               time='2019-2022'
               place='Patna' 
               info='Affiliated with Patliputra University, Stream-Mathematics'
                />

              <Details
               type='Done Inter at Oriental College Patna' 
               time='2017-2019'
               place='Patna' 
               info='Affiliated with Patliputra University, Stream-Science, Maths'
                />

              <Details
               type='Done Schooling at Gyanasthali High School' 
               time='2016-2017'
               place='Patna' 
               info='Affiliated to CBSE Board, near Alamganj Chowki'
                />
              
            </ul>
        </div>
      
    </div>
  )
}

export default Education;
