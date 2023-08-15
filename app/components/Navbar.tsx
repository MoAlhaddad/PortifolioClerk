'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState} from 'react';
import Logo from './Logo';
import {TwitterIcon, DribbbleIcon, LinkedInIcon, GithubIcon} from "./icons" 
import {  motion } from 'framer-motion';
import {signIn, signOut, useSession} from 'next-auth/react';
import classes from './navbar.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import profilePic2 from "../../public/images/profile/developer-pic-2.jpg";
import { CustomLink } from './CustomLink';
import { SignInBtn } from './SignInBtn';
import { UserButton } from '@clerk/nextjs';


const NavBar = () => {
 

 
  // only show nav when logged in
 

    const [showDropdown, setShowDropdown] = useState(false)

  
    const handleShowDropdown = () => setShowDropdown(prev => true)
  
    const handleHideDropdown = () => setShowDropdown(prev => false)
  
    const loggedIn = false

    return (
        <header className='w-full p-32 py-8 font-medium flex items-center justify-between'>
        
          
        
        <UserButton/>
                <>
                <nav>

                <CustomLink
                    href="/" title="Home" className="mr-4"
                >Home</CustomLink>
                <CustomLink href="/about" title="About" className="mr-4">About</CustomLink>
                <CustomLink href="/experience" title="Experience" className="mr-4">Experience</CustomLink>
                <CustomLink href="reviews" title="Reviews" className="mr-4">Reviews</CustomLink>
                <CustomLink href="skills" title="Skills" className="mr-4">Skills</CustomLink>
                <SignInBtn/>
                
                </nav>
               
          
            <Logo/>
            <nav className=' flex items-center justify-center flex-wrap'> 
            <motion.a href="https://www.linkedin.com/in/mohamad-alhaddad-002a30161/" target={"_blank"} 
                whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-6 mr-3">
                <LinkedInIcon/>
            </motion.a>
                
            
            </nav>
</>
            
            

            </header>
    )
}


export default NavBar