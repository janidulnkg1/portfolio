import React from 'react';

import {BsArrowUpright} from 'react-icons/bs';

import motion from 'framer-motion';

import {fadeIn} from '../variants';

const projects = [
  {
    name: 'Agri-Grow',
    description:
    'This is the Final Project made for my BSc Software Engineering Dissertation. This Project is an Intelligent Plant Health Monitoring System, made as a mobile application. Agri-Grow is built in order to determine Diseases that Affect Paddy (Crop) Plants based on: MINERAL DEFICIENCIES DETECTION, PATHOGENIC DISEASE DETECTION, PEST DISEASE DETECTION.Based on the Detections; a Yield Enhancement Recommendation would be given.',
    link: 'https://github.com/janidulnkg1/Agri-Grow',
  },
];

const Projects = () => {
  return(
   <section id='projects' className='section'>
    <div className='container mx-auto'>
      {/* Text */}
      <div>
        <h2 className='h2 text-accent mb-6'>
          Projects I've Done.
        </h2>
        <h3 className='h3 max-w-[455px] mb-16'>
          I'm a passionate software engineer with expertise in: <br></br>
              BACKEND - C#: .Net Core, ASP.Net Core; Java : Springboot / Hibernate <br></br>
              FRONTEND - HTML5, CSS3, JavaScript: JQuery/ AJAX, php, React.js/Typescript  <br></br>
              MOBILE DEVELOPMENT - Android.<br></br>
              Machine learning, AI, Analytics - TensorFlow, Yolo v8, RStudio, SPSS.
        </h3>
        <button className=''></button>
      </div>
      {/* Projects */}
    </div>


    </section>
  );
};

export default Projects;
