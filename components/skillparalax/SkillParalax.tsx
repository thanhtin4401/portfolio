import React from "react";
import { useRef } from "react";
import styles from "./SkillParalax.module.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";

import Image from "next/image";
import img1 from "../../assets/icons/img/frame_01.png";
import img2 from "../../assets/icons/img/frame_02.png";
import img3 from "../../assets/icons/img/frame_03.png";
import img4 from "../../assets/icons/img/frame_04.png";
import img5 from "../../assets/icons/img/frame_05.png";
import img6 from "../../assets/icons/img/frame_06.png";
import img7 from "../../assets/icons/img/frame_07.png";
import img8 from "../../assets/icons/img/frame_08.png";
import img9 from "../../assets/icons/img/frame_09.png";
import img10 from "../../assets/icons/img/frame_10.png";
import img11 from "../../assets/icons/img/frame_11.png";
import img12 from "../../assets/icons/img/frame_12.png";
import img13 from "../../assets/icons/img/frame_13.png";
import img14 from "../../assets/icons/img/frame_14.png";
import img15 from "../../assets/icons/img/frame_15.png";
import img16 from "../../assets/icons/img/frame_16.png";
import img17 from "../../assets/icons/img/frame_17.png";
import img18 from "../../assets/icons/img/frame_18.png";
import img19 from "../../assets/icons/img/frame_19.png";
import img20 from "../../assets/icons/img/frame_20.png";
import img21 from "../../assets/icons/img/frame_21.png";
const SkillParalax = ({ baseVelocity = 1000 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`${styles.parallax}`}>
      <motion.div className={`${styles.scroller}`} style={{ x }}>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img1}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Javascript</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img2}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">
            Web Accessibility
          </p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img3}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">MUI</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img4}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Ant Design</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img5}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Figma</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img6}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Adobe XD</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img7}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Command line</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img8}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Tailwind</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img9}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Responsive</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img10}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Angular</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img11}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">ReactJS</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img12}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">FIREBASE</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img13}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Boostrap</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img14}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">RESTFull APIs</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img15}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">MongoDB</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img16}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Git</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img17}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">VS Code</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img18}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">JQuery</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img19}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Github</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img20}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">CSS 3</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img21}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">HTML 5</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img1}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Javascript</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img2}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">
            Web Accessibility
          </p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img3}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">MUI</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img4}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Ant Design</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img5}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Figma</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img6}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Adobe XD</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img7}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Command line</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img8}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Tailwind</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img9}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Responsive</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img10}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Angular</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img11}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">ReactJS</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img12}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">FIREBASE</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img13}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Boostrap</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img14}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">RESTFull APIs</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img15}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">MongoDB</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img16}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Git</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img17}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">VS Code</p>
        </div>

        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img18}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">JQuery</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img19}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">Github</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img20}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">CSS 3</p>
        </div>
        <div className="mx-2  flex justify-center items-center flex-col">
          <Image
            src={img21}
            className="w-[5rem] h-10 mx-2 object-contain"
            alt=""
          />
          <p className="text-[16px] skill-name font-bold mt-4">HTML 5</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillParalax;
