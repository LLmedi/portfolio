
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './css/Slideshow.css';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import { Project } from '../definitions/Project';


interface SSProps{
    project: Project
}

function SlideshowItem(props: SSProps) {
    return (
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
                    <Button variant="text">Learn More</Button>
                </div>
            </div> 
        </div>
    )
}


interface ButtonProps {
    orientation: string;
    onClick: () => void
}

function SlideshowButton(props: ButtonProps) {
    const orientation = props.orientation.toLowerCase()
    
    if (orientation === 'left'){
        return (
            <div className="ButtonLeft" onClick={props.onClick}> 
                <ChevronLeft />
            </div>
        )
    } else {
        return (
            <div className="ButtonRight"  onClick={props.onClick}>
                <ChevronRight />
            </div> 
        )
    }
}

interface SlideshowProps {
    projectList: Project[]
}

const Slideshow = (props: SlideshowProps) => {
    
    const [currentProject, setCurrentProject] = useState(0);
    const totalProjects = props.projectList.length
    
    function onLeftClick(){
        const temp = currentProject - 1;

        const current = temp < 0 ? totalProjects -1 : temp;

        setCurrentProject(current)
    }

    function onRightClick(){
        const temp = currentProject + 1;

        const current = temp >= totalProjects? 0 : temp;

        setCurrentProject(current)
    }

  return (
    <>
        <div className="ShowcaseContainer">
            <SlideshowButton orientation={"left"} onClick={onLeftClick}/>
            <SlideshowItem project={props.projectList[currentProject]}/>
            <SlideshowButton orientation={"right"} onClick={onRightClick}/>   
        </div>
    </>
  );
}

export default Slideshow;
