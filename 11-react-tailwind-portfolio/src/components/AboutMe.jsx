import { User } from 'lucide-react';
import Section from './Section';
const AboutMe = () =>{

    return (
        <div className="mt-6">
    <Section icon={<User/>} sectionTitle="About Me">
      
         <p>
          I'am  a passionate front End developer with 15 days of experience 
          in building web application.I love creating efficient, scalable,and 
          user-friendly solution to complex problem.
         </p>
      </Section>
      </div>
    );
}

export default AboutMe;