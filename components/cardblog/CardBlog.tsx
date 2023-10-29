import React from "react";
import styles from "./CardBlog.module.scss";
const CardBlog = ({ url = "" }) => {
  return (
    <div className={`${styles.cardblog} bg-[#414141] p-2 lg:p-4 text-left`}>
      <div className="line-header w-full h-[0.2rem] lg:h-[0.4rem]  rounded-lg mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl "></div>
      <video muted autoPlay loop className="rounded-xl">
        <source src={`${url}`} />
      </video>
      <h2 className="text-white text-[0.6rem] lg:text-[1rem] title-name my-1 text-left">
        Lorem ipsum dolor sit Lorem ipsum dolor sit
        <span className="text-white time mr-2">20.12.3</span>
        <span className="text-[#A355AB] tag">#tag</span>
        <span className="text-[#A355AB] tag">#tag</span>
      </h2>
    </div>
  );
};

export default CardBlog;
