import React from "react";

import Image from "../assets/avatar.svg";

import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div className="section" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gapx-x-12 justify-center">
          <div className="flex-1 text-center font-secondary lg:text-left items-center justify-center self-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              BEN <span>AIDEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent mb-8"
                wrapper="span"
                repeat={Infinity}
              />
              <p className="text-base mb-8 max-w-lg mx-auto lg:mx-0">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem
              </p>
              <div className="flex flex-col max-w-max gap-y-7 items-center mb-12 mx-auto lg:mx-0">
                <div className="flex gap-6 items-center">
                  {" "}
                  <button className="btn btn-lg ">Contact me</button>
                  <a className="text-gradient btn-link">My Portfolio</a>
                </div>
                <div>
                  <div className="flex text-[20px] gap-x-6  mx-auto lg:mx-0 justify-center lg:justify-start  ">
                    <a href="#" className="hover:scale-105 transition ease-in">
                      <FaYoutube />
                    </a>
                    <a href="#" className="hover:scale-105 transition ease-in">
                      <FaGithub />
                    </a>
                    <a href="#" className="hover:scale-105 transition ease-in">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center"
        >
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
