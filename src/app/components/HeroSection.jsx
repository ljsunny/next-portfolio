"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HeroSection = () => {
  // ✅ tsParticles 엔진 초기화 (중요)
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

      {/* ✅ PARTICLES BACKGROUND */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            color: { value: "#60a5fa" },
            opacity: { value: 0.4 },
            move: { enable: true, speed: 0.6 },
          },
        }}
      />

      {/* subtle glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.08),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left px-6"
        >
          <h1 className="text-white mb-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              Hello I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={["Jisun Lee", 1000, "Software Engineer", 1000]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "1.25em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <h2 className="text-gray-400 text-lg sm:text-xl mb-4">
            Backend-focused Full-Stack Engineer
          </h2>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-xl">
            I build and operate production web systems and enjoy solving real-world
            problems through clean, maintainable code.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="#contact">
              <button className="px-6 py-3 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-purple-500 text-white hover:opacity-90">
                Hire Me
              </button>
            </Link>

            <Link href="/Jisun_Lee_Software_Engineer_Java_Backend.pdf" download>
              <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-slate-800">
                Download CV
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-12 lg:mt-0"
        >
          <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#181818]">
            <Image
              src="/images/profile-photo.png"
              alt="profile photo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-500 text-sm animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
};

export default HeroSection;
