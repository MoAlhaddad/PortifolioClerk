import Image from 'next/image';
import { SignInBtn } from "./components/SignInBtn";
import { Montserrat } from "next/font/google";
import { SignIn } from "@clerk/nextjs";
import type {User} from "@clerk/nextjs/api";
import { currentUser, UserProfile, UserButton } from '@clerk/nextjs/app-beta';
import { LinkArrow } from "./components/icons";
import NavBar from './components/Navbar';
import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import profilePic from "../public/images/profile/developer-pic-1.png";
export default async function Home() {
  const user: User | null = await currentUser();
  
  
  return (
    <main   className="font-mont bg-light w-full min-h-screen">
       <NavBar/>
       
       {!!user ? (
        <>
         <div className="flex items-center justify-between w-full">
        
        <div className="w-1/2 flex flex-col items-center self ">
          <Image src={profilePic} alt="Mohamad" className="w-full h-auto" />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text="Turning Vision Into Reality With Code and Design"
            className="!text-6xl !text-left"
          />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning
            ideas into innovative web applications. Explore my latest
            projects and articles, showcasing my expertise in React.js and
            web development.
          </p>
          <div className="flex items-center self-start mt-2">
            <Link
              href="/MohamadResume.pdf"
              target={"_blank"}
              className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border:solid border-transparent hover: border-dark
              "
              download={true}
            >
              Resume
              <LinkArrow className={"w-6 ml-1"} />
            </Link>
            <Link
              href="mailto:mohamadalhaddad25@gmail.com"
              target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
   
         
        </>
      ) : (
      
        
        <div className="flex items-center justify-between w-full">
        
            <div className="w-1/2 flex flex-col items-center self ">
              <Image src={profilePic} alt="Mohamad" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code and Design"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/MohamadResume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border:solid border-transparent hover: border-dark
                  "
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:mohamadalhaddad25@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
       
      )}
     

    </main>
  )
}
