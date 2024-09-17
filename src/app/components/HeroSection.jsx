'use client'
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Hello I'm {" "}
            </span>
            <br/>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Jisun Lee',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web developer',
                1000,
                'Software engineer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.2em', display: 'inline-block' }}
              repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            id dolore excepturi quasi dolorum blanditiis voluptates molestias in
            veritatis eos. Quos distinctio a eos incidunt reprehenderit possimus
            porro asperiores delectus?
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white w-full sm:w-fit mb-3 sm:mb-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500">Hire Me</button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 border border-white text-white w-full sm:w-fit">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center my-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[500px] h-[400px] relative">
            <Image 
            src="/images/profile-photo.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
