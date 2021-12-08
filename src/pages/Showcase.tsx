
import React from 'react';
import Container from '@mui/material/Container';
import Slideshow from '../components/Slideshow';
import Projects from '../components/ProjectList';
import Title from '../components/Title';
import dog from '../common/dog.gif';
import dog2 from '../common/dog2.gif';
import dog3 from '../common/dog3.gif';
import { Project } from '../definitions/Project';

const Showcase = () => {
  const projects: Project[] = [
    {title: "Project A", description: "Description of Project A", bullets: ["worked on this", "worked on that"], image: dog}, 
    {title: "Project B", description: "Description of Project B", bullets: ["worked on this", "worked on that"], image: dog2}, 
    {title: "Project C", description: "Description of Project C", bullets: ["worked on this", "worked on that"], image: dog3}, 
]
  return (
    <Container>
      <Title name={'Showcase'}  />
      <Slideshow projectList={projects}/>
      <Projects projectList={projects}/>
    </Container>
  );
}

export default Showcase;
