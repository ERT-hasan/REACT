import Pill from "./pill";
import Section from "./Section"
import { Code } from 'lucide-react';

const Skills= ()=>{

    const skillTitles = ["Html","Css","JavaScript","React","Bootstrap","Sql","Tailwind","NodeJs","Git"];

    return <Section icon={<Code/>} sectionTitle="Skills">
        {skillTitles.map(title => <Pill key={title} title={title}/>)}
      
    </Section>

}
export default Skills;