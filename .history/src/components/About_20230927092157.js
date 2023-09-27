import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div>
        {/* Image */}
        <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
        mix-blend-lighten bg-top '>
        </div>
        {/* Text */}
        <div>
          <h2>About Me.</h2>
          <h3>I'm a final year undergraduate following BSc (Hons) Software Engineering. <br></br>
            I enjoy working on a wide range of projects and constantly expanding my skill set.</h3>
            <p>
            I'm a passionate software engineer with expertise in: <br></br>
            BACKEND - C#: .Net Core, ASP.Net Core; Java : Springboot / Hibernate <br></br>
            FRONTEND - HTML5, CSS3, JavaScript: JQuery/ AJAX, php, React.js/Typescript  <br></br>
            MOBILE DEVELOPMENT - Android.<br></br>
            Machine learning, AI, Analytics - TensorFlow, Yolo v8, RStudio, SPSS.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient 
                mb-2'>
                   {inView ? <CountUp start={0} end={3} duration={4} /> : 
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
                <div>
                  <button className=''></button>
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
)};

export default About;
