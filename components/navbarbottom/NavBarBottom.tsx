"use client";
import React, { useState } from "react";
import styles from "./NavBarBottom.module.scss";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillYoutube,
  AiOutlineClose,
} from "react-icons/ai";

const NavBarBottom = () => {
  const Menus = [
    { name: "Home" },
    { name: "Exprient" },
    { name: "Service" },
    { name: "Project" },
  ];

  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((toggleMenu) => !toggleMenu);
  };
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
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
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

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };
  return (
    <nav className="bg-transparent ">
      <div className="fixed bottom-6 w-full z-30 flex justify-center items-center bg-transparent space-x-2">
        <div className="max-w-[500px] p-1 bg-black rounded-lg border-4 border-[#181818]">
          <ul className="flex flex-row space-x-2 w-full justify-between">
            {Menus.map((menu, i) => (
              <li
                key={i}
                className={`${
                  active === i ? "bg-[#181818]" : "bg-transparent"
                } p-2 cursor-pointer hover:bg-[#181818] transition-all ease-linear duration-300 rounded-md text-center w-20`}
                onClick={() => {
                  setActive(i);
                }}
              >
                {menu.name}
              </li>
            ))}
            <li
              className="p-2 cursor-pointer hover:bg-[#181818] transition-all ease-linear duration-300 rounded-md text-center w-22 flex items-center space-x-2 bg-white text-black"
              onClick={handleToggleMenu}
            >
              <div className="bg-[#36fb50] w-2 h-2 rounded-full"></div>
              <span>Menu</span>
            </li>
          </ul>
        </div>
        <div className="flex space-x-2">
          <div className="rounded-full border border-white p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-300 hover:border-white">
            EN
          </div>
          <div className="rounded-full border border-[#494949] p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-300 hover:border-white">
            VN
          </div>
        </div>
      </div>
      {toggleMenu && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" fixed top-0 left-0 h-screen bg-black origin-top text-white p-10 w-screen"
        >
          <div className="background">
            <div className="video video--cover">
              {/* <video
                width="100%"
                className="h-screen object-cover"
                src="https://res.cloudinary.com/dvzingci9/video/upload/v1665504047/airBnB/video/X2Download.app-_4K_HDR_NON_NUOC_CAO_BANG_UNESCO_GLOBAL_GEOPARK_VIETNAM.-_1080p_ruoqf8.mp4"
                autoPlay
                loop
                muted
              ></video> */}
            </div>
          </div>
          <div className="w-full bg-black h-full "></div>
          <div className="w-full flex absolute top-16 px-16 justify-between left-0">
            <img
              src="https://res.cloudinary.com/dvzingci9/image/upload/v1695478755/Personal_Branding/logoweb_oqexje.png"
              alt=""
              className="w-9 h-9"
            />
            <AiOutlineClose
              className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-300"
              onClick={handleToggleMenu}
            />
          </div>
          <div className="content">
            <div className="w-[40vw] bg-black h-screen p-10 absolute top-0 left-2/4 transform -translate-x-2/4 flex items-center">
              <div className="w-full">
                <div className="w-full overflow-hidden">
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    className="flex  flex-col space-x-2 w-full justify-between items-center text-[3.95vw]"
                  >
                    {Menus.map((menu, i) => {
                      return (
                        <div className="overflow-hidden">
                          <motion.div
                            variants={menuLinkVars}
                            initial="initial"
                            animate="open"
                            key={i}
                            className={`${
                              active === i ? "text-[#9D9E9D]" : "bg-transparent"
                            } p-2 cursor-pointer hover:text-[#9D9E9D] uppercase w-full font-medium transition-all ease-linear duration-300 rounded-md text-center`}
                          >
                            {menu.name}
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
                    <AiFillFacebook className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-300" />
                  </motion.div>

                  <motion.div
                    variants={menuLinkVars}
                    initial="initial"
                    animate="open"
                    className="overflow-hidden"
                  >
                    <AiOutlineInstagram className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-300" />
                  </motion.div>

                  <motion.div
                    variants={menuLinkVars}
                    initial="initial"
                    animate="open"
                    className="overflow-hidden"
                  >
                    <AiOutlineGithub className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-300" />
                  </motion.div>

                  <motion.div
                    variants={menuLinkVars}
                    initial="initial"
                    animate="open"
                    className="overflow-hidden"
                  >
                    <AiFillYoutube className="w-8 h-8 text-[white] hover:text-[#9D9E9D] transition-all duration-300" />
                  </motion.div>
                </div>
                <div className="flex space-x-2 w-full justify-center">
                  <div className="rounded-full border border-white p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-300 hover:border-white">
                    EN
                  </div>
                  <div className="rounded-full border border-[#494949] p-[0.4rem] text-[12px] cursor-pointer transition-all ease-linear duration-300 hover:border-white">
                    VN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBarBottom;
