"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./NavBar.module.scss";
import "animate.css";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
const NavBar = () => {
  const ref = useRef(null);
  const [isCloseNavBarHeader, setIsCloseNavBarHeader] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10000%"]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowscroll = () => {
        if (window.scrollY > 30) {
          setIsCloseNavBarHeader(true);
        } else {
          setIsCloseNavBarHeader(false);
        }
      };

      window.addEventListener("scroll", handleWindowscroll);

      return () => {
        window.removeEventListener("scroll", handleWindowscroll);
      };
    } else {
      return;
    }
  }, []);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((open) => !open);
  };
  const [isSoundOn, setIsSoundOn] = useState(true);
  const handleOnSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <motion.div
      style={{
        y: textY,
      }}
      className={` absolute top-8 w-full py-2 px-2 z-10 animate__animated animate__faster`}
    >
      <div
        className={`${styles.navbar_background} py-1 px-4 rounded-md sm:container flex justify-between m-auto items-center`}
      >
        <div className="logo flex">
          <Image
            width={1200}
            height={1200}
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1695478755/Personal_Branding/logoweb_oqexje.png"
            alt=""
            className="w-8 h-8"
          />
          <div className="notice flex items-center">
            <span className="ml-2 text-[12px] uppercase hidden sm:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#25ff25] w-2 h-2 rounded-full"></div>
          <span className="mx-2 text-[12px]">DASHBOARD VIEW</span>
          <div
            className={`${
              isSoundOn ? "w-24" : "w-[2.4rem]"
            } ease-in-out transition-all ${styles.sound_container}`}
            onClick={() => {
              handleOnSound();
            }}
          >
            <div
              className={`${
                isSoundOn ? "hidden" : "flex"
              } justify-center items-center w-full h-full`}
            >
              <div className={styles.triangle_right}></div>
            </div>
            <div className={`${isSoundOn ? styles.loader : "hidden"}`}>
              <span className={styles.stroke}></span>
              <span className={styles.stroke}></span>
              <span className={styles.stroke}></span>
              <span className={styles.stroke}></span>
              <span className={styles.stroke}></span>
              <span className={styles.stroke}></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;
