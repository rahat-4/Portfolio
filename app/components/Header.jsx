import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen mx-auto text-center max-w-3xl w-11/12">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi I'm Mainul Islam Rahat{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Full stack web developer in Bangladesh
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I am an Entrepreneur and a Mid-Level Software Engineer. I specialize in
        building scalable full-stack web applications using Python/Django and
        React/Next.js. I write clean code and create pixel-perfect designs. With
        over two years of experience, I have worked as a Software Engineer at
        two software companies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/resume-of-rahat.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
