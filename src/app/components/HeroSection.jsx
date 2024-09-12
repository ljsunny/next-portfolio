import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center mb-6 text-center sm:text-left">
          <h1 className="text-white nb04 text-6xl font-extrabold sm:text-5xl">
            Hello I'm Jisun
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            id dolore excepturi quasi dolorum blanditiis voluptates molestias in
            veritatis eos. Quos distinctio a eos incidunt reprehenderit possimus
            porro asperiores delectus?
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black sm:w-fit">Hire Me</button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 border border-white sm:w-fit">Download CV</button>
          </div>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[500px] h-[400px] relative">
            <Image 
            src="/images/profile-photo.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
