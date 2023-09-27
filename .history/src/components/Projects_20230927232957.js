import React from 'react';

import {BsArrowUpright} from 'react-icons/bs';

import motion from 'framer-motion';

import {fadeIn} from '../variants';

const projects = [
  {
    name: 'Agri-Grow',
    description:
    'This is the Final Project made for my BThis Project is an Intelligent Plant Health Monitoring System. Agri-Grow is built in order to determine Diseases that Affect Paddy (Crop) Plants based on: MINERAL DEFICIENCIES DETECTION, PATHOGENIC DISEASE DETECTION, PEST DISEASE DETECTION.Based on the Detections; a Yield Enhancement Recommendation would be given.',
    link: 'https://github.com/janidulnkg1/Agri-Grow',
  },
];

const Projects = () => {
  return <div id='projects' className='section'>Projects</div>;
};

export default Projects;
