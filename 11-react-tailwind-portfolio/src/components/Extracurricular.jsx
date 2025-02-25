import List from "./List";
import Section from "./Section"
import { Award } from 'lucide-react';

const Extracurricular= ()=>{
  const items =["Volunteer at local coding bootcamp for underprivileged",
     "Organizer of city-wide hackathon event",
     "Member of the College Chess Club"]

    return <Section icon={<Award/>}
     sectionTitle="Extracurricular & Activities">
       <List items={items}/>
    </Section>

}
export default Extracurricular;