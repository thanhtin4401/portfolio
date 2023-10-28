"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <section className="about_me container w-full flex justify-center mt-48">
      <div className="w-full  lg:w-[80%] px-2 sm:pl-unset py-8">
        <div className="w-full">
          <h1 className="text-[2rem] font-[600]">About me</h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full h-full grid grid-cols-7 gap-1">
            <div className="col-span-7 lg:col-span-3 row-span-3  hover:scale-110 transition-all duration-200 lg:row-span-4 rounded-lg  bg-[red] overflow-hidden">
              <Image
                width={1200}
                height={1200}
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1696607426/DSC058322_nowqct.png"
                alt=""
                className="h-full object-cover w-full"
              />
            </div>
            <div className="hover:scale-110 transition-all duration-200 col-span-7 lg:col-span-4 row-span-2 rounded-lg bg-[#101010]">
              <div className="p-4">
                <h1 className="text-[4rem] font-[700]">IM THANH TIN</h1>
                <p className="text-[1rem] font-normal text-[#7A7A7A]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  hic quibusdam officia cum repudiandae cupiditate amet
                  voluptate maiores error, quae esse deleniti quos nobis beatae,
                  atque maxime nisi ipsum provident alias delectus obcaecati!
                  Eligendi ratione, harum vel delectus porro ut repellat amet
                  cupiditate accusamus sit nisi fuga, hic possimus facilis?
                </p>
              </div>
            </div>
            <div className="hover:scale-110 transition-all duration-200 col-span-4 lg:col-span-3 row-span-2 rounded-lg bg-[white] text-black border-2 border-[#4BCCFE]">
              <div className="p-4">
                <h1 className="text-[2rem] font-[700]">Skills</h1>
                <ul>
                  <li>SKill</li>
                  <li>SKill</li>
                  <li>SKill</li>
                  <li>SKill</li>
                  <li>SKill</li>
                </ul>
              </div>
            </div>
            <div className="hover:scale-110 transition-all duration-200 row-span-2 col-span-3 lg:col-span-1 rounded-lg bg-[black] border-[2px] border-[#101010]">
              <div className="p-2 flex flex-col h-full justify-between">
                <h1 className="text-[#737373] text-[3rem] font-[700]">
                  {/* {time.toLocaleTimeString(navigator.language, {
                    hour: "2-digit",
                    minute: "2-digit",
                  })} */}
                </h1>
                <h2 className="text-[1rem] text-[#737373]">
                  Current local time
                </h2>
              </div>
            </div>
            <div className="hover:scale-110 transition-all duration-200 row-span-2 col-span-7 lg:col-span-3 rounded-lg bg-[orange]">
              <div className="p-4">
                <h1>Certificate</h1>
              </div>
            </div>
            <div className="hover:scale-110 transition-all duration-200 row-span-2 col-span-7 lg:col-span-4 rounded-lg bg-[#101010] border-2 border-[white]">
              <div className="p-4 flex justify-between">
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
                <div className="w-[4rem] h-[4rem] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
