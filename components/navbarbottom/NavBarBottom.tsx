"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavBarBottom.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import "animate.css";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillYoutube,
  AiOutlineClose,
} from "react-icons/ai";
import { localStorageService } from "@/services/localStoreService";

import Image from "next/image";
import Link from "next/link";
const NavBarBottom = () => {
  const [isCloseNavBarHeader, setIsCloseNavBarHeader] = useState(false);
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [langauge, setLangauge] = useState("En");
  const Menus = [
    { name: "Home" },
    { name: "Exprient" },
    { name: "Service" },
    { name: "Project" },
  ];
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleLanguage = (lg: string) => {
    setLangauge(lg);
    localStorageService.set("language", lg);
  };

  const handleToggleMenu = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowscroll = () => {
        if (window.scrollY > 100) {
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
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
  return (
    <nav className={`bg-transition w-full fixed bottom-6 z-[1000] px-2`}>
      <div
        className={`${
          isCloseNavBarHeader ? " animate__fadeInUp" : "animate__fadeOutDown"
        } animate__animated animate__faster  w-full z-30 flex justify-between container mx-auto items-center bg-transparent space-x-2`}
      >
        <div>
          <div
            className="p-2 cursor-pointer lg:hidden  hover:bg-[#717171] hover:text-white  transition-all ease-linear duration-100 rounded-md text-center w-22 flex items-center space-x-2 bg-white text-black"
            onClick={handleToggleMenu}
          >
            <div className="bg-[#36fb50] w-2 h-2 rounded-full"></div>
            <span>Menu</span>
          </div>
        </div>
        <div className=" justify-center items-center space-x-2 lg:flex hidden">
          <div className="max-w-[500px] p-1 bg-black rounded-lg border-4 border-[#181818]">
            <ul className="flex flex-row space-x-2 w-full justify-between">
              {Menus.map((menu, i) => (
                <li
                  key={i}
                  className={`${
                    active === i ? "bg-[#181818]" : "bg-transparent"
                  } p-2 cursor-pointer hover:bg-[#181818] transition-all ease-linear duration-100 rounded-md text-center w-20`}
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  <Link href="/page">{menu.name}</Link>
                </li>
              ))}
              <li
                className="p-2 cursor-pointer hover:bg-[#717171] hover:text-white  transition-all ease-linear duration-100 rounded-md text-center w-22 flex items-center space-x-2 bg-white text-black"
                onClick={handleToggleMenu}
              >
                <div className="bg-[#36fb50] w-2 h-2 rounded-full"></div>
                <span>Menu</span>
              </li>
            </ul>
          </div>
          <div className=" space-x-2 hidden md:flex">
            <div
              onClick={() => {
                handleLanguage("En");
              }}
              className={`${
                langauge == "En" ? "border-white" : "border-[#494949]"
              } rounded-full border p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-100 hover:border-white`}
            >
              EN
            </div>
            <div
              onClick={() => {
                handleLanguage("Vn");
              }}
              className={`${
                langauge == "Vn" ? "border-white" : "border-[#494949]"
              } rounded-full border p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-100 hover:border-white`}
            >
              VN
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            scrollToTop();
          }}
          className="scroll-to-top cursor-pointer  ml-[unset] flex justify-center items-center hover:-translate-y-2 transition-all duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" fixed top-0 left-0 h-screen bg-black origin-top text-white p-10 w-screen z-50"
          >
            <div className="background h-full">
              <div className="video h-full video--cover">
                <video
                  width="100%"
                  className="h-full object-cover"
                  src="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
            <div className="w-full flex absolute top-16 px-16 justify-between left-0 z-50">
              <Image
                width={1200}
                height={1200}
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1695478755/Personal_Branding/logoweb_oqexje.png"
                alt=""
                className="w-9 h-9"
              />
              <AiOutlineClose
                className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-100"
                onClick={handleToggleMenu}
              />
            </div>
            <div className="content">
              <div className="w-full lg:w-[40vw] bg-black h-screen p-3 lg:p-10 absolute top-0 left-2/4 transform -translate-x-2/4 flex items-center">
                <div className="w-full">
                  <div className="w-full overflow-hidden">
                    <motion.div
                      variants={containerVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                      className="flex  flex-col space-x-2 w-full justify-between items-center text-[3rem]"
                    >
                      {Menus.map((menu, i) => {
                        return (
                          <div key={i} className="overflow-hidden">
                            <motion.div
                              variants={menuLinkVars}
                              initial="initial"
                              animate="open"
                              className={`${
                                active === i
                                  ? "text-[#9D9E9D]"
                                  : "bg-transparent"
                              } p-2 cursor-pointer hover:text-[#9D9E9D] uppercase w-full font-medium transition-all ease-linear duration-100 rounded-md text-center`}
                            >
                              <Link href="/page">{menu.name}</Link>
                            </motion.div>
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                  <div className="w-full h-[0.1rem] bg-black rounded-full my-8"></div>
                  <div className="flex space-x-7 justify-center mb-8">
                    <motion.div
                      variants={menuLinkVars}
                      initial="initial"
                      animate="open"
                      className="overflow-hidden"
                    >
                      <AiFillFacebook className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-100" />
                    </motion.div>

                    <motion.div
                      variants={menuLinkVars}
                      initial="initial"
                      animate="open"
                      className="overflow-hidden"
                    >
                      <AiOutlineInstagram className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-100" />
                    </motion.div>

                    <motion.div
                      variants={menuLinkVars}
                      initial="initial"
                      animate="open"
                      className="overflow-hidden"
                    >
                      <AiOutlineGithub className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-100" />
                    </motion.div>

                    <motion.div
                      variants={menuLinkVars}
                      initial="initial"
                      animate="open"
                      className="overflow-hidden"
                    >
                      <AiFillYoutube className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-100" />
                    </motion.div>
                  </div>
                  <div className="flex space-x-2 w-full justify-center">
                    <div
                      onClick={() => {
                        handleLanguage("En");
                      }}
                      className={`${
                        langauge == "En" ? "border-white" : "border-[#494949]"
                      } rounded-full border p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-100 hover:border-white`}
                    >
                      EN
                    </div>
                    <div
                      onClick={() => {
                        handleLanguage("Vn");
                      }}
                      className={`${
                        langauge == "Vn" ? "border-white" : "border-[#494949]"
                      } rounded-full border p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-100 hover:border-white`}
                    >
                      VN
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBarBottom;
