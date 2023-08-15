
import React, {useRef} from "react";
import {motion, useScroll} from "framer-motion";
import LiIcon from "./Lilcon";


const Details = ({position, company, companyLink, time, address, work}: any) => {


const ref = useRef(null);

    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    > 
    <h3 className='capitalize font-bold text-2x1'>{position}&nbsp;<a href={companyLink}
    target="novigo.info"
     className="text-primary capitalize"   
    >@{company}</a></h3>
    
    <span className='capitalize font-medium text-dark/75'>
    
    {time} | {address} </span>
    <p className='font-medium w-full'>
            {work}
        </p>
    </motion.div>
    
    </li>
    )
}


const Experience2 = () => {

    return (
        <div className="col-span-3 flex flex-col items-start justify-start">



<div className="w-[75%] mx-auto relative">

<div className="absolute left-8 top-0 w-[4px] h-full Obg-dark frigin-top">


   
<div>
      <main className="mt-16">
        <h1 className="text-3xl font-bold ml-4">timeline example</h1>

        <div className="border-l-8 ml-10 border-red-400 flex flex-col">
        <Details
position="Software Engineer" company= "Novigo" companyLink="www.novigo.info" time="2022-Present"
address="Saint Petersburg, FL"
work="Worked on a team responsible for developing new websites for Novigo private clients including metaFire finiancial, and NoogaNaega"/>


          <div className="h-32 flex items-center">
            <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
            <span className="pl-16">2000</span>
            <Details
position="Software Engineer" company= "Novigo" companyLink="www.novigo.info" time="2022-Present"
address="Saint Petersburg, FL"
work="Worked on a team responsible for developing new websites for Novigo private clients including metaFire finiancial, and NoogaNaega"/>

          </div>

          <div className="h-32 flex items-center">
            <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
            <span className="pl-16">3000</span>
          </div>

          <div className="h-32 flex items-center">
            <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
            <span className="pl-16">4000</span>
          </div>

          <div className="h-32 flex items-center">
            <span className="w-8 h-8 bg-white border-4 border-red-400 rounded-full -ml-5"></span>
            <span className="pl-16">5000</span>
          </div>
        </div>
      </main>
    </div>
   </div>
</div>
</div>


    )


}

export default Experience2