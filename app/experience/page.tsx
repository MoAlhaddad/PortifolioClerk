
import Layout from "../components/Layout";
import profilePic2 from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import Head from "next/head";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import Skills from "../components/Skills";
import Experience2 from "../components/Experience";
import userData from "../constants/data";
import qamarLabs from "../../public/images/projects/qamarLabs.png";
import useCollapse from "react-collapsed";
import NavBar from "../components/Navbar";
const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  imgUrl,
  time,
  webPrev,
}: any) => {

  return (
    <div>
     
      <div className=" experience-card border p-4 rounded-md shadow-xl bg-grey dark:bg-gray-800 z-10 mx-4">
        <Image src={imgUrl} alt={title} className=" rounded-sm" />
        <h1 className="font-semibold text-xl">{title}</h1>
        <a href={companyLink} className="text-gray-500">
          {company}
        </a>
        <p className="text-black-500">{time}</p>
        <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        <Link href={companyLink} passHref>
          <div>
            <h1 className="title">{title}</h1>

            <p className="date"></p>
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className=" experience-card border p-4 rounded-md shadow-xl bg-grey dark:bg-gray-800 z-10 mx-4">
          <Image src={webPrev} />
        </div>
      </div>
    </div>
  );
};

const Details = ({ position, company, companyLink, time, address, work }: any) => {

  return (
    <li
      
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <div>
        <h3 className="capitalize font-bold text-2x1">
          {position}&nbsp;
          <a
            href={companyLink}
            target="novigo.info"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {address}{" "}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

export default function ExperiencePage()  {
  return (
    <>
      
      <main className="flex w-full flex-col items-center justify-center">
        <NavBar/>
        <h1 className="text-3xl font-bold ml-4">Experience</h1>
        <Layout className="pt-16">
          <div>
            <div className="col-span-3 table flex-col items-start justify-start">
              <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                <div className="flex-1">
                  {/* Experience card */}
                  {userData.experience.map((exp, idx) => (
                    <>
                      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
                        <ExperienceCard
                          key={idx}
                          title={exp.title}
                          desc={exp.desc}
                          year={exp.year}
                          time={exp.time}
                          imgUrl={exp.imgUrl}
                          company={exp.company}
                          companyLink={exp.companyLink}
                          webPrev={exp.webPrev}
                        />
                      </div>

                      {idx === userData.experience.length - 1 ? null : (
                        <div className="divider-container flex flex-col items-center mt-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                          </div>
                          <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

