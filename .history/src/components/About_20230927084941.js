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
            <div>
              <div>
                <div>
                  <CountUp start={0} end={13} duration={3} />
                </div>
              </div>
              YEARS OF EXPERI
            </div>
        </div>
      </div>
    </div>



    </section>
)};

export default About;
