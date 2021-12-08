import React from 'react';
import './css/Home.css';
import Projects from '../components/ProjectList';
import { Project } from '../definitions/Project';
import Title from '../components/Title';
import dog from '../common/dog.gif';
import dog2 from '../common/dog2.gif';
import dog3 from '../common/dog3.gif';
import { Container } from '@mui/material';
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import '../components/css/Slideshow.css';
import Typography from '@mui/material/Typography';


interface CardProps{
  project: Project
}

//Takes in a Project and returns a Card
function ProjectCard(props: CardProps){

  return(
    <div className="ProjectMid"> 
        <div className="ProjectImage">
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 500,
                    minWidth: 300
                }}
                component="img"
                alt="The house from the offer."
                src={props.project.image}
            />
        </div> 
        <div className="ProjectDescription">
            <div style={{textAlign: "center", paddingBottom: 20}}>
                <Typography variant="h5">
                    {props.project.title}
                </Typography>
            </div>
            <div >
                <Typography variant="body2" sx={{display: "-webkit-box", textOverflow: "ellipsis", maxHeight: 100, overflow: "hidden", WebkitLineClamp: 4, WebkitBoxOrient: "vertical"}} >
                    {props.project.description}
                </Typography>
            </div>
            <div style={{paddingTop: 20}}>
                <Typography variant="caption">
                    {props.project.bullets.map((bullet) => 
                        <li>{bullet}</li>
                    )}
                </Typography>
            </div>
            <div style={{textAlign: "center", marginTop: 'auto'}}>
                
            </div>
        </div> 
    </div>
  );
}

const ProjectList = () => {
  
  //Temporary test list
  const tempProjectList: Project[] = [
    {title: "Project A", description: "Description of Project A", bullets: ["worked on this", "worked on that"], image: dog}, 
    {title: "Project B", description: "Description of Project B", bullets: ["worked on this", "worked on that"], image: dog2}, 
    {title: "Project C", description: "Description of Project C", bullets: ["worked on this", "worked on that"], image: dog3}, 
  ]
  
  return (
    //ToDo: Update to map real list
    <Stack>
      {//Maps every project in list as new card objects
        tempProjectList.map(p => <ProjectCard project={p}/>)}
    </Stack>
  );
}

export default ProjectList;