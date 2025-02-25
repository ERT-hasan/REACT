
import Section from "./Section"
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import SocialMedia from "./SocialMedia";
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Contact= ()=>{

        const socialLink = [{icon:<Linkedin/>, title:"Linkedin", url:"https://www.linkedin.com/in/md-wasim-hasan-0175342a9/"},

          {icon:<Github/>, title:"Github", url:"https://github.com/ERT-hasan/MERN-FULL-STACK08"},

          {icon:<Twitter/>, title:"Twitter", url:"https://x.com/home?lang=en-in"},

        ];
      return  <div className="pb-6">
        <Section icon={<Globe/>} sectionTitle="Contact & Social Media">
          <p className="text-gray-700 mb-4">
              Email: mdwasimhasan454@gmail <br />
              Phone: +91 8651406518
          </p>

          {socialLink.map(social =>   <SocialMedia icon={social.icon} 
         title={social.title} key={social.title} url={social.url}/>)}
        </Section>
       

      </div>

};
export default Contact;