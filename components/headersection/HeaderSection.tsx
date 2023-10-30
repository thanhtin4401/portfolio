"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeaderSection.module.scss";
import "animate.css";
import SkillParalax from "../skillparalax/SkillParalax";
import Image from "next/image";
import CardBlog from "../cardblog/CardBlog";

const HeaderSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"]);

  return (
    <section className="lg:h-screen w-full bg-[#292929] relative">
      <div className="w-full h-full  relative px-2 lg:px-0 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dvzingci9/image/upload/v1698555263/Personal_Branding/Header/Group_1869_o1iroj.png"
          className="absolute top-0 opacity-30 w-full right-0 rotate-90"
          alt=""
          width={1200}
          height={1200}
        />
        <Image
          src="https://res.cloudinary.com/dvzingci9/image/upload/v1698555268/Personal_Branding/Header/Mask_group_kihuen.png"
          className="absolute top-0  w-full left-0"
          alt=""
          width={1200}
          height={1200}
        />
        <div className="lines w-full h-full flex absolute top-0 left-0 z-[1] bg-none justify-evenly">
          <div className="w-[1px] opacity-30 bg-white"></div>
          <div className="w-[1px] opacity-30 bg-white"></div>
          <div className="w-[1px] opacity-30 bg-white"></div>
          <div className="w-[1px] opacity-30 bg-white"></div>
        </div>
        <div className="w-full overflow-hidden h-full relative">
          <motion.img
            animate={{ x: 20 }}
            transition={{ ease: "easeOut", duration: 2, delay: 2.1 }}
            style={{
              y: textY,
            }}
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1693048037/Figma_Logo_wib2na.png"
            className="animate__fadeInUp w-[25rem] layput_figma absolute z-10 -bottom-[8rem] -left-20 hidden lg:block"
            alt=""
          />
          <motion.img
            transition={{ ease: "easeOut", duration: 2, delay: 2.1 }}
            animate={{ x: -100 }}
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
         
        "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          ></motion.div>

          <div className="mt-[6rem] lg:mt-0 flex  justify-center h-full items-center container mx-auto">
            <div className="relative z-10 flex lg:space-x-4 space-x-0 space-y-4 lg:space-y-0  justify-center flex-col lg:flex-row items-center ">
              <motion.div
                style={{
                  y: textY,
                }}
                className="animate__zoomInDown w-full lg:w-2/4
                  flex
                  flex-col
                "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 2.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="flex items-center space-x-4">
                  {" "}
                  <h1
                    className={`${styles.text_name} text-[2rem] lg:text-[2.5rem] font-bold text_name`}
                  >
                    THANH TIN{" "}
                    <span className={`${styles.text_title} `}> DEVELOP</span>
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="yellow"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>

                <p className="text-white  text-left  font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum non quidem sint reiciendis numquam repellendus, aliquid
                  nostrum nam est tempore!
                </p>
                <div className="flex my-4">
                  <div className="contact_link h-8 w-8 rounded-full bg-gray-600">
                    <Image
                      width={1200}
                      height={1200}
                      src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/LinkedIn_wpm1mv.png"
                      className="object-contain"
                      alt=""
                    />
                  </div>
                  <div className="contact_link h-8 w-8 rounded-full mx-3 bg-gray-600 border-white border">
                    <Image
                      width={1200}
                      height={1200}
                      src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/Github_iyvt36.png"
                      className="object-contain"
                      alt=""
                    />
                  </div>
                  <div className="contact_link h-8 w-8 rounded-full bg-gray-600 ">
                    <Image
                      width={1200}
                      height={1200}
                      src="https://res.cloudinary.com/dvzingci9/image/upload/v1692465378/Personal_Branding/Header/Facebook_i4i3qd.png"
                      className="object-contain"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.div
                    className="animate__zoomInDown mb:w-full sm:w-full xl:w-2/4 
                          flex
                        
                        "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 2.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <CardBlog url="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4" />
                  </motion.div>
                  <motion.div
                    className="animate__zoomInDown mb:w-full sm:w-full xl:w-2/4 
                          flex
                        
                        "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 2.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <CardBlog url="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="w-full lg:w-2/4 relative flex justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    y: textY,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 2.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  src="https://res.cloudinary.com/dvzingci9/image/upload/v1698556251/Personal_Branding/Header/Group_1834_fs2zu6.png"
                  alt=""
                  className="absolute right-0 top-0 lg:max-w-[33rem] z-10"
                />
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  style={{
                    y: textY,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 2.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  src="https://res.cloudinary.com/dvzingci9/image/upload/v1696156572/Personal_Branding/Header/Group_1868_vsuopt.png"
                  alt=""
                  className="sm:max-w-[40rem] relative z-20"
                />
              </div>

              <div
                className={`${styles.scroll_to_bottom} absolute bottom-16 z-50 lg:bottom-0 px-2 py-2 rounded-full border border-white`}
              >
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
      </div>

      <section className="absolute w-full lg:w-[110vw] -bottom-[5rem]  overflow-hidden z-[20] lg:-rotate-3">
        <SkillParalax baseVelocity={-5} />
      </section>
    </section>
  );
};

export default HeaderSection;
