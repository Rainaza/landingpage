import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <section id="contact" className="section py-16 lg:sections">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
              Get in touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none">
              Let's work <br /> together!
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-12 pb-24 p-6"
          >
            <form>
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
              />
              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg">Send message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
