import React from "react";
import Image from "next/image";

import { assets, serviceData } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offers</h4>
      <h2 className="text-center text-5xl font-ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am an Entrepreneur and a Mid-Level Software Engineer. I specialize in
        building scalable full-stack web applications using Python/Django and
        React/Next.js. I write clean code and create pixel-perfect designs. With
        over two years of experience, I have worked as a Software Engineer at
        two software companies.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 cursor-pointer "
          >
            <Image src={icon} alt="s" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="Right Arrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
