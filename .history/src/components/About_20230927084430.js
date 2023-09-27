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
          <h3>I'm a final year undergraduate following BSc (Hons) Software Engineering. 
            
            I enjoy working on a wide range of projects and constantly expanding my skill set.</h3>
            <p>

            </p>
        </div>
      </div>
    </div>



    </section>
)};

export default About;
