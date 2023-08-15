import React from "react";
import { motion } from "framer-motion";
import Skil from "./Skil";
import { ProgressBar, Col, Row, Card, Table, Image, Container } from 'react-bootstrap';
import MongoLogo from  "../../public/images/svgs/icons8-mongodb-48.png"
import {mongoDb} from "../../public/images/svgs/nodejs-alt.svg"

const Skill = ({ name, x, y, source }: any) => {
  return (
    <div className="skills">
  
    <h2>I have experience with these technologies</h2>
 
<div className="skillsGrid">
    
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
    <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
</div>            
</div>
  );
};

const Skills = ({ name, x, y, source }: any) => {
  return (
    <>
     
      <div class="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
  <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
      <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-xl font-bold text-gray-900">My Skills</p>
        
        </div>
    
      </div>
   
      <div class="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
      <p class="text-xl font-bold text-gray-900">Frontend</p>
        <div class="pt--10 pr-0 pb-10 pl-0">
          <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div class="flex items-center flex-1 min-w-0">
              
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
             
                <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                 
                  
                </div>

   
              </div>
              <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
              <Skil source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" class="flex-shrink-0 object-cover rounded-full btn- w-8 h-6" alt="The logo icon for HTML 5" title="HTML 5"/>
              <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                 
                
               
                 <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/redux.svg"  class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"/>
               
</div>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" alt="The logo icon for CSS3" title="CSS 3"/>
    <img name="CSS" x="-Sww" y="-10vw" source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/>
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/postcss.svg" class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"/>
           
            </div>
          </div>
          <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div class="flex items-center flex-1 min-w-0">
       
               
              </div>
           
            </div>
          </div>
          <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
          <p class="text-xl font-bold text-gray-900">Backend</p>
            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div class="flex items-center flex-1 min-w-0">
                
              <Image
      priority
      src="/images/svgs/nodejs-alt.svg"
      height={32}
      width={32}
      alt="Node"
    />
    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"/>
                
</div>
              <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
           
    <Image
      priority
      src="/images/svgs/postman.svg"
      height={32}
      width={32}
      alt="F"
    />
    <p>Postman</p>
    </div>
    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
           
    <Image
      priority
      src="/images/svgs/socket-io-svgrepo-com.svg"
      height={32}
      width={32}
      alt="F"
    />
    <p>Socket.io</p>
    </div>
   




</div>
<div>

              </div>
            
            </div>
          </div>
          <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div class="flex items-center flex-1 min-w-0">
              
                <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                <p class="text-xl font-bold text-gray-900">Databases</p>
                 
<div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <Image
      priority
      src="/images/svgs/mongodb.svg"
      height={32}
      width={32}
      alt="Mdb"
    />
    <p>MongoDB</p>
    </div>
    </div>
<div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
    <Image
      priority
      src="/images/svgs/firebase.svg"
      height={32}
      width={32}
      alt="F"
    />
    <p>Firebase</p>
    </div>
    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
    <Image
      priority
      src="/images/svgs/mysql.svg"
      height={32}
      width={32}
      alt="F"
    />
    <p>SQL</p>
    </div>
                
              </div>
            
            </div>
          </div>
          <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div class="flex items-center flex-1 min-w-0">
              
           
           <Image
             priority
             src="/images/svgs/api-svgrepo.svg"
             height={32}
             width={32}
             alt="F"
           />
           
           
          
                <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p class="text-lg font-bold text-gray-800 truncate">Api Intergration</p>
                  
                </div>
               
              </div>
              <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
    <Image
      priority
      src="/images/svgs/muxvid.svg"
      height={52}
      width={52}
      alt="mux"
    />
   
    <p></p>
    </div>
    <Image
      priority
      src="/images/svgs/html5-canvas.svg"
      height={52}
      width={52}
      alt="mux"
    />
              <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                <a href="" class="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">View Demos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Skills;