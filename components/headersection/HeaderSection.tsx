"use client";
import React from "react";
import { motion } from "framer-motion";
import { wrap } from "@motionone/utils";
import styles from "./HeaderSection.module.scss";
import "animate.css";
import SkillParalax from "../skillparalax/SkillParalax";
const menuLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const HeaderSection = () => {
  return (
    <section className="h-screen w-full bg-[#292929] relative">
      <div className=" flex justify-center  h-full items-center">
        <div className="relative z-10 flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696156572/Personal_Branding/Header/Group_1868_vsuopt.png"
            alt=""
            className="sm:max-w-[40rem]"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151785/Personal_Branding/Header/VS_Code_Light_i9yqks.png"
            alt=""
            className="animate__zoomIn animate__animated  absolute transform hover:scale-150 transition-all duration-300 hover:rotate-12 top-[2rem] right-[1rem] w-[4.5rem] sm:w-[8rem] "
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151784/Personal_Branding/Header/Icon-1_e0fgtz.png"
            alt=""
            className="animate__zoomIn animate__animated  absolute transform hover:scale-150 transition-all duration-300 hover:-rotate-12 w-[4rem] top-[4rem] left-[1rem] sm:w-[6rem]"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151798/Personal_Branding/Header/Icon-2_owdsuw.png"
            alt=""
            className="animate__zoomIn animate__animated  absolute transform hover:scale-150 transition-all duration-300 hover:rotate-12 w-[6rem] bottom-[4rem] right-[1rem] sm:w-[8rem]"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151798/Personal_Branding/Header/Icon_f7lxtt.png"
            alt=""
            className="animate__zoomIn animate__animated  absolute transform hover:scale-150 transition-all duration-300 hover:-rotate-12 bottom-[4rem] left-[1rem] w-[4rem] sm:w-[6rem]"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1692282579/Personal_Branding/Header/Figma_Cursor_lrdh6e.svg"
            alt=""
            className="absolute top-[38%] -right-[1rem]"
          />
        </div>
      </div>
      <div className="w-full mx-auto absolute pt-[4rem] top-0 overflow-hidden h-full z-[5]">
        <div className="container w-full mx-auto flex flex-col justify-between items-center text-center h-full">
          <div className="overflow-hidden">
            <motion.div
              variants={menuLinkVars}
              initial="initial"
              animate="open"
              className={`p-2 cursor-pointer hover:text-[#9D9E9D] uppercase w-full font-medium transition-all ease-linear duration-300 rounded-md text-center`}
            >
              <h1
                className="text-[11.4rem]
                font-[900] text-[#545454]"
              >
                THANH TIN
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={menuLinkVars}
              initial="initial"
              animate="open"
              className={`p-2 cursor-pointer hover:text-[#9D9E9D] uppercase w-full font-medium transition-all ease-linear duration-300 rounded-md text-center`}
            >
              <h1
                className={`${styles.outline_text} text-[11rem]
        font-[900]`}
              >
                FRONT END
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={menuLinkVars}
              initial="initial"
              animate="open"
              className={`p-2 cursor-pointer hover:text-[#9D9E9D] uppercase w-full font-medium transition-all ease-linear duration-300 rounded-md text-center`}
            >
              <h1
                className={`${styles.outline_text} text-[11rem]
        font-[900]`}
              >
                DEVELOP
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
      <div>
        helo
        <SkillParalax baseVelocity={-2}></SkillParalax>
      </div>
    </section>
  );
};

export default HeaderSection;
