import React from "react";

const AboutMe = () => {
  return (
    <section className="about_me container w-full flex justify-center">
      <div className="w-full  lg:w-[80%] px-2 sm:pl-unset py-8">
        <div className="w-full">
          <h1 className="text-[2rem] font-[600]">About me</h1>
        </div>
        <div className="w-full h-[50rem] flex justify-center ">
          <div className="w-full h-full grid grid-cols-7 gap-1 ">
            <div className="col-span-7 lg:col-span-3 row-span-3 lg:row-span-4 rounded-lg bg-[red]">
              01
            </div>
            <div className="col-span-7 lg:col-span-4 row-span-2 rounded-lg bg-[blue]">
              02
            </div>
            <div className="col-span-4 lg:col-span-3 row-span-2 rounded-lg bg-[green]">
              03
            </div>
            <div className="row-span-2 col-span-3 lg:col-span-1 rounded-lg bg-[yellow]">
              03
            </div>
            <div className="row-span-2 col-span-3 rounded-lg bg-[orange]">
              03
            </div>
            <div className="row-span-2 col-span-4 rounded-lg bg-[white]">
              03
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
