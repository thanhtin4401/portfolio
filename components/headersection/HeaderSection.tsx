"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section className="h-screen w-full bg-[#292929] relative ">
      <div className="w-full overflow-hidden h-full relative">
        <motion.img
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          style={{
            y: textY,
          }}
          src="https://res.cloudinary.com/dvzingci9/image/upload/v1693048037/Figma_Logo_wib2na.png"
          className="animate__fadeInUp w-[25rem] layput_figma absolute z-10 -bottom-[8rem] -left-20 hidden lg:block"
          alt=""
        />
        <motion.img
          animate={{ x: -100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          style={{
            y: textY,
          }}
          src="https://res.cloudinary.com/dvzingci9/image/upload/v1693048022/takeaway-cup-dynamic-color_p1258h.png"
          className="animate__fadeInUp w-[10rem] layput_figma absolute z-10 top-[10rem] right-[2rem] hidden lg:block"
          alt=""
        />
        <motion.div
          style={{
            y: textY,
          }}
          className="animate__zoomInDown mb:w-full sm:w-full xl:w-2/4 
          flex
          md:justify-center
          md:items-center
          sm:justify-start
          sm:items-start
          mb:justify-start
          mb:items-start
          flex-col
        "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.div>
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
              src="https://res.cloudinary.com/dvzingci9/image/upload/v1696524174/Personal_Branding/Header/Figma_Cursor_ztvaw6.png"
              alt=""
              className="absolute h-[2rem] top-[40%] right-[2.5rem] lg:top-[40%] lg:right-[2.5rem]"
            />
            <div className=" absolute bottom-0 px-2 py-2 rounded-full border border-white duration-75 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#C5EFFF"
                className="w-4 h-4 mt-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full left-0 h-28 bg-gradient-to-t from-[black] z-10"></div>
      <section className="absolute w-full lg:w-[110vw] -bottom-[5rem]  overflow-hidden z-[20] lg:-rotate-3">
        <SkillParalax baseVelocity={-5}>Framer Motion</SkillParalax>
      </section>
    </section>
  );
};

export default HeaderSection;
