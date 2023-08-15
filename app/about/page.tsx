import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import profilePic2 from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import Head from "next/head";
import AnimatedNumbers from "../components/a"
import Skills from "../components/Skills";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import NavBar from "../components/Navbar";



export default function AboutPage()  {
  return (
    <>
      <Head>
        <title>Mohamad | About </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <NavBar/> 
        <Layout className="pt-16">
          <AnimatedText
            text="Success is not final; failure is not fatal: It is the courage to continue that counts"
            className="mb-16 text-base"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="my-4 font-medium">
                Greetings, Im a Dedicated Software Engineering professional with
                history of meeting company goals utilizing consistent and
                organized practices. Skilled in working under pressure and
                adapting to new situations to learning new technologies with 2
                years experience as a Frontend Developer for Spawnn Gaming
                Startup , and Novigo Web Consulting company I am always looking
                for new and innovative ways to bring my clients Vision to life
              </p>
              <p className="font-medium">
                I believe that design is about more than just making things look
                pretty. Its about soliving problems, creating intuitive,
                enjoyable experiences for users
              </p>
            </div>

            <div className="col-span-3 relative h-max border-2  border-solid border-dark bg-light p-8 rounded-[2rem]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />

              <Image
                src={profilePic2}
                alt="Mohamad"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  2
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  20 +
                </span>

                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                 2 +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          {/* <Skills /> */}

          {/* <Experience2 />  */}
        </Layout>
      </main>
    </>
  );
  }