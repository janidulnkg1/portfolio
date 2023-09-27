import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
        lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* Image */}
        <motion.div
          variants={fadeIn('right', 0.3)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top '>
        </motion.div>
        {/* Text */}
        <motion.div
          variants={fadeIn('left', 0.5)} 
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About Me.</h2>
            <h3 className='h3 mb-4'>
            
              </h3>
            <p className='mb-6'>
            I'm a dedicated Software Engineer who crafts seamless digital experiences through the harmonious fusion of frontend and backend technologies.
              </p>
              {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient 
                  mb-2'>
                    {inView ? <CountUp start={0} end={3} duration={7} /> : 
                    null}
                    +
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br></br> 
                    Experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient 
                    mb-2'>
                      {inView ? <CountUp start={0} end={5} duration={4} /> : 
                      null}
                      +
                    </div>
                    <div className='font-primary text-sm tracking-[2px]'>
                    Completed <br></br> 
                    Projects
                    </div>
                </div> 
              </div>
            <div className='flex gap-x-8 items-center'>
                    <button className='btn btn-lg'>
                      Contact me
                    </button>
                    <a href='#' className='text-gradient btn-link'>
                      My Portfolio
                    </a>
              </div>
        </motion.div>
      </div>
    </div>
  </section>
)};

export default About;
