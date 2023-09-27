import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 10
  })
  return (
  <div id='about' className='section'>
    About
    </div>
)};

export default About;
