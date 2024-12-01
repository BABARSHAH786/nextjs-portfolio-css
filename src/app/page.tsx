import Image from "next/image";
import styles from "./page.module.css";




// work 
// import Image from "next/image";

// import ParticlesContainer from "../../components/ParticlesContainer";
import ProjectBtn from "../../components/ProjectsBtn";
import Avatar from "../../components/Avatar";

// import { motion } from "framer-motion";

// import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-80 xl:text-left h-full container mx-auto ">
          {/* title */}
          <h1
            
            className="h1"
          >
            Web Developer <br />
            <p className="xl:text-xl">Innovative Web Solutions for Modern Businesses</p>{""}
            <span className="text-accent">Digital Reality</span>
          </h1>
          {/* subtitle */}
          <p
            
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            As a web developer, I specialize in crafting responsive and user-centered websites, turning ideas into seamless digital experiences. With expertise across front-end and back-end technologies, I build sites that are not only visually engaging but also robust and scalable. My goal is to blend innovative design with functionality to help brands thrive online.
          </p>
          <div className="flex justify-center  relative">
            <ProjectBtn />
          </div>

          <div
       
            className="hidden xl:flex"
          >,
            <ProjectBtn />
          </div>
        </div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0 ">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* <ParticlesContainer /> */}



          <div
          
            className="w-full h-full max-w-[650px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
          >
            <Avatar />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Home;
