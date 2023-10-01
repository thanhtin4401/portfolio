"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "./NavBar.module.scss";

const navLinks = [
  { title: "What do we do", href: "/" },
  { title: "What do we do", href: "/" },
  { title: "What do we do", href: "/" },
  { title: "What do we do", href: "/" },
  { title: "What do we do", href: "/" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((open) => !open);
  };
  const [isSoundOn, setIsSoundOn] = useState(true);
  const handleOnSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <nav className={`fixed top-8 w-full py-2 px-2 z-10`}>
      <div
        className={`${styles.navbar_background} py-1 px-4 rounded-md sm:container flex justify-between m-auto items-center`}
      >
        <div className="logo flex">
          <img
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
          <div className="bg-black w-2 h-2 rounded-full"></div>
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
    </nav>
  );
};

export default NavBar;
