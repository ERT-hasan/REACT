
import Section from "../Section"
import { Briefcase } from 'lucide-react';
import Project from "./Project"

const Projects= ()=>{

     const projectList = [
      {title:"Rock, Paper, Scissors",desc:" A timeless game where strategy and chance collide to determine the winner.Implemented game logic using JavaScript, ensuring accurate results based on player choices and providing instant feedback on each round",techUsed:["Html","Css","Js"]},

      {title:"Calculator",desc:"Built a functional calculator using JavaScript with optimized algorithms for accurate computations.Focused on responsive design and user-friendly interfaces",techUsed:["Html","Css","Js"]},
      
      {title:"Personal Portfolio",desc:" This portfolio itself! Built using React and Tailwind CSS.",techUsed:["React","Tailwind"]}

     ];

    return ( <Section icon={<Briefcase/>} sectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
);
};
export default Projects;