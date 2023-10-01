import React from "react";

const HeaderSection = () => {
  return (
    <section className="h-screen w-full bg-[#212121]">
      <div className=" flex justify-center  h-full items-center">
        <div className="relative z-10">
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696156572/Personal_Branding/Header/Group_1868_vsuopt.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151785/Personal_Branding/Header/VS_Code_Light_i9yqks.png"
            alt=""
            className="absolute top-0 right-0"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151784/Personal_Branding/Header/Icon-1_e0fgtz.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151798/Personal_Branding/Header/Icon-2_owdsuw.png"
            alt=""
            className="absolute bottom-0 right-0"
          />
          <img
            src="https://res.cloudinary.com/dvzingci9/image/upload/v1696151798/Personal_Branding/Header/Icon_f7lxtt.png"
            alt=""
            className="absolute bottom-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
