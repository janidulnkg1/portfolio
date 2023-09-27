import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
  <section id='about' className='section'>
    About
    </section>
)};

export default About;
