"use client";
import React, { useEffect, useState } from "react";
import styles from "./Intro.module.scss";
import "animate.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";
const Intro = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Execute a function after a delay of 3 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`${
        open ? "animate__fadeOutUpBig" : ""
      } animate__animated w-full h-screen bg-[#212121] z-[10001] fixed flex justify-center text-center animate__slow `}
      id="home"
    >
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dvzingci9/image/upload/v1698223088/Personal_Branding/Intro/Frame_179_ourabw.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute bg-cover animate__fadeIn animate__animated bg-no-repeat bg-center w-full h-full"
      ></div>
      <div className="content mt-28 animate__bounceInDown animate__animated">
        <h1 className={`${styles.intro_h1} text-[3rem] font-bold`}>
          Hi There <span className={styles.waving_hand}>👋</span> ! Im Tin and
          Im a <br />
          <span className={styles.text_hight_light}>Front End Developer</span>
        </h1>
        <p className="font-[600] text-[1.75rem]">Welcome to my website</p>
      </div>
      <Image
        width={1200}
        height={1200}
        src="https://res.cloudinary.com/dvzingci9/image/upload/v1698222274/Personal_Branding/Intro/image_8_duzhpa.png"
        alt=""
        className="absolute bottom-0 transform -translate-x-2/4 animate__fadeInUp animate__animated"
      ></Image>
      <div className="absolute bottom-0 w-full left-0 h-28 bg-gradient-to-t from-[black] z-20"></div>
    </div>
  );
};

export default Intro;
