import React from 'react';

import Image from '../assets/about.png';

import {FaGithub, FaLinkedin } from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const Banner = () => {
  return (
  <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto mt-10'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          {/* Text */}
            <div className='flex-1 text-center font-secondary lg:text-left'> 
             <motion.h1 
             variants={fadeIn('up', 0.3)} 
             initial="hidden"
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
             className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              JANIDU <span>LANKAGE</span>
             </motion.h1>
             <motion.div 
             variants={fadeIn('up', 0.4)} 
             initial="hidden"
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
             className='mb-6 text-[36px] lg:text-60px font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Software Engineer', 
                  2000,
              ]}
                speed={50}
                className='text-accent'
                repeat={Infinity}
              /> 
            </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:max-0'>
              Hi, Welcome to my Page! <br></br>
              I am an Aspiring Developer, on the look out for new technologies.
            
              </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:max-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>
                My portfolio
              </a>
            </motion.div>
              {/* Social Media Links */}
            <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 items-center'>
              <a href='https://github.com/janidulnkg1'>
                <FaGithub></FaGithub>
              </a>
              <a href='https://www.linkedin.com/in/janidu-lankage-12336767/'>
                <FaLinkedin></FaLinkedin>
                </a>     
            </motion.div>
          </div>
           {/* Image */}
           <motion.div 
           variants={fadeIn('down', 0.5)} 
           initial="hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.7}}
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <img src={Image} alt=''  />
          </motion.div>
        </div> 
      </div>  
  </section>
  );
};

export default Banner;
