
import React from 'react';
import Typography from '@mui/material/Typography';
import './css/Projects.css';
import Box from '@mui/material/Box';
import { Project } from '../definitions/Project';

interface ProjectProps {
    project: Project
}

//For the project tiles (small)
function ProjectItem(props: ProjectProps) {
    return (
        <div className="ProjectItem">
            <Box
                sx={{
                    width: "100%",
                    height: "75%",
                    minWidth: 200
                }}
                component="img"
                alt="The house from the offer."
                src={props.project.image}
            />
            <Typography variant="h6">
                {props.project.title}
            </Typography>
        </div>
    )
}



interface ProjectsProps {
    projectList: Project[]
}

const Projects = (props: ProjectsProps) => {
  return (
    <>
        <div className="ProjectsContainer">
            {props.projectList.map(p => <ProjectItem project={p}/>)}
        </div>
    </>
  );
}

export default Projects;
