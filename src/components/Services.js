import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    descryption: "Lorem iupsum dolo sit amet dsdfafa dgasfsdf sdfgsd f sfdsfs",
    link: "Learn more",
  },
  {
    name: "Development",
    descryption: "Lorem iupsum dolo sit amet dsdfafa dgasfsdf sdfgsd f sfdsfs",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    descryption: "Lorem iupsum dolo sit amet dsdfafa dgasfsdf sdfgsd f sfdsfs",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    descryption: "Lorem iupsum dolo sit amet dsdfafa dgasfsdf sdfgsd f sfdsfs",
    link: "Learn more",
  },
];
services.map((element) => console.log(element));
const Services = () => {
  return (
    <div id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat p-2  mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5 years of
              experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <div className="flex-1">
            <div>
              {services.map((element) => {
                return (
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border-b border-white/20 h-[146px] mb-[36px]"
                  >
                    <div className="max-w-full">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                            {element.name}
                          </h4>
                          <p className="font-secondary leading-tight">
                            {element.descryption}
                          </p>
                        </div>
                        <div className="flex flex-col flex-1 items-end">
                          <a
                            href="#"
                            className="btn w-9 h-9 mb-[42px] flex items-center justify-center"
                          >
                            <BsArrowUpRight />
                          </a>
                          <a className="text-gradient text-sm" href="#">
                            {element.link}
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
