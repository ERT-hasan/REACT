import Graduations from "./Graduations";
import Section from "./Section"
import { BookOpen } from 'lucide-react';

const Educations= ()=>{

    return <Section icon={<BookOpen/>} sectionTitle="Educations">
      <Graduations title="Master Of Computer Application" school="Deccan College &
       Tech" year="2022-2024"/>

      <Graduations title="Full Stack Web Development Bootcamp" school="Kg Coding" year="2024"/>
    
    </Section>

}
export default Educations;