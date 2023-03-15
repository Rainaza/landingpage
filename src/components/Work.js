import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "./../assets/portfolio-img1.png";
import Img2 from "./../assets/portfolio-img2.png";
import Img3 from "./../assets/portfolio-img3.png";
const Work = () => {
  return (
    <div id="work" className="sections">
      <div className="container mx-auto">
        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb0-">
          <div className="flex flex-col lg:block gap-x-10">
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit amet consectatur adipiscing elit Rapellat
              hic Harum quis cum velit neque esse eio molestias doloremque
              explicabo
            </p>
            <button className="btn btn-sm">View all projects</button>
          </div>

          <div
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            viewport={{ once: false, amount: 0.7 }}
            whileInView={"show"}
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img1}
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">Project Title</span>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img2}
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">Project Title</span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
          >
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img3}
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">UI/UX Design</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-500 ease-out z-50">
              <span className="text-gradient">Project Title</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
